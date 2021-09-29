import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Scaffold, ActivitiesTable } from '../../components';
import { useStoreState } from '../../hooks';
import { ActivityService } from '../../services';

const Home = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const loggedUser = useStoreState((state) => state.loggedUser);

  const getActivities = async () => {
    setIsLoading(true);
    try {
      let activities = [];

      if (loggedUser?.accessLevel === 'aluno') {
        activities = await ActivityService.getStudentActivities(
          loggedUser?.ra as string,
          loggedUser?.token as string,
        );
      } else {
        activities = await ActivityService.getActivities(loggedUser?.token as string);
      }

      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!loggedUser?.token) {
      history.push('/login');
      return;
    }

    getActivities();
  }, [loggedUser]);

  return (
    <Scaffold
      loading={isLoading}
      onSearch={(query: string) => query}
    >
      <ActivitiesTable />
    </Scaffold>
  );
};

export default Home;
