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
      <Input
        outlined
        inputRef={searchInputRef}
        value={query}
        onChange={handleChangeQuery}
        placeholder="Buscar atividades"
        onClick={handleSearch}
        endAdornment={<img src="icons/search.svg" alt="pesquisar" />}
      />
    </S.Container>
  );
};

export default Header;
