import styled from 'styled-components';

export const Label = styled.label`
  font-size: 14px;
  line-height: 17px;
  color: #000;
`;

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

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #C4C4C4;
`;

export const IconButton = styled.div`
  cursor: pointer;
  padding: 5px;
`;
