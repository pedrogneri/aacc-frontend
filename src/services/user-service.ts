import axios from 'axios';

const baseURL = 'http://localhost:4000/api';

axios.defaults.baseURL = baseURL;

export const login = async (user: string, password: string) => {
  const body = {
    login: user,
    senha: password,
  };

  const response = await axios.post(
    '/login', body, { timeout: 10000 },
  );
  return response;
};
