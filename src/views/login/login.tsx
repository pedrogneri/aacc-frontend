import { ChangeEvent, useRef, useState } from 'react';
import { Input } from '../../components';
import {
  Container,
  Description,
  Content,
  SubTitle,
  Title,
  InputContainer,
  TermsOfUse,
  SubmitButton,
  Header,
} from './login.style';

const Login = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const changePasswordType = () => {
    setPasswordType((v) => v === 'text' ? 'password' : 'text');
  };

  return (
    <Container>
      <Content>
        <Header>
          <Title>Login</Title>
          <SubTitle>AACC Fatec Campinas</SubTitle>
        </Header>

        <Description>
          Insira seus dados para acessar o gestor de AACC.
        </Description>

        <InputContainer>
          <Input
            label="E-mail ou RA"
            inputRef={inputRef}
            placeholder="alias@fatec.sp.gov.br"
            value={email}
            onChange={handleChangeEmail}
          />
        </InputContainer>

        <InputContainer>
          <Input
            label="Senha"
            type={passwordType}
            inputRef={inputRef}
            placeholder="Digite sua senha"
            value={password}
            onChange={handleChangePassword}
            onClick={changePasswordType}
            endAdornment={<img src="icons/password.svg" />}
          />
        </InputContainer>

        <TermsOfUse>
          Ao acessar, concordo com os <u>termos de uso.</u>
        </TermsOfUse>

        <SubmitButton>
          Acessar
          <img src="icons/arrow-right.svg" />
        </SubmitButton>
      </Content>
    </Container>
  );
};

export default Login;

