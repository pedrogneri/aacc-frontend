import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000;
  padding: 2em 3em;
  box-sizing: border-box;
  background-image: url('images/login-cover.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 760px) {
    padding: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5em;
  background-color: #fff;
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 650px;

  @media (max-width: 760px) {
    max-width: inherit;
    max-height: inherit;
    padding: 0 3em;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  line-height: 29px;
  color: #000;
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 17px;
  color: #949494;
`;

export const Description = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: #000;
  padding: 28px 0;
`;

export const InputContainer = styled.div`
  margin-bottom: 8px;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 760px) {
    flex-direction: column;
    width: 100%;
  }
`;
