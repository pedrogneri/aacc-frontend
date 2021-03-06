import React, {
  ChangeEvent, useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowRightAlt, Visibility, VisibilityOff } from '@mui/icons-material';
import { useStoreActions, useToast } from '../../hooks';

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
  Header,
  Footer,
  RecoverPassword,
} from './login.style';

const Login = () => {
  const history = useHistory();
  const toast = useToast();

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
      setIsLoading(false);
      toast.add({ type: 'error', message: 'Email ou senha incorretos' });
    }
  };

  const handleClickRecoveryPassword = () => {
    history.push('recovery-password');
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

        <form onSubmit={doLogin}>
          <InputContainer>
            <Input
              label="E-mail ou RA"
              placeholder="foo@fatec.sp.gov.br"
              value={email}
              onChange={handleChangeEmail}
            />
          </InputContainer>

          <InputContainer>
            <Input
              label="Senha"
              type={passwordType}
              placeholder="***********"
              value={password}
              onChange={handleChangePassword}
              onClick={changePasswordType}
              endAdornment={passwordType === 'text' ? <VisibilityOff /> : <Visibility />}
            />
          </InputContainer>

          <TermsOfUse>
            Ao acessar, concordo com os
            {' '}
            <u>termos de uso</u>
          </TermsOfUse>

          <Footer>
            <Button text="Acessar" endIcon={<ArrowRightAlt />} />
            <RecoverPassword onClick={handleClickRecoveryPassword}>
              Recuperar senha
            </RecoverPassword>
          </Footer>
        </form>
      </Content>
    </Container>
  );
};

export default Login;
