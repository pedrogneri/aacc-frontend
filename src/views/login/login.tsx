import React, {
  ChangeEvent, useRef, useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowRightAlt } from '@mui/icons-material';
import { useStoreActions } from '../../hooks';

import { Input, Loading, Button } from '../../components';
import { UserService } from '../../services';

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
  Footer,
  RecoverPassword,
} from './login.style';

const Login = () => {
  const history = useHistory();

  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [isLoading, setIsLoading] = useState(false);

  const saveLoggedUser = useStoreActions((actions) => actions.saveLoggedUser);

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const changePasswordType = () => {
    setPasswordType((v) => (v === 'text' ? 'password' : 'text'));
  };

  const doLogin = async () => {
    setIsLoading(true);
    try {
      const user = await UserService.login(email, password);
      saveLoggedUser(user);

      history.push('/activities');
    } catch {
      // TODO: Adicionar tratamento de erro
      console.error('Erro no login');
      setIsLoading(false);
    }
  };

  return isLoading ? <Loading /> : (
    <Container>
      <Content>
        <Header>
          <Title>Login</Title>
          <SubTitle>AACC Fatec Campinas</SubTitle>
        </Header>

        <Description>
          Insira seus dados para acessar o sistema de AACC
        </Description>

        <InputContainer>
          <Input
            label="E-mail ou RA"
            inputRef={inputRef}
            placeholder="foo@fatec.sp.gov.br"
            value={email}
            onChange={handleChangeEmail}
          />
        </InputContainer>

        <InputContainer>
          <Input
            label="Senha"
            type={passwordType}
            inputRef={inputRef}
            placeholder="***********"
            value={password}
            onChange={handleChangePassword}
            onClick={changePasswordType}
            endAdornment={<img src="icons/password.svg" alt="mostrar senha" />}
          />
        </InputContainer>

        <TermsOfUse>
          Ao acessar, concordo com os
          {' '}
          <u>termos de uso.</u>
        </TermsOfUse>

        <Footer>
          <Button onClick={doLogin} text="Acessar" endIcon={<ArrowRightAlt />} />
          <RecoverPassword>Recuperar Senha</RecoverPassword>
        </Footer>
      </Content>
    </Container>
  );
};

export default Login;
