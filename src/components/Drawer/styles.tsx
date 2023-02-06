import styled from "styled-components";

interface IconGenProps {
  bgImage: string;
}

export const AppBar = styled.div`
  width: 20%;
  height: 60px;
  background: blue;
  position: fixed;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  z-index: 1100;
  top: 0;
  left: 0;
  right: auto;
  background-color: #1976d2;
  color: #fff;
`;

export const IconGen = styled.div<IconGenProps>`
  width: 30px;
  height: 30px;
  background-color: red;
  background-image: ${(props) => props.bgImage};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
