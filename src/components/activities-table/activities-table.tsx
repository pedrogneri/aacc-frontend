import React from 'react';
import { Activity } from '../../services/activity-service';

import * as S from './activities-table.style';

type Props = {
  activities: Activity[];
}

const ActivityTable = ({ activities }: Props) => {
  const capitalizeValue = (value: string) => {
    const [first, ...rest] = value.split('');
    return first.toUpperCase() + rest.join('');
  };

  return (
    <S.Container>
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
          <S.Cell>8 Hrs</S.Cell>
          <S.Cell>
            <img src="icons/info.svg" alt="" />
          </S.Cell>
        </S.Row>
      ))}
    </S.Container>
  );
};

export default ActivityTable;
