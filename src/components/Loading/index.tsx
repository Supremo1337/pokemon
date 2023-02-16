import React, { useState } from "react";
import { Gif, Subtitle } from "../Quiz/styles";
import { Content, Dots, GifsGrouping } from "./styles";

export default function Loading() {
  return (
    <>
      <Content>
        <GifsGrouping>
          <Gif width="64px" height="64px" bgImage={`url("/img/lucario.gif")`} />
          <Gif width="64px" height="64px" bgImage={`url("/img/raikou.gif")`} />
          <Gif
            width="64px"
            height="64px"
            bgImage={`url("/img/infernape.gif")`}
          />
        </GifsGrouping>
        <Subtitle fontSize="2.2rem">
          Carregando
          <Dots />
        </Subtitle>
      </Content>
    </>
  );
}
