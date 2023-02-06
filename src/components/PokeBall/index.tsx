import {
  Content,
  CirclesNumbers,
  WhosThatPokemonImage,
  PokemonName,
  InterrogationButton,
} from "./styles";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

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
    height: "100%",
    backgroundImage: mediaQuery
      ? "url(/img/whosThatPokeHorizontal.png)"
      : "url(/img/whosThatPokeMobilel.png)",
    backgroundSize: mediaQuery ? "cover" : "contain",
    backgroundRepeat: "noRepeat",
    backgroundPosition: "center",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "479px 173px 82px",
  };
}

export const PokeBall: React.FC<{
  pokemon: IPokemonInfoProps;
  number: number;
}> = ({ pokemon, number }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [visible, setVisible] = useState(true);
  const matches = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {pokemon && (
        <>
          <Content
            gridColumn={pokemon.gridColumn}
            gridRow={pokemon.gridRow}
            gridColumnDesktop={pokemon.gridColumnDesktop}
            gridRowDesktop={pokemon.gridRowDesktop}
            onClick={handleOpen}
            key={pokemon.name}
          >
            <CirclesNumbers>{`${number}`}</CirclesNumbers>
          </Content>
          <Modal open={open}>
            <Box sx={{ ...style(matches) }}>
              {visible && "1" ? (
                <WhosThatPokemonImage
                  bgImage={
                    `url(${pokemon.data.sprites.other["official-artwork"].front_default})` ||
                    ""
                  }
                  filter={"brightness(0%)"}
                />
              ) : (
                <>
                  <WhosThatPokemonImage
                    bgImage={
                      `url(${pokemon.data.sprites.other["official-artwork"].front_default})` ||
                      ""
                    }
                    // bgImage={`url(/img/snorlaxColorido.png)` || ""}
                  />
                  <PokemonName onClick={handleClose}>
                    {pokemon?.data.name}
                  </PokemonName>
                  {console.log("Chegou aq", open)}
                </>
              )}
              <InterrogationButton
                onClick={() => {
                  setVisible(false);
                }}
              />
              ;
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};
