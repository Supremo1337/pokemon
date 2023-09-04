import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Loading from "../Loading";
import { Shuffle } from "phosphor-react";
import * as S from "./styles";
import { PokeBall } from "../PokeBall";
import styled from "styled-components";

export default function Quiz() {
  // const [allPokemons, setAllPokemons] = useState<AxiosResponse<any, any>[]>();
  const [randomPokemons, setRandomPokemons] = useState<any[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    getPokemons();
    // }, 900000);
  }, []);

  const getPokemons = () => {
    setLoading(false);
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
        setLoading(true);
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

  return (
    <S.Wrapper>
      {loading ? (
        <>
          <S.Content>
            <S.MainContent>
              <S.Header>
                <S.Title>Pokémon Quiz</S.Title>
                <S.Subtitle fontSize="2.2rem">
                  Selecione uma Pokébola para começar
                </S.Subtitle>
              </S.Header>
              <S.RedDivider />
              <S.PokeBallsGroup>
                {randomPokemons?.slice(0, 8).map((res, index) => {
                  return (
                    <PokeBall key={index} number={index + 1} pokemon={res} />
                  );
                })}
              </S.PokeBallsGroup>
              <S.ShuffleButton onClick={() => getPokemons()}>
                <Shuffle size={24} color="#fff" />
                Aleatorizar
              </S.ShuffleButton>
              <S.Credits>
                <S.Gif
                  width="39px"
                  height="31px"
                  bgImage={`url("/img/lucario.gif")`}
                />
                <S.Subtitle fontSize="1.8rem">
                  Criado por <span>Lucas Wyllame</span>
                </S.Subtitle>
              </S.Credits>
            </S.MainContent>
          </S.Content>
          <S.RedBar />
        </>
      ) : (
        <Loading />
      )}
    </S.Wrapper>
  );
}
