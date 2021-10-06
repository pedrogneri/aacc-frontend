import React, { useEffect, useMemo, useState } from 'react';

import { TabContext, TabList } from '@mui/lab';

import { Scaffold, ActivitiesTable } from '../../components';
import { useStoreState } from '../../hooks';
import { ActivityService } from '../../services';
import { Activity } from '../../interfaces';

import * as S from './professor-dashboard.style';

const ProfessorDashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activityList, setActivityList] = useState<Activity[]>([]);
  const [activeTab, setActiveTab] = useState<'pending' | 'finished'>('pending');
  const loggedUser = useStoreState((state) => state.loggedUser);

  const fetchActivities = async () => {
    setIsLoading(true);
    try {
      const activities = await ActivityService.getActivities(loggedUser?.token as string);

      setActivityList(activities);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  const tabActivities = useMemo(() => {
    if (activeTab === 'pending') {
      return activityList.filter(({ status }) => status === 'pendente');
    }
    return activityList.filter(({ status }) => status !== 'pendente');
  }, [activityList, activeTab]);

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <Scaffold
      loading={isLoading}
      onSearch={(query: string) => query}
    >
      <>
        <S.TabsContainer>
          <TabContext value={activeTab}>
            <S.StyledTabList onChange={(_, value) => setActiveTab(value)}>
              <S.StyledTab label="Pendentes" value="pending" />
              <S.StyledTab label="Avaliadas" value="finished" />
            </S.StyledTabList>
          </TabContext>
        </S.TabsContainer>

        <ActivitiesTable activities={tabActivities} type="professor" />
      </>
    </Scaffold>
  );
};

export default ProfessorDashboard;
