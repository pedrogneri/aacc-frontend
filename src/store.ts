import {
  createStore, action, Action, persist, computed, Computed,
} from 'easy-peasy';
import { User } from './services/user-service';

interface UserStore {
  loggedUser: User | null;
  isLoggedIn: Computed<UserStore, boolean>;
  saveLoggedUser: Action<UserStore, User>;
  clearLoggedUser: Action<UserStore>;
}

export const store = createStore<UserStore>(
  persist({
    loggedUser: null,
    isLoggedIn: computed((state) => !!state.loggedUser?.token),
    saveLoggedUser: action((state, payload) => ({ ...state, loggedUser: payload })),
    clearLoggedUser: action((state) => ({ ...state, loggedUser: null })),
  }),
);
