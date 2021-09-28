import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Scaffold } from '../../components';
import { useStoreState } from '../../hooks';

const Home = () => {
  const history = useHistory();
  const loggedUser = useStoreState((state) => state.loggedUser);

  useEffect(() => {
    if (!loggedUser?.token) {
      history.push('/login');
    }
  }, [loggedUser]);

  return (
    <Scaffold onSearch={(query: string) => query}>
      <></>
    </Scaffold>
  );
};

export default Home;
