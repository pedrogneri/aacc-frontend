import axios from 'axios';

const baseURL = 'http://localhost:4000/api';

export const login = async (user: string, password: string) => {
  const body = {
    login: user,
    senha: password,
  };

  const response = await axios.post(`${baseURL}/login`, body);
  return response;
};
