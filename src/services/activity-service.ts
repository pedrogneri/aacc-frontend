import axios from 'axios';

const baseURL = 'http://localhost:4000/api';

axios.defaults.baseURL = baseURL;

export const getStudentActivities = async (ra: string, token: string) => {
  const headers = {
    'x-access-token': token,
  };
  const response = await axios.get(`atividades/todas/${ra}`, { headers });

  return response.data;
};

export const getActivities = async (token: string) => {
  const headers = {
    'x-access-token': token,
  };
  const response = await axios.get('obter/atividades/todas', { headers });

  return response.data;
};
