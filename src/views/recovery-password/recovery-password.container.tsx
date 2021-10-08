import React, {
  useState,
} from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Loading } from '../../components';
import { useToast } from '../../hooks';
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
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const sendRecoveryRequest = async (login: string) => {
    setIsLoading(true);

    try {
      await UserService.recoveryPassword(login);

      history.push('/login');
    } catch {
      setIsLoading(false);
      toast.add({ type: 'error', message: 'Erro na solicitação de recuperação de senha' });
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
      setIsLoading(false);
      toast.add({ type: 'error', message: 'Erro na atualização da senha' });
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
