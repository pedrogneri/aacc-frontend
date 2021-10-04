import React, { MouseEventHandler } from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

type Props = {
  text: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled(MuiButton)({
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: '-apple-system,\'Montserrat\',sans-serif',
  color: '#fff',
  backgroundColor: '#000',
  '&:hover': {
    backgroundColor: '#000',
  },
});

const Button = ({
  text,
  startIcon,
  endIcon,
  disabled,
  onClick,
}: Props) => (
  <StyledButton
    disabled={disabled}
    type="submit"
    variant="contained"
    startIcon={startIcon}
    endIcon={endIcon}
    onClick={onClick}
  >
    {text}
  </StyledButton>
);

export default Button;
