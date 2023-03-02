import styled from "styled-components";

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

interface GifProps {
  width?: string;
  height?: string;
  bgImage?: string;
}

export const Content = styled.div`
  width: 355px;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  gap: 15px;
  z-index: 1;
  /* background-color: purple; */
  justify-content: center;
  @media (min-width: 1024px) {
    width: 732px;
    align-items: center;
    gap: 29px;
  }
  @media (min-height: 696px) {
    height: 100vh;
  }
`;

export const GroupTextsDiv = styled.div`
  width: auto;
  height: auto;
  display: flex;
  /* background-color: blue; */
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1024px) {
    height: auto;
    gap: 20px;
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
  }
`;

export const Divider = styled.label`
  width: 50px;
  height: 1.5px;
  background: #ff3464;
`;

export const NumbersBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent linear-gradient(243deg, #23242e 0%, #181821 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 16px 12px 25px #00000069;
  border-radius: 21px;
  padding: 40px 0;
  @media (min-width: 1024px) {
    width: 632px;
    height: 324px;
  }
`;

export const RowOfTheNumbers = styled.div`
  width: 78%;
  height: 100%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  row-gap: 25px;
  @media (min-width: 1024px) {
    width: 76%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
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
  @media (min-width: 1024px) {
    margin: 30px 0 9px 0;
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
