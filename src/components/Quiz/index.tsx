import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Loading from "../Loading";
import { Shuffle } from "phosphor-react";
import * as S from "./styles";
import styled from "styled-components";
import * as GS from "@/styles/globalStyles";
import { PokeBall } from "../PokeBall";

export default function Quiz() {
  // const [allPokemons, setAllPokemons] = useState<AxiosResponse<any, any>[]>();
  const [randomPokemons, setRandomPokemons] = useState<any[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPokemons();
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
                <GS.Title>Pokémon Quiz</GS.Title>
                <GS.Subtitle fontSize="2.2rem" color="#D7D8DE">
                  Selecione uma Pokébola para começar
                </GS.Subtitle>
              </S.Header>
              <S.RedDivider />
              <S.PokeBallsGroup>
                {randomPokemons?.slice(0, 8).map((res, index) => {
                  return (
                    <PokeBall
                      key={index}
                      number={index + 1}
                      pokemon={res}
                      loading={loading}
                    />
                  );
                })}
              </S.PokeBallsGroup>
              <S.ShuffleButton onClick={() => getPokemons()}>
                <Shuffle size={24} color="#fff" />
                Aleatorizar
              </S.ShuffleButton>
              <S.Credits>
                <GS.Gif width="39px" height="31px" bgImage={"lucario"} />
                <GS.Subtitle color="#FFFFFF" fontSize="1.8rem">
                  Criado por <span>Lucas Wyllame</span>
                </GS.Subtitle>
              </S.Credits>
            </S.MainContent>
          </S.Content>
          <GS.RedBar />
        </>
      ) : (
        <Loading />
      )}
      <S.UnownQuestion />
    </S.Wrapper>
  );
}
