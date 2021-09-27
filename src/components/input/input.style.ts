import styled from 'styled-components/macro';

export const Label = styled.label`
  font-size: 14px;
  line-height: 17px;
  color: #000;
`;

type InputProps = {
  outlined?: boolean;
}

export const StyledInput = styled.input`
  padding: 12px 6px;
  border: none;
  background-color: transparent;
  color: #000;
  width: 100%;

  &::-webkit-input-placeholder {
    color: #C4C4C4;
  }
  &:-moz-placeholder {
    color: #C4C4C4;
    opacity: 1;
  }
  &::-moz-placeholder {
    color: #C4C4C4;
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: #C4C4C4;
  }
  &::-ms-input-placeholder {
    color: #C4C4C4;
  }
  &::placeholder {
    color: #C4C4C4;
  }
`;

export const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #C4C4C4;
  width: 100%;
  border: ${({ outlined }) => (outlined ? '1px solid #c4c4c4' : '')};
`;

export const IconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 5px;
`;
