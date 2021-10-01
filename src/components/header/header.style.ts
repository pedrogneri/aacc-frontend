import styled from 'styled-components/macro';
import { Input } from '..';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  width: 100%;
  max-width: 440px;
  margin-right: 5em;
`;

export const StyledInput = styled(Input)`
  font-size: 18px;

  &::-webkit-input-placeholder {
    color: #000;
  }
  &:-moz-placeholder {
    color: #000;
    opacity: 1;
  }
  &::-moz-placeholder {
    color: #000;
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: #000;
  }
  &::-ms-input-placeholder {
    color: #000;
  }
  &::placeholder {
    color: #000;
  }
`;

export const LoggedUser = styled.div`
  display: grid;
  grid-template-areas: 
  "image name"
  "image role";
  column-gap: 1em;
  grid-template-rows: min-content 1fr;
`;

export const UserImage = styled.img`
  grid-area: image;
  width: 48px;
  height: 48px;
`;

export const UserName = styled.div`
  grid-area: name;
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
  color: #000;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserRole = styled.div`
  grid-area: role;
  font-size: 14px;
  line-height: 17px;
  color: #949494;
`;
