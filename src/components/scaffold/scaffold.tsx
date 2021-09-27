import React from 'react';
import * as S from './scaffold.style';

type Props = {
  children?: React.ReactElement;
}

const Scaffold = ({ children }: Props) => (
  <S.Container>
    <S.Header>Header</S.Header>

    <S.Sidebar>Sidebar</S.Sidebar>

    <S.Content>{children}</S.Content>
  </S.Container>
);

export default Scaffold;
