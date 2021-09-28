import axios from 'axios';
import jwtDecode from 'jwt-decode';

const baseURL = 'http://localhost:4000/api';

axios.defaults.baseURL = baseURL;

export type User = {
  token: string;
  teacherId?: string;
  name: string;
  email?: string;
  accessLevel: 'adm' | 'aluno' | 'professor';
}

type LoginResponse = {
  token: string;
};

type DecodedToken = {
  idProfessor?: string;
  acesso: 'adm' | 'aluno' | 'professor';
  nome: string;
  email?: string;
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
    accessLevel: decoded.acesso,
    name: decoded.nome,
    email: decoded.email,
    token,
  };

  return user;
};
