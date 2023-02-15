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
  background-image: url("/img/pokeball.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (min-width: 1180px) {
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
  height: 51%;
  background-image: ${(props) => props.bgImage};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  filter: ${(props) => props.filter};

  @media (min-width: 1180px) {
    width: 530px;
    height: 583px;
    /* position: absolute; */
    /* left: 14%; */
    /* top: 20%; */
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

export const PokemonName = styled.label`
  width: max-content;
  max-width: 355px;
  font-size: 6rem;
  background-color: black;
  cursor: pointer;
  text-transform: capitalize;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  order: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: normal;
  @media (min-width: 1180px) {
    font-size: 9rem;

    grid-column: 1/2;
    grid-row: 2/3;
    max-width: unset;
  }
`;

export const InterrogationButton = styled.button`
  width: 100%;
  height: 125px;
  border: 0;
  background: orange;
  opacity: 0.5;
  cursor: pointer;
  display: flex;
  margin: 112px 0 81px 0;
  @media (min-width: 1180px) {
    width: 300px;
    height: 426px;
    position: relative;
    left: 26px;
    bottom: 54px;
    border: 0;
    grid-column: 2/3;
    grid-row: 1/3;
    margin: 0;
  }
  @media (min-width: 1404px) {
    left: -30px;
  }
  @media (min-width: 1786px) {
    left: -41px;
    bottom: 90px;
  }
`;
