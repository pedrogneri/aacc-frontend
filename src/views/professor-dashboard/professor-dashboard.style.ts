import styled from 'styled-components/macro';

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 3em;
`;

type TabProps = {
  isActive: boolean;
}

export const Tab = styled.div<TabProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 29px;
  color: #000;
  padding: 8px 0;
  cursor: pointer;
  border-bottom: 1px solid ${({ isActive }) => (isActive ? '#000' : 'transparent')};
  font-weight: normal;

  &:not(:first-child) {
    margin-left: 30px;
  }
`;
