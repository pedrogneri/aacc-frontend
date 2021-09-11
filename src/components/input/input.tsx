import React, { ChangeEvent, FocusEvent } from 'react';

import {
  InputContainer,
  StyledInput,
  StyledIconButton,
  Label,
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
    <InputContainer>
      <StyledInput ref={inputRef} {...inputProps} />
      <StyledIconButton onClick={onClick}>
        {endAdornment}
      </StyledIconButton>
    </InputContainer>
  </>
);

export default Input;
