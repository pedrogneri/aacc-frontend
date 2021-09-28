import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3em 1em;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: #000;
`;

export const Items = styled.ul`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

export const Item = styled.li`
  display: grid;
  grid-template-areas:
  "icon name name value";
  align-items: center;
  grid-template-columns: min-content 1fr 1fr 1fr;
  column-gap: 1em;
  cursor: pointer;
`;

export const ItemIcon = styled.div`
  grid-area: icon;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background-color: #e2e2e2;

  & > img {
    width: 10px;
  }
`;

export const ItemName = styled.span`
  grid-area: name;
`;

export const FooterButton = styled.div`
  margin-top: auto;
`;
