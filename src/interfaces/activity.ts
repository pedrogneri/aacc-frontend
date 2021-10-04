export type Status = 'negada' | 'confirmada' | 'pendente';

export interface Activity {
  category: string;
  start: number;
  hours: number;
  name: string;
  status: Status;
  studentName: string;
}
