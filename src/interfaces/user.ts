type AccessLevel = 'adm' | 'user' | 'professor';

export interface User {
  token: string;
  teacherId?: string;
  name: string;
  email?: string;
  accessLevel: AccessLevel;
  ra?: string;
}
