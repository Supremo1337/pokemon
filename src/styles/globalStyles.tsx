import styled, { createGlobalStyle } from "styled-components";

interface TitleProps {
  fontSize?: string;
  letterSpacing?: string;
  margin?: string;
  cursor?: string;
  color?: string;
}
interface SubtitleProps {
  fontSize?: string;
  margin?: string;
  color?: string;
}

interface RedBarProps {
  height?: string;
  heightNotebook?: string;
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
  }
  html,
  body {
    overflow-x: hidden;
    /* background-color: blue; */
    justify-content: center;
    align-items: center;
    font-family: GRIFTER, "Poppins", sans-serif;
    font-size: 62.5%;
    background: #181821;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Title = styled.h1<TitleProps>`
  font-size: 2.5rem;
  margin: 0;
  color: #fff;
  @media (min-width: 1024px) {
    font-size: 3.8rem;
  }
`;

export const Subtitle = styled.label<SubtitleProps>`
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  font-family: "Poppins";
  text-align: center;
  span {
    font-weight: 500;
    font-size: 1.8rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.2rem;
    span {
      font-size: 2.2rem;
    }
  }
`;

export const RedBar = styled.div<RedBarProps>`
  width: 100%;
  height: ${(props) => props.height || "13px"};
  background-color: #ff3464;
  @media (min-width: 1024px) {
    height: ${(props) => props.heightNotebook || "13px"};
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
