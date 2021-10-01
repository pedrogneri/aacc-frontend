import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStoreActions, useStoreState } from '../../hooks';
import { UserService } from '../../services';
import { Header, Loading, Sidebar } from '..';

import * as S from './scaffold.style';

type Props = {
  loading?: boolean;
  children?: React.ReactElement;
  onSearch: Function;
}

const Scaffold = ({ loading, children, onSearch }: Props) => {
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
      <S.Header>
        <Header user={loggedUser} onSearch={onSearch} />
      </S.Header>

      <S.Sidebar>
        <Sidebar onLogout={handleLogout} />
      </S.Sidebar>

      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Scaffold;
