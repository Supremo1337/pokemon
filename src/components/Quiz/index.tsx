import {
  CirclesNumbers,
  Content,
  NumbersBox,
  NumbersCircle,
  RowOfTheNumbers,
  Text,
} from "./styles";

export default function Quiz() {
  const rowOfTheNumbers = [{}, {}];
  const circles = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 },
  ];

  const circles2 = [
    { number: 6 },
    { number: 7 },
    { number: 8 },
    { number: 9 },
    { number: 10 },
  ];

  return (
    <Content>
      <Text>Quiz</Text>
      <NumbersBox>
        <RowOfTheNumbers>
          {circles.map((res) => {
            return (
              <NumbersCircle>
                <CirclesNumbers>{res.number}</CirclesNumbers>
              </NumbersCircle>
            );
          })}
        </RowOfTheNumbers>
        <RowOfTheNumbers>
          {circles2.map((res) => {
            return (
              <NumbersCircle>
                <CirclesNumbers>{res.number}</CirclesNumbers>
              </NumbersCircle>
            );
          })}
        </RowOfTheNumbers>
      </NumbersBox>
    </Content>
  );
}
