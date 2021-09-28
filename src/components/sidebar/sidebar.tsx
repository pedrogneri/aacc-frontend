import React from 'react';

import * as S from './sidebar.style';

type MenuEntry = {
  imagePath: string;
  name: string;
}

type Props = {
  onLogout: Function;
}

const Sidebar = ({ onLogout }: Props) => {
  const MENU_ENTRIES: MenuEntry[] = [
    { imagePath: 'icons/menu/activity.svg', name: 'Atividades' },
  ];

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
        <S.Item onClick={() => onLogout()}>
          <S.ItemIcon><img src="icons/menu/logout.svg" alt="" /></S.ItemIcon>
          <S.ItemName>Sair</S.ItemName>
        </S.Item>
      </S.FooterButton>
    </S.Container>
  );
};

export default Sidebar;
