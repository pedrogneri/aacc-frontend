import { Select, TextField } from '@mui/material';
import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  max-width: 440px;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 14px;
  line-height: 17px;
  color: #000;
`;

const selectCss = css({
  '& label.Mui-focused': {
    color: '#000',
  },
  '& .MuiInput-input': {
    padding: '8px 0',
  },
  '& .MuiOutlinedInput-input': {
    padding: '8px',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#c4c4c4',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#c4c4c4',
    },
    '&:hover fieldset': {
      borderColor: '#c4c4c4',
    },
    '&.Mui-focused fieldset': {
      borderWidth: '1px',
      borderColor: '#c4c4c4',
    },
  },
});

export const StyledTextField = styled(TextField)`
  ${selectCss}
`;

export const StyledSelect = styled(Select)`
  ${selectCss}
`;
