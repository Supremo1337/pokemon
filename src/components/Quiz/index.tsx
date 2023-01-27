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

export interface IPokemonInfo {
  number: number;
  gridColumn: string;
  gridRow: string;
  gridColumnDesktop: string;
  gridRowDesktop: string;
  name: string;
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

  return (
    <NumbersCircle
      gridColumn={pokemon.gridColumn}
      gridRow={pokemon.gridRow}
      gridColumnDesktop={pokemon.gridColumnDesktop}
      gridRowDesktop={pokemon.gridRowDesktop}
      onClick={handleOpen}
      key={pokemon.name}
    >
      <CirclesNumbers></CirclesNumbers>
      <Modal open={open}>
        <Box sx={style}>
          {visible && "1" ? (
            <WhosThatPokemonImage
              bgImage={`url(/img/snorlaxSombra.png)` || ""}
            />
          ) : (
            <>
              <WhosThatPokemonImage
                bgImage={`url(/img/snorlaxColorido.png)` || ""}
              />
              <PokemonName onClick={handleClose}>{pokemon.name}</PokemonName>
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
    </NumbersCircle>
  );
};

export default function Quiz() {
  const [allPokemons, setAllPokemons] = useState<AxiosResponse | null | void>();
  const [randomPokemons, setRandomPokemons] = useState<any[]>();
  const randomPokemon = Math.floor(Math.random() * 1000);
  const [numberTeste, setNumberTeste] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    // var endpoints: any = [];
    // for (var i = 1; i < 1000; i++) {
    //   endpoints.push(
    //     `https://pokeapi.co/api/v2/pokemon?limit=1000&offset=${randomPokemon}`
    //   );
    //   var reponse = axios
    //     .all(endpoints.map((endpoint: any) => axios.get(endpoint)))
    //     .then((res) => setAllPokemons(res));
    // }
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=1000&offset=${randomPokemon}`
      )
      .then(function (response) {
        console.log("Todos os pokemons", response);
        setAllPokemons(response.data.results);
      });
    // shuffle(allPokemons?.data.results);
    // console.log("Results", allPokemons?.data?.results)
  };

  function shuffle(pokemonsAleatorios: any) {
    let currentIndex = pokemonsAleatorios.length,
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
    <Content>
      <Text onClick={() => shuffle(allPokemons)}>Quiz</Text>
      <NumbersBox>
        <RowOfTheNumbers>
          {randomPokemons?.slice(0, 10).map((res, index) => {
            return <Pokemon key={index} pokemon={res} />;
          })}
        </RowOfTheNumbers>
      </NumbersBox>
    </Content>
  );
}
