import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { ActivitiesResponse, Activity } from '../../interfaces';
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

  const handleUpdateActivity = async (values: Partial<Activity>) => {
    setIsLoading(true);
    try {
      const updatedActivity: Partial<ActivitiesResponse> = {
        _id: activity?.id,
        RA: activity?.studentRA,
        status: values.status,
        horas: values.hours,
        categoria: values.category,
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
