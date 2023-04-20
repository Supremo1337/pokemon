import { Inter } from "@next/font/google";
import Quiz from "@/components/Quiz";
import styled from "styled-components";
import BasicModal from "@/components/TutorialModal";

const inter = Inter({ subsets: ["latin"] });

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background: #181821;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const UnownQuestion2 = styled.div`
  width: 64%;
  height: 900px;
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
    <Content>
      <Quiz />
      {/* <UnownQuestion2 /> */}
    </Content>
  );
}
