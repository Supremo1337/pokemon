import styled from "styled-components";

interface TutorialImageProps {
  bgImage: string;
}

export const TutorialImage = styled.div<TutorialImageProps>`
  width: 90%;
  height: 264px;
  background-image: ${(props) => props.bgImage};
  background-position: center;
  background-size: cover;
`;
