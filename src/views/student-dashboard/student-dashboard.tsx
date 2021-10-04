import React, { useEffect, useState } from 'react';

import {
  Scaffold, ActivitiesTable, CategoryCard, Button,
} from '../../components';
import { useStoreState } from '../../hooks';
import { ActivityService } from '../../services';
import { Activity } from '../../interfaces';

import * as S from './student-dashboard.style';

const CATEGORIES_MOCK = [
  { percent: 25, category: 'A' },
  { percent: 50, category: 'B' },
  { percent: 20, category: 'C' },
  { percent: 15, category: 'D' },
  { percent: 5, category: 'E' },
];

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
        <S.TitleContainer>
          <S.Title>Dashboard</S.Title>
          <S.Subtitle>Acompanhe seu progresso</S.Subtitle>
        </S.TitleContainer>

        <S.Categories>
          {CATEGORIES_MOCK.map(({ percent, category }) => (
            <CategoryCard percent={percent} category={category} />
          ))}
        </S.Categories>

        <Button text="Adicionar atividade" startIcon={<img src="icons/plus.svg" alt="" />} />
        <ActivitiesTable activities={activityList} type="student" />
      </>
    </Scaffold>
  );
};

export default StudentDashboard;
