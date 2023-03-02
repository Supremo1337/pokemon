import { Inter } from "@next/font/google";
import Quiz from "@/components/Quiz";
import styled from "styled-components";
import BasicModal from "@/components/TutorialModal";

const inter = Inter({ subsets: ["latin"] });

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #181821;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* padding: 10px; */
  overflow-y: scroll;
  justify-content: space-between;
  /* @media (min-width: 1024px) {
    justify-content: center;
  } */
`;

const UnownQuestion2 = styled.div`
  width: 64%;
  height: 100vh;
  display: flex;
  background-image: url("/img/UnownQuestion.svg");
  background-size: cover;
  background-repeat: no-repeat;
  mix-blend-mode: soft-light;
  position: absolute;
  z-index: 0;
  align-self: flex-end;
  @media (min-width: 1024px) {
    /* position: relative; */
    display: flex;
    width: 50%;
  }
`;

export default function Home() {
  return (
    <>
      <Content>
        <UnownQuestion2 />
        <BasicModal />
        <Quiz />
      </Content>
    </>
  );
}
