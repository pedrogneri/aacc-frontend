import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStoreActions, useStoreState } from '../../hooks';
import { UserService } from '../../services';
import { Header, Loading, Sidebar } from '..';

import * as S from './scaffold.style';

type Props = {
  loading?: boolean;
  children?: React.ReactElement;
  onBack?: Function;
  onSearch?: Function;
}

const Scaffold = ({
  loading, children, onSearch, onBack,
}: Props) => {
  const history = useHistory();
  const loggedUser = useStoreState((state) => state.loggedUser);
  const clearLoggedUser = useStoreActions((actions) => actions.clearLoggedUser);

  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      await UserService.logout(loggedUser?.token);
      clearLoggedUser();

      history.push('/login');
    } catch {
      setIsLoading(false);
    }
  };

  return isLoading ? <Loading /> : (
    <S.Container>
      <S.Sidebar>
        <Sidebar
          type={loggedUser?.accessLevel === 'user' ? 'student' : 'professor'}
          onLogout={handleLogout}
        />
      </S.Sidebar>

      <S.Content>
        <S.Header>
          <Header
            user={loggedUser}
            onSearch={onSearch}
            onBack={onBack}
          />
        </S.Header>

        <div>
          {children}
        </div>
      </S.Content>
    </S.Container>
  );
};

export default Scaffold;
