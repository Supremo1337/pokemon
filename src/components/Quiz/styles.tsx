import styled from "styled-components";

interface TextProps {
  fontSize?: string;
  letterSpacing?: string;
  margin?: string;
  cursor?: string;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 833px;
  display: flex;
  border: 5px solid black;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  @media (min-width: 1024px) {
    width: 732px;
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: space-around;
    height: 359px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 833px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
  @media (min-width: 1024px) {
    width: 732px;
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: space-around;
    height: 359px;
    align-items: flex-end;
    width: 85%;
  }
`;

export const DivToGroupShuffleButtonAndText = styled.div`
  width: auto;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1024px) {
    width: 58%;
    flex-direction: row;
  }
`;

export const Text = styled.label<TextProps>`
  font-size: ${(props) => props.fontSize};
  letter-spacing: ${(props) => props.letterSpacing};
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
`;

export const NumbersBox = styled.div`
  width: 100%;
  height: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    height: auto;
  }
`;
export const RowOfTheNumbers = styled.div`
  width: 78%;
  height: 100%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  @media (min-width: 1024px) {
    width: 100%;
    height: 200px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const ShuffleButton = styled.button`
  width: 178px;
  position: relative;
  background: none;
  border: none;
  border-radius: 8px;
  color: #5f5f77;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Pokemon;
  border: 1px solid #5f5f77;
  cursor: pointer;
  &:before {
    border-radius: 8px;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #2d2d35;
    position: absolute;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: 50%;
    transition: transform ease-in-out 0.5s;
    cursor: pointer;
  }
  &:active {
    &:before {
      transform: scaleX(1);
    }
  }
`;
