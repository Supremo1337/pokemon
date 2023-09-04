import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

export const RedDiv = styled.div`
  width: 100%;
  height: 13px;
  background: #ff3464;
`;
