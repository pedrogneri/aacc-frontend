import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AddBoxOutlined } from '@mui/icons-material';
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
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [activityList, setActivityList] = useState<Activity[]>([]);
  const [filteredList, setFilteredList] = useState<Activity[]>([]);
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

  const goToActivityForm = () => {
    history.push('/create-activity');
  };

  const filterActivities = (query: string) => {
    const filteredActivities = activityList.filter((v) => {
      const lowerName = v.name.toLowerCase();
      const lowerQuery = query.toLowerCase();

      return lowerName.match(lowerQuery);
    });

    setFilteredList(filteredActivities);
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <Scaffold
      loading={isLoading}
      onSearch={filterActivities}
    >
      <>
        <S.TitleContainer>
          <S.Title>Dashboard</S.Title>
          <S.Subtitle>Acompanhe seu progresso</S.Subtitle>
        </S.TitleContainer>

        <S.Categories>
          {CATEGORIES_MOCK.map(({ percent, category }) => (
            <CategoryCard key={category} percent={percent} category={category} />
          ))}
        </S.Categories>

        <Button
          onClick={goToActivityForm}
          text="Adicionar atividade"
          startIcon={<AddBoxOutlined />}
        />
        <ActivitiesTable
          activities={filteredList?.length > 0 ? filteredList : activityList}
          type="student"
        />
      </>
    </Scaffold>
  );
};

export default StudentDashboard;
