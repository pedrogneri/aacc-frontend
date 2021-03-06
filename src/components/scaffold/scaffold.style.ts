import styled from 'styled-components/macro';

export const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas: 
    "sidebar content"
    "sidebar content";
  grid-template-columns: 250px 1fr;
  grid-template-rows: min-content 1fr;
`;

export const Header = styled.header`
  padding: 2vh 0;
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;
  background: rgba(229, 229, 229, 0.5);
`;

export const Content = styled.main`
  grid-area: content;
  padding: 0 3vw 0 5vw;
  overflow: scroll;
  min-height: 100%;
  height: 0;
`;
