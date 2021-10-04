import { Action, Computed } from 'easy-peasy';
import { User } from './user';

export interface UserStore {
  loggedUser: User | null;
  isLoggedIn: Computed<UserStore, boolean>;
  saveLoggedUser: Action<UserStore, User>;
  clearLoggedUser: Action<UserStore>;
}
