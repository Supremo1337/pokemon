import { Inter } from "@next/font/google";
import Quiz from "@/components/Quiz";
import styled from "styled-components";
import BasicModal from "@/components/TutorialModal";

const inter = Inter({ subsets: ["latin"] });

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background: pink;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <Content>
      <Quiz />
    </Content>
  );
}
