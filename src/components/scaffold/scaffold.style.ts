import styled from 'styled-components/macro';

export const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas: 
    "sidebar header"
    "sidebar content";
  grid-template-columns: 250px 1fr;
  grid-template-rows: 150px 1fr;
`;

export const Header = styled.header`
  grid-area: header;
  padding: 2vh 3vw 2vh 5vw;
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;
  background: rgba(229, 229, 229, 0.5);
`;

export const Content = styled.main`
  grid-area: content;
  padding: 0 3vw 0 5vw;
`;
