import React, { ChangeEvent, FocusEvent } from 'react';

import {
  Container,
  StyledInput,
  Label,
  IconButton,
} from './input.style';

type Props = {
  label?: string,
  inputRef: React.RefObject<HTMLInputElement>,
  type?: string,
  endAdornment?: React.ReactNode,
  value: string,
  placeholder: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void,
  onClick?: () => void,
}

const Input = ({
  label, inputRef, onClick, endAdornment, ...inputProps
}: Props) => (
  <>
    {label && (
      <Label>{label}</Label>
    )}
    <Container>
      <StyledInput ref={inputRef} {...inputProps} />
      {endAdornment && (
        <IconButton onClick={onClick}>
          {endAdornment}
        </IconButton>
      )}
    </Container>
  </>
);

export default Input;
