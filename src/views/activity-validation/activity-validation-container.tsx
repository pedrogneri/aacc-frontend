import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Activity } from '../../interfaces';
import { useStoreState } from '../../hooks';
import { ActivityService } from '../../services';

import ActivityValidation from './activity-validation';
import { Loading } from '../../components';

type Params = {
  id: string;
}

const ActivityValidationContainer = () => {
  const { id } = useParams<Params>();
  const history = useHistory();

  const loggedUser = useStoreState((state) => state.loggedUser);
  const [activity, setActivity] = useState<Activity>();
  const [isLoading, setIsLoading] = useState(true);

  const getActivity = async () => {
    setIsLoading(true);
    try {
      const activityResponse = await ActivityService.getActivityById(
        loggedUser?.token as string, id,
      );

      setActivity(activityResponse);
      setIsLoading(false);
    } catch {
      history.push('/activities');
    }
  };

  const handleUpdateActivity = async (values: any) => {
    setIsLoading(true);
    try {
      const updatedActivity = {
        _id: activity?.id,
        status: values.status,
        RA: activity?.studentRA,
      };

      await ActivityService.updateActivity(
        loggedUser?.token as string,
        updatedActivity,
      );

      history.push('/activities');
    } catch {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getActivity();
  }, []);

  return isLoading ? <Loading /> : (
    <ActivityValidation activity={activity} onUpdateActivity={handleUpdateActivity} />
  );
};

export default ActivityValidationContainer;
