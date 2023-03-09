import styled from "styled-components";

interface PokeballProps {
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

export const UniquePokeball = styled.div<PokeballProps>`
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
