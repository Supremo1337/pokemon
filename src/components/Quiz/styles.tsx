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
