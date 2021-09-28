import { Action, createTypedHooks } from 'easy-peasy';
import { User } from '../services/user-service';

interface UserStore {
  loggedUser: User | null;
  saveLoggedUser: Action<UserStore, User>;
  clearLoggedUser: Action<UserStore>;
}

export const {
  useStoreActions, useStoreState, useStoreDispatch, useStore,
} = createTypedHooks<UserStore>();
