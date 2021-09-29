import axios from 'axios';

const baseURL = 'http://localhost:4000/api';

axios.defaults.baseURL = baseURL;

type ActivitiesResponse = {
  RA: string;
  categoria: string;
  cidade: string;
  dataDeEnvio: Date;
  inicio: Date;
  termino: Date;
  nomeAluno: string;
  nomeAtividade: string;
  nomePalestrante: string;
  organizador: string;
  status: string;
}

export type Activity = {
  category: string;
  start: Date;
  end: Date;
  name: string;
  status: string;
}

const convertResponseToActivities = (response: ActivitiesResponse[]) => {
  const activities: Activity[] = response.map((v) => (
    {
      category: v.categoria,
      start: v.inicio,
      end: v.termino,
      name: v.nomeAtividade,
      status: v.status,
    }
  ));

  return activities;
};

export const getStudentActivities = async (ra: string, token: string) => {
  const headers = {
    'x-access-token': token,
  };
  const { data } = await axios.get<ActivitiesResponse[]>(
    `atividades/todas/${ra}`, { headers },
  );

  return convertResponseToActivities(data);
};

export const getActivities = async (token: string) => {
  const headers = {
    'x-access-token': token,
  };
  const { data } = await axios.get<ActivitiesResponse[]>(
    'obter/atividades/todas', { headers },
  );

  return convertResponseToActivities(data);
};
