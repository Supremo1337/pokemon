import { UniquePokeball, CirclesNumbers } from "./styles";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Subtitle, Title } from "../Quiz/styles";

export interface IPokemonInfoProps {
  gridColumn: string;
  gridRow: string;
  gridColumnDesktop: string;
  gridRowDesktop: string;
  name: string;
  data: any;
}

function style(mediaQuery: boolean) {
  return {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100vh",
    background: "#181821",
    border: "2px solid #000",
    boxShadow: 24,
    display: "flex",
    alignItems: "flex-end",
    justifyItems: "flex-end",
    flexDirection: "column",
    outline: "none",
  };
}

export const PokeBall: React.FC<{
  pokemon: IPokemonInfoProps;
  number: number;
}> = ({ pokemon, number }) => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const matches = useMediaQuery("(min-width: 1024px)");

  const handleClick = () => {
    setActive(!active);
  };

  const handleOpen = () => {
    setOpen(true);
    handleClick();
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {pokemon && (
        <>
          <UniquePokeball
            gridColumn={pokemon.gridColumn}
            gridRow={pokemon.gridRow}
            gridColumnDesktop={pokemon.gridColumnDesktop}
            gridRowDesktop={pokemon.gridRowDesktop}
            onClick={handleOpen}
            key={pokemon.name}
            style={{ opacity: active ? "0.1" : "1" }}
          >
            <CirclesNumbers>{`${number}`}</CirclesNumbers>
          </UniquePokeball>
          <Modal open={open}>
            <Box sx={{ ...style(matches) }}>
              <></>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};
