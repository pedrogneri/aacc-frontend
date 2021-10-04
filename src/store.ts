import {
  createStore, action, persist, computed,
} from 'easy-peasy';
import { UserStore } from './interfaces/store';

export const store = createStore<UserStore>(
  persist({
    loggedUser: null,
    isLoggedIn: computed((state) => !!state.loggedUser?.token),
    saveLoggedUser: action((state, payload) => ({ ...state, loggedUser: payload })),
    clearLoggedUser: action((state) => ({ ...state, loggedUser: null })),
  }),
);
