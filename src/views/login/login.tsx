import {
  Container,
  Description,
  LoginBlock,
  SubTitle,
  Title,
  TitleContainer,
} from './login.style';

const Login = () => (
  <Container>
    <LoginBlock>
      <TitleContainer>
        <Title>Login</Title>
        <SubTitle>AACC Fatec Campinas</SubTitle>
      </TitleContainer>
      <Description>
        Insira seus dados para acessar o gestor de AACC.
      </Description>
    </LoginBlock>
  </Container>
);

export default Login;

