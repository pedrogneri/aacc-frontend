import React, {
  ChangeEvent, useState,
} from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { Loading } from '../../components';
import { UserService } from '../../services';

import RecoveryPassword from './recovery-password';

type Params = {
  token: string | null;
  ra: string | null;
}

const useQuery = (): Params => {
  const params = new URLSearchParams(useLocation().search);

  return { ra: params.get('ra'), token: params.get('token') };
};

const RecoveryPasswordContainer = () => {
  const { ra, token } = useQuery();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const sendRecoveryRequest = async (login: string) => {
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

  const handleUpdatePassword = async (password: string) => {
    setIsLoading(true);

    try {
      await UserService.updatePassword(
        ra as string, password, token as string,
      );

      history.push('/login');
    } catch {
      // TODO: Adicionar tratamento de erro
      console.error('Erro na recuperação da senha');
      setIsLoading(false);
    }
  };

  return isLoading ? <Loading /> : (
    <RecoveryPassword
      onRequestRecovery={sendRecoveryRequest}
      onUpdatePassword={handleUpdatePassword}
      step={token && ra ? 'update' : 'request'}
    />
  );
};

export default RecoveryPasswordContainer;
