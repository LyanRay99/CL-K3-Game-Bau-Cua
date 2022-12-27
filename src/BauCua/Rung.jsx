import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Play } from "../store/reducer/R_baucua";

export const Rung = () => {
  const Result = useSelector((state) => state.BAUCUA.Result);
  const dispatch = useDispatch();

  return (
    <div className="rung">
      <div className="rung__plate">
        <div className="item1">
          <img src={Result[0].image} alt={Result[0].name}></img>
        </div>

        <div className="item2">
          <img src={Result[1].image} alt={Result[1].name}></img>
        </div>

        <div className="item3">
          <img src={Result[2].image} alt={Result[2].name}></img>
        </div>
      </div>

      <button onClick={() => dispatch(Play())}>Xốc</button>
    </div>
  );
};
