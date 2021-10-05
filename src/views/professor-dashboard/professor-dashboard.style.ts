import { TabList } from '@mui/lab';
import { Tab } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';

import styled from 'styled-components/macro';

export const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3em;
`;

export const StyledTab = muiStyled(Tab)({
  fontSize: '20px',
  fontFamily: '-apple-system,\'Montserrat\',sans-serif',
  textTransform: 'none',

  '&.Mui-selected': {
    color: '#000',
  },
});

export const StyledTabList = muiStyled(TabList)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#000',
  },
});
