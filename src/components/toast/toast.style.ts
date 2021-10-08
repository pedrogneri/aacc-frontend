import styled, { keyframes } from 'styled-components';

const successFrames = keyframes`
  0%, 100% {
    opacity: 0;
    transform: translateY(80px);
  }

  30%, 50%, 75%, 85% {
    opacity: 1;
    transform: translateY(-16px);
  }
`;

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: ${successFrames} 3s ease-in-out;
`;
