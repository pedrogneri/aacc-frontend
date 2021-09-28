import {
  createStore, action, Action, persist,
} from 'easy-peasy';
import { User } from './services/user-service';

interface UserStore {
  loggedUser: User | null;
  saveLoggedUser: Action<UserStore, User>;
  clearLoggedUser: Action<UserStore>;
}

export const store = createStore<UserStore>(
  persist({
    loggedUser: null,
    saveLoggedUser: action((state, payload) => ({ ...state, loggedUser: payload })),
    clearLoggedUser: action((state) => ({ ...state, loggedUser: null })),
  }),
);
