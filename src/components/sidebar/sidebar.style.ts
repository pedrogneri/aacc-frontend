import { ListItem, ListItemButton } from '@mui/material';
import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: #000;
  padding: 2em 1em;
`;

export const StyledButtonListItem = styled(ListItemButton)`
  &.MuiListItemButton-root {
    padding: 18px;
  }
`;

export const ItemIcon = styled.div`
  grid-area: icon;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background-color: #e2e2e2;

  & > svg {
    height: 20px;
  }
`;

export const ItemName = styled.span`
  grid-area: name;
`;

export const FooterButton = styled.div`
  margin-top: auto;
`;
