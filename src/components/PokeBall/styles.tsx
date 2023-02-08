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

export const Content = styled.div<ContentProps>`
  width: 100px;
  height: 100px;
  background-image: url("/img/pokebola.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (min-width: 1024px) {
    grid-column: ${(props) => props.gridColumnDesktop};
    grid-row: ${(props) => props.gridRowDesktop};
  }
`;

export const CirclesNumbers = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #000;
`;

export const WhosThatPokemonImage = styled.div<WhosThatPokemonImageProps>`
  width: 100%;
  height: 100%;
  background-image: ${(props) => props.bgImage};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  filter: ${(props) => props.filter};
  grid-column: 1/2;
  grid-row: 1/2;
  @media (min-width: 1024px) {
    width: 530px;
    height: 583px;
    position: absolute;
    left: 14%;
    top: 20%;
  }
`;

export const PokemonName = styled.label`
  font-size: 8rem;
  height: 120px;
  background-color: black;
  cursor: pointer;
  grid-column: 1/2;
  grid-row: 3/4;
  text-transform: capitalize;
  max-width: max-content;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  @media (min-width: 1024px) {
    font-size: 9rem;
    position: absolute;
    left: 9%;
    top: 86%;
  }
`;

export const InterrogationButton = styled.button`
  width: 100%;
  height: 100%;
  border: 0;
  background: none;
  /* opacity: 0.5; */
  cursor: pointer;
  grid-column: 1/2;
  grid-row: 2/3;
  @media (min-width: 1024px) {
    width: 300px;
    height: 426px;
    position: absolute;
    left: 64.5%;
    bottom: 62%;
    border: 0;
  }
`;
