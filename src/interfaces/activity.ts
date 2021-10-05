export type Status = 'negada' | 'confirmada' | 'pendente';

export interface ActivitiesResponse {
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
  category: string;
  start: number;
  hours: number;
  name: string;
  status: Status;
  studentName: string;
}
