import React, { ChangeEvent, FocusEvent } from 'react';
import {
  InputAdornment, IconButton, MenuItem,
} from '@mui/material';

import * as S from './input.style';

type SelectItem = {
  value: string;
  display: string;
}

type Props = {
  className?: string;
  outlined?: boolean;
  multiline?: boolean;
  label?: string,
  inputRef?: React.RefObject<HTMLInputElement>,
  type?: string,
  name?: string;
  startAdornment?: React.ReactNode,
  endAdornment?: React.ReactNode,
  value?: string | number,
  placeholder?: string,
  errorMessage?: string | boolean,
  selectItems?: SelectItem[],
  onChange?: (event: any) => void,
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void,
  onClick?: () => void,
}

const Input = ({
  className,
  type,
  outlined,
  multiline,
  label,
  inputRef,
  onClick,
  startAdornment,
  endAdornment,
  placeholder,
  errorMessage,
  selectItems = [],
  ...rest
}: Props) => (
  <S.Container>
    {label && (
      <S.Label>
        {label}
      </S.Label>
    )}
    {type === 'select' ? (
      <S.StyledSelect fullWidth {...rest}>
        {selectItems.map(({ value, display }) => (
          <MenuItem value={value}>{display}</MenuItem>
        ))}
      </S.StyledSelect>
    ) : (
      <S.StyledTextField
        fullWidth
        variant={outlined ? 'outlined' : 'standard'}
        margin="dense"
        className={className}
        ref={inputRef}
        color="primary"
        error={!!errorMessage}
        helperText={errorMessage}
        multiline={multiline}
        InputProps={{
          placeholder,
          startAdornment: !!startAdornment && (
          <InputAdornment position="start">
            {startAdornment}
          </InputAdornment>
          ),
          endAdornment: !!endAdornment && (
          <InputAdornment position="end">
            <IconButton edge={outlined ? 'end' : 'start'} onClick={onClick}>
              {endAdornment}
            </IconButton>
          </InputAdornment>
          ),
        }}
        {...rest}
      />
    )}
  </S.Container>
);

export default Input;
