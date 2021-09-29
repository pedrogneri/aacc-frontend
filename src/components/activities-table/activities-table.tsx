import React from 'react';
import { Activity } from '../../services/activity-service';

import * as S from './activities-table.style';

type Props = {
  activities: Activity[];
}

const ActivitiesTable = ({ activities }: Props) => {
  const getHours = (start: number, end: number) => {
    const diffInMilliSeconds = Math.abs(start - end) / 1000;
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;

    return `${hours} Hrs`;
  };

  const capitalizeValue = (value: string) => {
    const [first, ...rest] = value.split('');
    return first.toUpperCase() + rest.join('');
  };

  return (
    <S.Container>
      <thead>
        <S.Fields>
          <S.ColumnName width={30}>
            Atividade
          </S.ColumnName>
          <S.ColumnName width={25}>
            Status
          </S.ColumnName>
          <S.ColumnName width={15}>
            Categoria
          </S.ColumnName>
          <S.ColumnName width={15}>
            Curso
          </S.ColumnName>
          <S.ColumnName width={10}>
            Horas
          </S.ColumnName>
          <S.ColumnName width={5}>{' '}</S.ColumnName>
        </S.Fields>
      </thead>

      <tbody>
        {activities?.map((activity) => (
          <S.Row>
            <S.Cell>{activity.name}</S.Cell>
            <S.Cell>
              <S.Status status={activity.status}>
                {capitalizeValue(activity.status)}
              </S.Status>
            </S.Cell>
            <S.Cell>{activity.category}</S.Cell>
            <S.Cell>GTI</S.Cell>
            <S.Cell>{getHours(activity.start, activity.end)}</S.Cell>
            <S.Cell>
              <img src="icons/info.svg" alt="" />
            </S.Cell>
          </S.Row>
        ))}
      </tbody>
    </S.Container>
  );
};

export default ActivitiesTable;
