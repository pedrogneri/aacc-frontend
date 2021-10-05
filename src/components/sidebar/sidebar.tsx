import React from 'react';
import { useHistory } from 'react-router-dom';
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
  route: string;
}

type Props = {
  type: 'professor' | 'student';
  onLogout: Function;
}

const STUDENT_ENTRIES: MenuEntry[] = [
  { Icon: AssignmentOutlined, name: 'Atividades', route: '/activities' },
];

const PROFESSOR_ENTRIES: MenuEntry[] = [
  { Icon: AssignmentOutlined, name: 'Atividades', route: '/activities' },
  { Icon: SchoolOutlined, name: 'Alunos', route: '/' },
  { Icon: AssessmentOutlined, name: 'Relatórios', route: '/' },
  { Icon: PeopleAltOutlined, name: 'Usuários', route: '/' },
];

const Sidebar = ({ type, onLogout }: Props) => {
  const history = useHistory();

  const menuEntries = {
    professor: PROFESSOR_ENTRIES,
    student: STUDENT_ENTRIES,
  };

  const handleClickItem = (route: string) => {
    history.push(route);
  };

  return (
    <S.Container>
      <S.Title>MENU</S.Title>
      <S.Items>
        {menuEntries[type].map(({ Icon, name, route }) => (
          <S.Item key={name} onClick={() => handleClickItem(route)}>
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
