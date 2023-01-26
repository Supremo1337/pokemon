import { Prosto_One } from "@next/font/google";
import styled from "styled-components";

interface NumbersCircleProps {
  gridColumn: string;
  gridRow: string;
  gridColumnDesktop: string;
  gridRowDesktop: string;
}

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  /* border: solid white 5px; */
  border: 5px solid black;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  /* justify-content: center; */
  @media (min-width: 1024px) {
    width: 64%;
    /* background-image: url("/img/border-imageDesktop.png"); */
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: space-around;
    height: 359px;
    /* border: 0; */
  }
`;

export const Text = styled.label`
  font-size: 3rem;
  /* letter-spacing: 15px; */
`;

export const NumbersBox = styled.div`
  width: 100%;
  height: 100%;
  background: blue;
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  /* gap: 40px; */
  @media (min-width: 1024px) {
    width: 64%;
    height: auto;
  }
`;
export const RowOfTheNumbers = styled.div`
  width: 100%;
  /* background: red; */
  display: grid;
  justify-content: space-between;
  grid-template-columns: 50%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  @media (min-width: 1024px) {
    height: 200px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const NumbersCircle = styled.div<NumbersCircleProps>`
  width: 100px;
  height: 100px;
  /* background: #722518; */
  background-image: url("/img/pokebola.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  @media (min-width: 1024px) {
    grid-column: ${(props) => props.gridColumnDesktop};
    grid-row: ${(props) => props.gridRowDesktop};
  }
`;
export const CirclesNumbers = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
`;

export const WhosThatPokemonImage = styled.div`
  width: 530px;
  height: 583px;
  background-color: black;
  position: absolute;
  left: 14%;
  top: 20%;
`;

export const InterrogationButton = styled.button`
  width: 300px;
  height: 426px;
  /* background: none; */
  background-color: orange;
  position: absolute;
  left: 64%;
  top: 16%;
  border: 0;
  opacity: 0.5;
  cursor: pointer;
`;

export const PokemonName = styled.label`
  position: absolute;
  left: 9%;
  top: 86%;
  font-size: 9rem;
  background-color: black;
  cursor: pointer;
`;
