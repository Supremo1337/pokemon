import {
  CirclesNumbers,
  Content,
  InterrogationButton,
  NumbersBox,
  NumbersCircle,
  PokemonName,
  RowOfTheNumbers,
  Text,
  WhosThatPokemonImage,
} from "./styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  backgroundImage: "url(/img/poke.png)",
  backgroundSize: "cover",
  backgroundRepeat: "noRepeat",
  backgroundPosition: "center",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Quiz() {
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(!open);

  const circles = [
    {
      number: 1,
      gridColumn: "1/2",
      gridRow: "1/2",
      gridColumnDesktop: "1/2",
      gridRowDesktop: "1/2",
      pokeName: "Snorlax",
    },
    {
      number: 2,
      gridColumn: "2/3",
      gridRow: "1/2",
      gridColumnDesktop: "2/3",
      gridRowDesktop: "1/2",
      pokeName: "Pikachu",
    },
    {
      number: 3,
      gridColumn: "1/2",
      gridRow: "2/3",
      gridColumnDesktop: "3/4",
      gridRowDesktop: "1/2",
      pokeName: "Lucario",
    },
  ];

  console.log(open);
  return (
    <Content>
      <Text>Quiz</Text>
      <NumbersBox>
        <RowOfTheNumbers>
          {circles.map((res, index) => {
            return (
              <NumbersCircle
                gridColumn={res.gridColumn}
                gridRow={res.gridRow}
                gridColumnDesktop={res.gridColumnDesktop}
                gridRowDesktop={res.gridRowDesktop}
                onClick={handleModal}
                key={index}
              >
                <CirclesNumbers>{res.number}</CirclesNumbers>
                <Modal open={open}>
                  <Box sx={style}>
                    <WhosThatPokemonImage />
                    <InterrogationButton />
                    <PokemonName onClick={handleModal}>
                      {res.pokeName}
                    </PokemonName>
                  </Box>
                </Modal>
              </NumbersCircle>
            );
          })}
        </RowOfTheNumbers>
      </NumbersBox>
    </Content>
  );
}
