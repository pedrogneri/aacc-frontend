import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  width: 170px;
  padding: 2em 1em;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  width: 100%;
  text-align: left;
  color: #000;
`;

export const ProgressContainer = styled.div`
  width: 90px;
  height: 90px;
  margin: 2em;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-decoration-line: underline;
  color: #000000;
  width: 100%;
  cursor: pointer;

  & > svg {
    width: 20px;
    margin-left: 5px;
  }
`;
