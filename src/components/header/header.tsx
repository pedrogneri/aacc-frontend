import React, { ChangeEvent, useRef, useState } from 'react';

import { Input } from '..';

import * as S from './header.style';

type Props = {
  onSearch: Function;
}

const Header = ({ onSearch }: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    await onSearch(query);
  };

  return (
    <S.Container>
      <S.InputContainer>
        <Input
          outlined
          inputRef={searchInputRef}
          value={query}
          onChange={handleChangeQuery}
          placeholder="Buscar atividades"
          onClick={handleSearch}
          endAdornment={<img src="icons/search.svg" alt="pesquisar" />}
        />
      </S.InputContainer>

      <S.LoggedUser>
        <S.UserImage src="images/default-user.png" />

        <S.UserName>Jonh D.</S.UserName>
        <S.UserRole>Aluno</S.UserRole>
      </S.LoggedUser>
    </S.Container>
  );
};

export default Header;
