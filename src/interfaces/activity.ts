export type Status = 'negada' | 'confirmada' | 'pendente';

export interface ActivitiesResponse {
  _id: string;
  RA: string;
  categoria: string;
  cidade: string;
  inicio: number;
  horas: number;
  nomeAluno: string;
  nomeAtividade: string;
  nomePalestrante: string;
  organizador: string;
  status: Status;
}

export interface Activity {
  id: string;
  category: string;
  start: number;
  hours: number;
  name: string;
  status: Status;
  studentRA: string;
  studentName: string;
}
