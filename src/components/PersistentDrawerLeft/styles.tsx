import styled from "styled-components";

interface IconGenProps {
  bgImage: string;
}

export const AppBar = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
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
  @media (min-width: 1024) {
    width: 20%;
  }
`;

export const IconGen = styled.div<IconGenProps>`
  width: 60px;
  height: 60px;
  background-image: ${(props) => props.bgImage};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ListItemRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
