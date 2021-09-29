import React from 'react';

import * as S from './activities-table.style';

const ActivityTable = () => (
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

    <S.Row>
      <S.Cell>Curso CSS, Criação de websites</S.Cell>
      <S.Cell>Aprovada</S.Cell>
      <S.Cell>M</S.Cell>
      <S.Cell>GTI</S.Cell>
      <S.Cell>8 HRS</S.Cell>
      <S.Cell>I</S.Cell>
    </S.Row>
  </S.Container>
);

export default ActivityTable;
