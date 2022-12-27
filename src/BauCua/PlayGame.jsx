import React from "react";
import { Order } from "./Order";
import { Rung } from "./Rung";

export const PlayGame = () => {
  return (
    <div className="bodyGame">
      <Order />
      <Rung />
    </div>
  );
};
