import React, { useState } from "react";
import { Content, Dots, GifsGrouping } from "./styles";
import { Subtitle, Gif } from "@/styles/globalStyles";

export default function Loading() {
  return (
    <Content>
      <GifsGrouping>
        <Gif bgImage={"lucario"} />
        <Gif bgImage={"raikou"} />
        <Gif bgImage={"infernape"} />
      </GifsGrouping>
      <Subtitle fontSize="2.2rem">
        Carregando
        <Dots />
      </Subtitle>
    </Content>
  );
}
