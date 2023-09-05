import * as S from "./styles";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as GS from "@/styles/globalStyles";

export interface IPokemonInfoProps {
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
    boxShadow: 24,
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
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

  const handleOpen = () => {
    setOpen(true);
    setActive(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {pokemon && (
        <>
          <S.UniquePokeball
            onClick={handleOpen}
            key={pokemon.name}
            style={{ opacity: active ? "0.1" : "1" }}
          >
            <S.CirclesNumbers>{`${number}`}</S.CirclesNumbers>
          </S.UniquePokeball>
          <Modal open={open}>
            <Box sx={{ ...style(matches) }}>
              <S.Content>
                <S.TitleDiv>
                  <S.BorderRedTitle />
                  <GS.Title>Quem é esse Pokémon?</GS.Title>
                </S.TitleDiv>
                <S.DivToGroupButtonsAndImages>
                  <S.PokemonLogo display="block" displayDesktop="none" />
                  <S.WhosThatPokemonImageBox>
                    {visible ? (
                      <S.WhosThatPokemon
                        bgImage={
                          `url(${pokemon.data.sprites.other["official-artwork"].front_default})` ||
                          ""
                        }
                        filter={"brightness(0%)"}
                      />
                    ) : (
                      <S.WhosThatPokemon
                        bgImage={
                          `url(${pokemon.data.sprites.other["official-artwork"].front_default})` ||
                          ""
                        }
                      />
                    )}
                  </S.WhosThatPokemonImageBox>
                  <S.ButtonsAndLogoDesktop>
                    <S.PokemonLogo display="none" displayDesktop="block" />
                    <S.ActionsButton
                      margin="28px 0 22px 0"
                      onClick={() => {
                        setVisible(false);
                      }}
                    >
                      Revelar
                    </S.ActionsButton>
                    <S.ActionsButton onClick={handleClose}>
                      Fechar
                    </S.ActionsButton>
                  </S.ButtonsAndLogoDesktop>
                </S.DivToGroupButtonsAndImages>
              </S.Content>
              <GS.RedBar height="160px" heightNotebook="181px">
                <S.RedBarFlexBox>
                  <GS.Subtitle fontSize="2rem">
                    O Pokémon secreto é...
                  </GS.Subtitle>
                  {visible ? (
                    <S.PokemonNameNotVisible />
                  ) : (
                    <S.PokemonName>{pokemon?.data.name}</S.PokemonName>
                  )}
                </S.RedBarFlexBox>
              </GS.RedBar>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};
