import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  padding: 56px 28px;
  box-sizing: border-box;
`;

export const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #fff;
  width: 300px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const Title = styled.div`
  display: flex;
  font-size: 24px;
  line-height: 29px;
  color: #000;
  padding-right: 22px; 
  border-right: 1px solid #000;
  align-items: center;
`;

export const SubTitle = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 17px;
  color: #949494;
  align-items: center;
  padding-left: 22px;
`;

export const Description = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: #000;
  padding: 28px 0;
`;
