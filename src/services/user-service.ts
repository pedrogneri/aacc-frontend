import axios from 'axios';
import jwtDecode from 'jwt-decode';

const baseURL = 'https://fatec-campinas-aacc.herokuapp.com/api';

axios.defaults.baseURL = baseURL;

type AccessLevel = 'adm' | 'aluno' | 'professor';

export type User = {
  token: string;
  teacherId?: string;
  name: string;
  email?: string;
  accessLevel: AccessLevel;
  ra?: string;
}

type LoginResponse = {
  token: string;
};

type DecodedToken = {
  idProfessor?: string;
  acesso: AccessLevel;
  nome: string;
  email?: string;
  ra?: string;
}

export const login = async (loginEntry: string, password: string) => {
  const body = {
    login: loginEntry,
    senha: password,
  };

  const response = await axios.post<LoginResponse>(
    '/login', body, { timeout: 10000 },
  );

  const { token } = response.data;
  const decoded: DecodedToken = await jwtDecode(token);

  const user: User = {
    teacherId: decoded.idProfessor,
    ra: decoded.ra,
    accessLevel: decoded.acesso,
    name: decoded.nome,
    email: decoded.email,
    token,
  };

  return user;
};

export const logout = async (token?: string) => {
  const headers = {
    'x-access-token': token,
  };

  await axios.post(
    '/logout', {}, { headers, timeout: 10000 },
  );
};
