import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2em;
`;

export const Title = styled.div`
  font-size: 24px;
  line-height: 29px;
  color: #000;
  padding-right: 20px;
  border-right: 1px solid #000;
`;

export const Subtitle = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: #949494;
  padding-left: 20px;
`;

export const Categories = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 2em;
  flex-wrap: nowrap;
  overflow-x: hidden;
  max-width: 0;
  min-width: 100%;
`;

export const AddActivities = styled.div`
  margin-bottom: 2em;
`;
