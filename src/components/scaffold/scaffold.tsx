import React, { useState } from 'react';
import { useStoreActions, useStoreState } from '../../hooks';
import { userService } from '../../services';
import { Header, Loading, Sidebar } from '..';

import * as S from './scaffold.style';

type Props = {
  children?: React.ReactElement;
  onSearch: Function;
}

const Scaffold = ({ children, onSearch }: Props) => {
  const loggedUser = useStoreState((state) => state.loggedUser);
  const clearLoggedUser = useStoreActions((actions) => actions.clearLoggedUser);

  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      await userService.logout(loggedUser?.token);
      clearLoggedUser();
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
