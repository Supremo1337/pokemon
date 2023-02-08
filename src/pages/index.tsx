import { Inter } from "@next/font/google";
import Quiz from "@/components/Quiz";
import styled from "styled-components";
import BasicModal from "@/components/BasicModal";

const inter = Inter({ subsets: ["latin"] });

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: pink; */
  background-image: url("/img/background-quiz.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
`;

export default function Home() {
  return (
    <>
      <Content>
        <BasicModal />
        <Quiz />
      </Content>
    </>
  );
}
