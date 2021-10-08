import React, {
  ChangeEvent, useState,
} from 'react';
import { ArrowRightAlt } from '@mui/icons-material';

import { Input, Button } from '../../components';

import * as S from './recovery-password.style';

type Props = {
  onRequestRecovery: Function;
  onUpdatePassword: Function;
  step: 'request' | 'update',
}

type FormProps = {
  handler: Function;
}

const RequestStep = ({ handler }: FormProps) => {
  const [login, setLogin] = useState('');

  const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  return (
    <form onSubmit={() => handler(login)}>
      <S.InputContainer>
        <Input
          label="RA"
          placeholder="1234"
          value={login}
          onChange={handleChangeLogin}
        />
      </S.InputContainer>

      <S.Footer>
        <Button text="Enviar" endIcon={<ArrowRightAlt />} />
      </S.Footer>
    </form>
  );
};

const UpdatePasswordStep = ({ handler }: FormProps) => {
  const [password, setPassword] = useState('');

  const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={() => handler(password)}>
      <S.InputContainer>
        <Input
          type="password"
          label="Nova senha"
          placeholder="********"
          value={password}
          onChange={handleChangeLogin}
        />
      </S.InputContainer>

      <S.Footer>
        <Button text="Redefinir senha" endIcon={<ArrowRightAlt />} />
      </S.Footer>
    </form>
  );
};

const RecoveryPassword = ({
  onRequestRecovery,
  onUpdatePassword,
  step,
}: Props) => {
  const description = {
    request: 'Insira seu RA para podermos enviar um email com as orientações para troca de senha',
    update: 'Insira a sua nova senha no campo',
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>Redefinição de Senha</S.Title>
        <S.SubTitle>AACC Fatec Campinas</S.SubTitle>

        <S.Description>{description[step]}</S.Description>

        {step === 'request' ? (
          <RequestStep handler={onRequestRecovery} />
        ) : (
          <UpdatePasswordStep handler={onUpdatePassword} />
        )}
      </S.Content>
    </S.Container>
  );
};

export default RecoveryPassword;
