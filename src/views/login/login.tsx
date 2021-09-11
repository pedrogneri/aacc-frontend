import { ChangeEvent, useRef, useState } from 'react';
import { Input } from '../../components';
import {
  Container,
  Description,
  LoginBlock,
  SubTitle,
  Title,
  TitleContainer,
  InputContainer,
  TermsOfUse,
} from './login.style';

const Login = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Container>
      <LoginBlock>
        <TitleContainer>
          <Title>Login</Title>
          <SubTitle>AACC Fatec Campinas</SubTitle>
        </TitleContainer>
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
            type="password"
            inputRef={inputRef}
            placeholder="Digite sua senha"
            value={password}
            onChange={handleChangePassword}
          />
        </InputContainer>

        <TermsOfUse>
          Ao acessar, concordo com os <u>termos de uso.</u>
        </TermsOfUse>
      </LoginBlock>
    </Container>
  );
};

export default Login;

