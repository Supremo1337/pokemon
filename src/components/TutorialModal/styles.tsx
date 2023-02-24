import styled from "styled-components";

interface TutorialImageProps {
  bgImage: string;
  bgImageLaptop: string;
  height: string;
}

export const TutorialImage = styled.div<TutorialImageProps>`
  width: 100%;
  height: ${(props) => props.height};
  background-image: ${(props) => props.bgImage};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media (min-width: 1024px) {
    background-image: ${(props) => props.bgImageLaptop};
  }
`;

export const TabPanelContent = styled.div`
  width: 273px;
  height: 100%;
  display: flex;
  gap: 31px;
  flex-direction: column;
  /* background: pink; */
  @media (min-width: 1024px) {
    width: 880px;
  }
`;
