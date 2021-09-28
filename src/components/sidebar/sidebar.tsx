import React from 'react';
import { useStoreActions } from '../../hooks';

import * as S from './sidebar.style';

type MenuEntry = {
  imagePath: string;
  name: string;
}

const Sidebar = () => {
  const clearLoggedUser = useStoreActions((actions) => actions.clearLoggedUser);

  const MENU_ENTRIES: MenuEntry[] = [
    { imagePath: 'icons/menu/activity.svg', name: 'Atividades' },
  ];

  const handleLogout = () => {
    clearLoggedUser();
  };

  return (
    <S.Container>
      <S.Title>MENU</S.Title>
      <S.Items>
        {MENU_ENTRIES.map(({ imagePath, name }) => (
          <S.Item key={name}>
            <S.ItemIcon><img src={imagePath} alt="" /></S.ItemIcon>
            <S.ItemName>{name}</S.ItemName>
          </S.Item>
        ))}
      </S.Items>

      <S.FooterButton>
        <S.Item onClick={handleLogout}>
          <S.ItemIcon><img src="icons/menu/logout.svg" alt="" /></S.ItemIcon>
          <S.ItemName>Sair</S.ItemName>
        </S.Item>
      </S.FooterButton>
    </S.Container>
  );
};

export default Sidebar;
