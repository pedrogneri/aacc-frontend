import React, { ChangeEvent, FocusEvent } from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';

import * as S from './input.style';

type Props = {
  className?: string;
  outlined?: boolean;
  label?: string,
  inputRef?: React.RefObject<HTMLInputElement>,
  type?: string,
  name?: string;
  startAdornment?: React.ReactNode,
  endAdornment?: React.ReactNode,
  value?: string,
  placeholder?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void,
  onClick?: () => void,
}

const Input = ({
  className,
  outlined,
  label,
  inputRef,
  onClick,
  startAdornment,
  endAdornment,
  placeholder,
  ...rest
}: Props) => (
  <>
    <S.StyledTextField
      fullWidth
      label={label}
      variant={outlined ? 'outlined' : 'standard'}
      margin="dense"
      className={className}
      ref={inputRef}
      color="primary"
      InputProps={{
        placeholder,
        startAdornment: !!startAdornment && (
          <InputAdornment position="start">
            <IconButton edge={outlined ? 'start' : 'end'} onClick={onClick}>
              {startAdornment}
            </IconButton>
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
  </>
);

export default Input;
