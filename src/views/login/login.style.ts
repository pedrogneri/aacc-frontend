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

export const Header = styled.header`
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

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const TermsOfUse = styled.span`
  font-size: 14px;
  line-height: 17px;
  color: #000;
  margin-bottom: 60px;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  border: none;
  cursor: pointer;

  & > img {
    padding-left: 10px;
  }

  @media (max-width: 760px) {
    width: 100%;
    margin-bottom: 1em;
  }
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

export const RecoverPassword = styled.a`
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;
  color: #000;
  cursor: pointer;
`;
