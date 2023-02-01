import styled, { keyframes } from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

const FadeInAnimation = keyframes`  
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  /* background-color: pink; */
  background-image: url(/img/pokebola.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 500px;
  height: 500px;
  animation: ${FadeInAnimation} 1.5s linear infinite;
  /* opacity: 1; */
`;
