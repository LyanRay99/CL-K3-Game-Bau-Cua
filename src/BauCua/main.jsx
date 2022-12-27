import React from "react";
import { PlayGame } from "./PlayGame";
import { InfoGame } from "./InfoGame";

export const Main = () => {
  return (
    <section>
      <InfoGame />
      <PlayGame />
    </section>
  );
};
