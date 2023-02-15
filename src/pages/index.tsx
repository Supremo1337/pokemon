import { Inter } from "@next/font/google";
import Quiz from "@/components/Quiz";
import styled from "styled-components";
import BasicModal from "@/components/BasicModal";

const inter = Inter({ subsets: ["latin"] });

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #181821;
  /* background-size: cover; */
  background-repeat: no-repeat;
  /* background-position: center; */
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
`;

const UnownQuestion2 = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    width: 659px;
    height: 100vh;
    background-image: url("/img/UnownQuestion.svg");
    background-size: cover;
    background-repeat: no-repeat;
    mix-blend-mode: soft-light;
    align-self: flex-end;
    position: relative;
    z-index: 0;
  }
`;

export default function Home() {
  return (
    <>
      <Content>
        <UnownQuestion2 />
        {/* <BasicModal /> */}
        <Quiz />
      </Content>
    </>
  );
}
