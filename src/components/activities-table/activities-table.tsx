import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { InfoOutlined, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Activity } from '../../interfaces';

import * as S from './activities-table.style';

type Props = {
  activities: Activity[];
  type: 'student' | 'professor';
}

const STUDENT_COLUMNS = [
  { name: 'Atividade', width: 30 },
  { name: 'Status', width: 25 },
  { name: 'Categoria', width: 15 },
  { name: 'Curso', width: 15 },
  { name: 'Horas', width: 10 },
  { name: ' ', width: 5 },
];

const PROFESSOR_COLUMNS = [
  { name: 'Atividade', width: 30 },
  { name: 'Aluno', width: 25 },
  { name: 'Curso', width: 15 },
  { name: 'Status', width: 15 },
  { name: ' ', width: 5 },
];

const ActivitiesTable = ({
  activities,
  type,
}: Props) => {
  const history = useHistory();

  const columns = useMemo(() => (
    type === 'student' ? STUDENT_COLUMNS : PROFESSOR_COLUMNS
  ), [type]);

  const formattedHours = (hours: number) => `${hours} Hrs`;

  const capitalizeValue = (value: string) => {
    const [first, ...rest] = value.split('');
    return first.toUpperCase() + rest.join('');
  };

  const StudentRow = ({ activity }: { activity: Activity }) => (
    <S.Row>
      <S.Cell>{activity.name}</S.Cell>
      <S.Cell>
        <S.Status status={activity.status}>
          {capitalizeValue(activity.status)}
        </S.Status>
      </S.Cell>
      <S.Cell>{activity.category}</S.Cell>
      <S.Cell>GTI</S.Cell>
      <S.Cell>{formattedHours(activity.hours)}</S.Cell>
      <S.Cell>
        <IconButton>
          <InfoOutlined />
        </IconButton>
      </S.Cell>
    </S.Row>
  );

  const handleEditActivity = (activity: Activity) => {
    history.push(`/activity-validation/${activity.id}`);
  };

  const ProfessorRow = ({ activity }: { activity: Activity }) => (
    <S.Row>
      <S.Cell>{activity.name}</S.Cell>
      <S.Cell>{activity.studentName}</S.Cell>
      <S.Cell>GTI</S.Cell>
      <S.Cell>
        <S.Status status={activity.status}>
          {capitalizeValue(activity.status)}
        </S.Status>
      </S.Cell>
      <S.Cell>
        <IconButton onClick={() => handleEditActivity(activity)}>
          <Edit />
        </IconButton>
      </S.Cell>
    </S.Row>
  );

  const RowComponent = useMemo(() => (
    type === 'student' ? StudentRow : ProfessorRow
  ), [type]);

  return (
    <S.Container>
      <thead>
        <S.Fields>
          {columns.map(({ name, width }) => (
            <S.ColumnName key={name} width={width}>
              {name}
            </S.ColumnName>
          ))}
        </S.Fields>
      </thead>

      <tbody>
        {activities?.map((activity, index) => (
          <RowComponent key={index.toString()} activity={activity} />
        ))}
      </tbody>
    </S.Container>
  );
};

export default ActivitiesTable;
