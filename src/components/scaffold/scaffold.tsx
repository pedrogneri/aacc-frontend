import React from 'react';

import { Header, Sidebar } from '..';

import * as S from './scaffold.style';

type Props = {
  children?: React.ReactElement;
  onSearch: Function;
}

const Scaffold = ({ children, onSearch }: Props) => (
  <S.Container>
    <S.Header>
      <Header onSearch={onSearch} />
    </S.Header>

    <S.Sidebar>
      <Sidebar />
    </S.Sidebar>

    <S.Content>{children}</S.Content>
  </S.Container>
);

export default Scaffold;
