import {} from "./styles";
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Loading from "../Loading";
import { Shuffle } from "phosphor-react";
import { PokeBall } from "../PokeBall";
import PersistentDrawerLeft from "../PersistentDrawerLeft";
import { RedDiv } from "../PokeBall/styles";

export default function Quiz() {
  // const [allPokemons, setAllPokemons] = useState<AxiosResponse<any, any>[]>();
  const [randomPokemons, setRandomPokemons] = useState<any[]>();
  const [loading, setLoading] = useState(true);
  // const randomPokemon = Math.floor(Math.random() * 1000);

  useEffect(() => {
    // setTimeout(() => {
    getPokemons();
    // }, 900000);
  }, []);

  const getPokemons = () => {
    setLoading(true);
    var endpoints = [];
    for (var i = 1; i < 1008; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    console.log(endpoints, "ENDPOINTS AQQQQQ");
    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => {
        // setAllPokemons(res);
        shuffle(res);
        setLoading(false);
      });
  };

  function shuffle(pokemons: any) {
    let currentIndex = pokemons?.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [pokemons[currentIndex], pokemons[randomIndex]] = [
        pokemons[randomIndex],
        pokemons[currentIndex],
      ];
    }
    console.log("ALEATORIO AQ", pokemons);
    setRandomPokemons(pokemons);
    return pokemons;
  }

  return <></>;
}
