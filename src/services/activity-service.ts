import axios from 'axios';

const baseURL = 'http://localhost:4000/api';

axios.defaults.baseURL = baseURL;

export type Status = 'negada' | 'confirmada' | 'pendente';

type ActivitiesResponse = {
  RA: string;
  categoria: string;
  cidade: string;
  dataDeEnvio: Date;
  inicio: number;
  horas: number;
  nomeAluno: string;
  nomeAtividade: string;
  nomePalestrante: string;
  organizador: string;
  status: Status;
}

export type Activity = {
  category: string;
  start: number;
  hours: number;
  name: string;
  status: Status;
  studentName: string;
}

const convertResponseToActivities = (response: ActivitiesResponse[]) => {
  const activities: Activity[] = response.map((v) => (
    {
      category: v.categoria,
      start: v.inicio,
      hours: v.horas,
      name: v.nomeAtividade,
      status: v.status,
      studentName: v.nomeAluno,
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
