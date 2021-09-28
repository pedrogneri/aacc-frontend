import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #f1f1f1;
`;

export const Spinner = styled.div`
  @keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  }

  border: 5px solid transparent;
  border-radius: 50%;
  border-top: 5px solid #333;
  border-right: 5px solid #333;
  margin-top: -30px;
  width: 60px;
  height: 60px;
  animation: spin 750ms linear infinite;
`;
