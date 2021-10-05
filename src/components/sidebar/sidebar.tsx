import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  AssignmentOutlined,
  SchoolOutlined,
  AssessmentOutlined,
  PeopleAltOutlined,
  ExitToAppOutlined,
} from '@mui/icons-material';

import {
  List, ListItem, ListItemIcon,
} from '@mui/material';
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
      <List>
        {menuEntries[type].map(({ Icon, name, route }) => (
          <ListItem disablePadding key={name}>
            <S.StyledButtonListItem onClick={() => handleClickItem(route)}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <S.ItemName>{name}</S.ItemName>
            </S.StyledButtonListItem>
          </ListItem>
        ))}
      </List>

      <S.FooterButton>
        <ListItem disablePadding>
          <S.StyledButtonListItem onClick={() => onLogout()}>
            <ListItemIcon>
              <ExitToAppOutlined />
            </ListItemIcon>
            <S.ItemName>Sair</S.ItemName>
          </S.StyledButtonListItem>
        </ListItem>
      </S.FooterButton>
    </S.Container>
  );
};

export default Sidebar;
