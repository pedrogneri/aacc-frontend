import React from 'react';

import * as S from './sidebar.style';

type MenuEntry = {
  imagePath: string;
  name: string;
}

type Props = {
  type: 'professor' | 'student';
  onLogout: Function;
}

const Sidebar = ({ type, onLogout }: Props) => {
  const STUDENT_ENTRIES: MenuEntry[] = [
    { imagePath: 'icons/menu/activity.svg', name: 'Atividades' },
  ];

  const PROFESSOR_ENTRIES: MenuEntry[] = [
    { imagePath: 'icons/menu/activity.svg', name: 'Atividades' },
    { imagePath: 'icons/menu/students.svg', name: 'Alunos' },
    { imagePath: 'icons/menu/reports.svg', name: 'Relatórios' },
    { imagePath: 'icons/menu/users.svg', name: 'Usuários' },
  ];

  const menuEntries = {
    professor: PROFESSOR_ENTRIES,
    student: STUDENT_ENTRIES,
  };

  return (
    <S.Container>
      <S.Title>MENU</S.Title>
      <S.Items>
        {menuEntries[type].map(({ imagePath, name }) => (
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
