import React, { useEffect, useState } from 'react';

import { Scaffold, ActivitiesTable, CategoryCard } from '../../components';
import { useStoreState } from '../../hooks';
import { ActivityService } from '../../services';
import { Activity } from '../../services/activity-service';

const StudentDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activityList, setActivityList] = useState<Activity[]>([]);
  const loggedUser = useStoreState((state) => state.loggedUser);

  const getActivities = async () => {
    setIsLoading(true);
    try {
      let activities = [];

      activities = await ActivityService.getStudentActivities(
        loggedUser?.ra as string,
        loggedUser?.token as string,
      );

      setActivityList(activities);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <Scaffold
      loading={isLoading}
      onSearch={(query: string) => query}
    >
      <>
        <div>
          <CategoryCard percent={25} category="A" />
        </div>
        <ActivitiesTable activities={activityList} type="student" />
      </>
    </Scaffold>
  );
};

export default StudentDashboard;
