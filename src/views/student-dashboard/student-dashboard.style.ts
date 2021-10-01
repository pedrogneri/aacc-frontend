import styled from 'styled-components/macro';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3em;
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
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 2em;
`;

export const AddActivitiesButton = styled.button`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #fff;
  background-color: #000;
  border: none;
  padding: 8px 14px;
  margin-bottom: 2em;
  cursor: pointer;

  & > img {
    width: 14px;
  }
`;
