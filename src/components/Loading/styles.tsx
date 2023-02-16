import styled from "styled-components";

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent
    linear-gradient(138deg, #181821 0%, #181821 0%, #121223 100%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  flex-direction: column;
`;

export const GifsGrouping = styled.div`
  display: flex;
`;

export const Dots = styled.span`
  &::after {
    font-size: 2.2rem;
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: ".";
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: ".";
    }
    33% {
      content: "..";
    }
    66% {
      content: "...";
    }
  }
`;
