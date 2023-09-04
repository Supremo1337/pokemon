import styled from "styled-components";

interface GifProps {
  width?: string;
  height?: string;
  bgImage?: string;
}

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
`;

export const MainContent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 12px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const RedDivider = styled.div`
  width: 30px;
  height: 1px;
  background: #ff3464;
  margin: 20px 0;
  @media (min-width: 1024px) {
    margin: 30px 0;
  }
`;

export const PokeBallsGroup = styled.div`
  width: 324px;
  display: flex;
  background: transparent linear-gradient(243deg, #23242e 0%, #181821 100%);
  box-shadow: 16px 12px 25px #00000069;
  border-radius: 21px;
  padding: 28px;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;

  @media (min-width: 1024px) {
    width: 632px;
  }
`;

export const ShuffleButton = styled.div`
  width: 285px;
  height: 51px;
  background: #23242e;
  box-shadow: 8px 9px 8px #0000001a;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 1.8rem;
  font-family: "Poppins";
  margin: 30px 0 20px 0;
  color: #ffffff;
  @media (min-width: 1024px) {
    margin: 50px 0 40px 0;
  }
`;

export const Credits = styled.div`
  width: 90%;
  height: auto;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Gif = styled.div<GifProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: ${(props) => props.bgImage};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 10px;
`;
