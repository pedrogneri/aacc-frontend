import React, {
  ChangeEvent, useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowRightAlt } from '@mui/icons-material';

import { Input, Loading, Button } from '../../components';
import { UserService } from '../../services';

import * as S from './recovery-password.style';

const RecoveryPassword = () => {
  const history = useHistory();

  const [login, setLogin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeLogin = (event: ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const doRecovery = async () => {
    setIsLoading(true);

    try {
      await UserService.recoveryPassword(login);

      history.push('/login');
    } catch {
      // TODO: Adicionar tratamento de erro
      console.error('Erro na recuperação da senha');
      setIsLoading(false);
    }
  };

  return isLoading ? <Loading /> : (
    <S.Container>
      <S.Content>
        <S.Title>Redefinição de Senha</S.Title>
        <S.SubTitle>AACC Fatec Campinas</S.SubTitle>

        <S.Description>
          Insira seu RA para podermos enviar um email com as orientações para troca de senha
        </S.Description>

        <S.InputContainer>
          <Input
            label="RA"
            placeholder="1234"
            value={login}
            onChange={handleChangeLogin}
          />
        </S.InputContainer>

        <S.Footer>
          <Button onClick={doRecovery} text="Enviar" endIcon={<ArrowRightAlt />} />
        </S.Footer>
      </S.Content>
    </S.Container>
  );
};

export default RecoveryPassword;
