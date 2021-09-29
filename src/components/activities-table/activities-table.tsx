import React from 'react';
import { Activity } from '../../services/activity-service';

import * as S from './activities-table.style';

type Props = {
  activities: Activity[];
}

const ActivityTable = ({ activities }: Props) => (
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
      <S.ColumnName width={10}>
        Curso
      </S.ColumnName>
      <S.ColumnName width={10}>
        Horas
      </S.ColumnName>
      <S.ColumnName width={10}>{' '}</S.ColumnName>
    </S.Fields>

    {activities?.map((activity) => (
      <S.Row>
        <S.Cell>{activity.name}</S.Cell>
        <S.Cell>{activity.status}</S.Cell>
        <S.Cell>{activity.category}</S.Cell>
        <S.Cell>GTI</S.Cell>
        <S.Cell>{activity.start}</S.Cell>
        <S.Cell>I</S.Cell>
      </S.Row>
    ))}
  </S.Container>
);

export default ActivityTable;
