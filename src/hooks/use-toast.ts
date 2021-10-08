import { useContext } from 'react';

import ToastContext from '../components/toast/toast.context';

const useToast = () => useContext(ToastContext);

export default useToast;
