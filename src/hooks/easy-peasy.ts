import { Action, Computed, createTypedHooks } from 'easy-peasy';
import { User } from '../services/user-service';

interface UserStore {
  loggedUser: User | null;
  isLoggedIn: Computed<UserStore, boolean>;
  saveLoggedUser: Action<UserStore, User>;
  clearLoggedUser: Action<UserStore>;
}

export const {
  useStoreActions, useStoreState, useStoreDispatch, useStore,
} = createTypedHooks<UserStore>();
