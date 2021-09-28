import React, {
  ChangeEvent, useMemo, useRef, useState,
} from 'react';
import { useStoreState } from '../../hooks';

import { Input } from '..';

import * as S from './header.style';
import { User } from '../../services/user-service';

type Props = {
  user: User | null;
  onSearch: Function;
}

const Header = ({ user, onSearch }: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    await onSearch(query);
  };

  const userRole = useMemo(() => {
    switch (user?.accessLevel) {
      case 'aluno':
        return 'Aluno';
      case 'adm':
      case 'professor':
        return 'Professor';
      default:
        return 'Aluno';
    }
  }, [user]);

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

        <S.UserName>{user?.name}</S.UserName>
        <S.UserRole>{userRole}</S.UserRole>
      </S.LoggedUser>
    </S.Container>
  );
};

export default Header;
