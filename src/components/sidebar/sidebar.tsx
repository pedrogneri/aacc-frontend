import React from 'react';

import {
  AssignmentOutlined,
  SchoolOutlined,
  AssessmentOutlined,
  PeopleAltOutlined,
  ExitToAppOutlined,
} from '@mui/icons-material';

import * as S from './sidebar.style';

type MenuEntry = {
  Icon: React.FC;
  name: string;
}

type Props = {
  type: 'professor' | 'student';
  onLogout: Function;
}

const Sidebar = ({ type, onLogout }: Props) => {
  const STUDENT_ENTRIES: MenuEntry[] = [
    { Icon: AssignmentOutlined, name: 'Atividades' },
  ];

  const PROFESSOR_ENTRIES: MenuEntry[] = [
    { Icon: AssignmentOutlined, name: 'Atividades' },
    { Icon: SchoolOutlined, name: 'Alunos' },
    { Icon: AssessmentOutlined, name: 'Relatórios' },
    { Icon: PeopleAltOutlined, name: 'Usuários' },
  ];

  const menuEntries = {
    professor: PROFESSOR_ENTRIES,
    student: STUDENT_ENTRIES,
  };

  return (
    <S.Container>
      <S.Title>MENU</S.Title>
      <S.Items>
        {menuEntries[type].map(({ Icon, name }) => (
          <S.Item key={name}>
            <S.ItemIcon>
              <Icon />
            </S.ItemIcon>
            <S.ItemName>{name}</S.ItemName>
          </S.Item>
        ))}
      </S.Items>

      <S.FooterButton>
        <S.Item onClick={() => onLogout()}>
          <S.ItemIcon>
            <ExitToAppOutlined />
          </S.ItemIcon>
          <S.ItemName>Sair</S.ItemName>
        </S.Item>
      </S.FooterButton>
    </S.Container>
  );
};

export default Sidebar;
