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
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Loading from "../Loading";
import { useMediaQuery } from "@mui/material";

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

export interface IPokemonInfo {
  number: number;
  gridColumn: string;
  gridRow: string;
  gridColumnDesktop: string;
  gridRowDesktop: string;
  name: string;
  data: any;
}

const Pokemon: React.FC<{ pokemon: IPokemonInfo }> = ({ pokemon }) => {
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
          <NumbersCircle
            gridColumn={pokemon.gridColumn}
            gridRow={pokemon.gridRow}
            gridColumnDesktop={pokemon.gridColumnDesktop}
            gridRowDesktop={pokemon.gridRowDesktop}
            onClick={handleOpen}
            key={pokemon.name}
          >
            <CirclesNumbers></CirclesNumbers>
          </NumbersCircle>
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

export default function Quiz() {
  const [allPokemons, setAllPokemons] = useState<AxiosResponse | null | void>();
  const [randomPokemons, setRandomPokemons] = useState<any[]>();
  const [loading, setLoading] = useState(true);
  const randomPokemon = Math.floor(Math.random() * 1000);
  const [numberTeste, setNumberTeste] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    setLoading(true);
    var endpoints = [];
    for (var i = 1; i < 1000; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    console.log(endpoints, "ENDPOINTS AQQQQQ");
    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => {
        setAllPokemons(res);
        shuffle(res);
        setLoading(false);
        // shuffle(allPokemons);
      });

    // allPokemons ? shuffle(allPokemons) : "";
    console.log(allPokemons, "Allpokemons no fim do get aq");
    // axios
    //   .get(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
    //   .then(function (response) {
    //     console.log("Todos os pokemons", response);
    //     setAllPokemons(response.data.results);
    //   });

    // shuffle(allPokemons?.data.results);
    // console.log("Results", allPokemons?.data?.results)
  };

  function shuffle(pokemonsAleatorios: any) {
    let currentIndex = pokemonsAleatorios?.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [pokemonsAleatorios[currentIndex], pokemonsAleatorios[randomIndex]] = [
        pokemonsAleatorios[randomIndex],
        pokemonsAleatorios[currentIndex],
      ];
    }
    console.log("ALEATORIO AQ", pokemonsAleatorios);
    setRandomPokemons(pokemonsAleatorios);
    return pokemonsAleatorios;
  }

  return (
    <>
      {console.log(randomPokemons, "randomPokemons aq")}
      <Content>
        <Text onClick={() => getPokemons()}>Quiz</Text>
        {!loading ? (
          <>
            <NumbersBox>
              <RowOfTheNumbers>
                {randomPokemons?.slice(0, 10).map((res, index) => {
                  return (
                    <>
                      <Pokemon key={index} pokemon={res} />
                    </>
                  );
                })}
              </RowOfTheNumbers>
            </NumbersBox>
          </>
        ) : (
          <Loading />
        )}
      </Content>
    </>
  );
}
