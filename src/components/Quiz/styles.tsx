import styled from "styled-components";

export const Content = styled.div`
  width: 62%;
  height: 700px;
  display: flex;
  /* border: solid white 5px; */
  background-image: url("/img/NicePng_dialogue-box-png_491514.png");
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  @media (min-width: 1024px) {
    height: 348px;
  }
`;

export const Text = styled.label`
  font-size: 3rem;
  /* letter-spacing: 15px; */
`;

export const NumbersBox = styled.div`
  width: 64%;
  /* background: blue; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 40px;
`;
export const RowOfTheNumbers = styled.div`
  width: 100%;
  height: auto;
  /* background: red; */
  display: flex;
  justify-content: space-between;
`;

export const NumbersCircle = styled.div`
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
`;
export const CirclesNumbers = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #000;
`;
