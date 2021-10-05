import { TextField } from '@mui/material';
import styled from 'styled-components/macro';

export const Label = styled.label`
  font-size: 14px;
  line-height: 17px;
  color: #000;
`;

export const StyledTextField = styled(TextField)({
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
    borderBottomColor: '#000',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#000',
    },
    '&:hover fieldset': {
      borderColor: '#000',
    },
    '&.Mui-focused fieldset': {
      borderWidth: '1px',
      borderColor: '#000',
    },
  },
});
