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

interface PokemonLogoProps {
  display: string;
  displayDesktop: string;
}

export const UniquePokeball = styled.div<ContentProps>`
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
`;

export const CirclesNumbers = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #000;
`;

export const Content = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  background: blue;
  padding: 36px 10px;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    height: 80%;
    padding: 56px;
  }
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: auto;
  background: purple;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DivToGroupButtonsAndImagesOnlyInDesktop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 1024px) {
    width: 100%;
    height: 100%;
    display: flex;
    background: pink;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ButtonsAndLogoDesktop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 1024px) {
    width: 50%;
    height: 100%;
    display: flex;
    background: yellow;
  }
`;

export const BorderRedTitle = styled.div`
  width: 10px;
  height: 40px;
  background: #ff3464;
  border-radius: 0px 8px 8px 0px;
  opacity: 1;
  @media (min-width: 1024px) {
    height: 57px;
  }
`;

export const PokemonLogo = styled.div<PokemonLogoProps>`
  width: 299px;
  height: 110px;
  background-image: url("/img/pokemonLogo.png");
  background-position: center;
  background-size: cover;
  margin: 28px 0 32px 0;
  display: ${(props) => props.display};
  @media (min-width: 1024px) {
    width: 463px;
    height: 171px;
    display: ${(props) => props.displayDesktop};
  }
`;

export const ImageBox = styled.div`
  width: 291px;
  height: 265px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2c2d38;
  box-shadow: 16px 12px 25px #00000069;
  border-radius: 21px;
  padding: 20px;
  @media (min-width: 1024px) {
    width: 650px;
    height: 610px;
    order: -1;
    position: relative;
    top: 92px;
  }
`;

export const WhosThatPokemonImage = styled.div<WhosThatPokemonImageProps>`
  width: 100%;
  height: 100%;
  background-image: ${(props) => props.bgImage};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  filter: ${(props) => props.filter};
`;

export const ActionsButton = styled.button<ActionsButtonProps>`
  width: 325px;
  height: 58px;
  /* display: flex; */
  background: #23242e;
  box-shadow: 8px 9px 8px #0000001a;
  border-radius: 6px;
  cursor: pointer;
  font-size: 2rem;
  font-family: "Poppins";
  border: 0;
  margin: ${(props) => props.margin};
  @media (min-width: 1024px) {
  }
`;

export const RedDiv = styled.div`
  width: 100%;
  height: 15%;
  background: #ff3464;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 12px 0;
  @media (min-width: 1024px) {
    height: 20%;
  }
`;

export const PokemonName = styled.div`
  width: 329px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  font-weight: bold;
  background: #2c2d38 0% 0%;
  box-shadow: 8px 9px 8px #0000001a;
  border-radius: 34px;
  cursor: pointer;
  font-family: "Poppins";
  text-transform: capitalize;
  color: white;
  order: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: normal;
  @media (min-width: 1180px) {
    font-size: 3.8rem;
  }
`;
