import axios from 'axios';
import { ActivitiesResponse, Activity, Status } from '../interfaces';

const baseURL = process.env.REACT_APP_API;

axios.defaults.baseURL = baseURL;

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

export const createActivity = async (token: string, activity: Partial<ActivitiesResponse>) => {
  const headers = {
    'x-access-token': token,
  };

  await axios.post(
    'atividade', activity, { headers },
  );
};
