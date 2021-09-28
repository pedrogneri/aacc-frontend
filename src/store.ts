import {
  createStore, action, Action, persist,
} from 'easy-peasy';
import { User } from './services/user-service';

interface UserStore {
  loggedUser: User | null;
  saveLoggedUser: Action<UserStore, User>;
}

export const store = createStore<UserStore>(
  persist({
    loggedUser: null,
    saveLoggedUser: action((state, payload) => ({ ...state, loggedUser: payload })),
  }),
);
