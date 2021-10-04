import { createTypedHooks } from 'easy-peasy';
import { UserStore } from '../interfaces';

export const {
  useStoreActions, useStoreState, useStoreDispatch, useStore,
} = createTypedHooks<UserStore>();
