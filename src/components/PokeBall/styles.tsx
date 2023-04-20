import styled from "styled-components";

interface ContentProps {
  gridColumn: string;
  gridRow: string;
  gridColumnDesktop: string;
  gridRowDesktop: string;
}

interface WhosThatPokemonImageProps {
  bgImage: string;
  filter?: string;
}

interface ActionsButtonProps {
  margin?: string;
}

export interface PokemonLogoProps {
  display: string;
  displayDesktop: string;
}

export interface RedDivProps {
  height: string;
  heightDesktop: string;
}

export const UniquePokeball = styled.div<ContentProps>`
  width: 90px;
  height: 90px;
  background-image: url("/img/Pokeball.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  :hover {
    transform: rotate(45deg);
  }
  @media (min-width: 1024px) {
    width: 107px;
    height: 107px;
  }
`;

export const CirclesNumbers = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #000;
`;

export const RedDiv = styled.div<RedDivProps>`
  width: 100%;
  height: ${(props) => props.height};
  background: #ff3464;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 12px 0;
  @media (min-width: 1024px) {
    height: ${(props) => props.heightDesktop};
    align-items: flex-end;
    padding: 0 56px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 80%;
  background: blue;
`;

export const TitleMarkup = styled.div`
  width: 10px;
  height: 57px;
  border-radius: 0px 8px 8px 0px;
  background: red;
`;
