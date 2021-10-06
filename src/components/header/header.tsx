import React, {
  ChangeEvent, FormEvent, useMemo, useRef, useState,
} from 'react';

import { Search, Person, KeyboardArrowLeft } from '@mui/icons-material';
import { User } from '../../interfaces';

import * as S from './header.style';

type Props = {
  user: User | null;
  onSearch?: Function;
  onBack?: Function;
}

const Header = ({ user, onSearch, onBack }: Props) => {
  const [query, setQuery] = useState('');

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();

    if (onSearch) {
      await onSearch(query);
    }
  };

  const userRole = useMemo(() => {
    switch (user?.accessLevel) {
      case 'user':
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
      {onBack && (
        <S.BackButton onClick={() => onBack()}>
          <KeyboardArrowLeft />
          Voltar
        </S.BackButton>
      )}

      {onSearch && (
        <S.InputContainer onSubmit={handleSearch}>
          <S.StyledInput
            outlined
            value={query}
            onChange={handleChangeQuery}
            placeholder="Buscar atividades"
            startAdornment={<Search />}
          />
        </S.InputContainer>
      )}

      <S.LoggedUser>
        <S.UserImage>
          <Person />
        </S.UserImage>

        <S.UserName>{user?.name}</S.UserName>
        <S.UserRole>{userRole}</S.UserRole>
      </S.LoggedUser>
    </S.Container>
  );
};

export default Header;
