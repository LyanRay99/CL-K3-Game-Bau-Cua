import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ResetGame } from "../store/reducer/R_baucua";

export const InfoGame = () => {
  const TotalScore = useSelector((state) => state.BAUCUA.TotalScore);
  const dispatch = useDispatch();
  return (
    <div className="info">
      <h1 className="info__name">Bầu Cua Tôm Cá</h1>

      <p className="info__gold">Tiền thưởng: {TotalScore}$</p>

      <button className="info__resetGame" onClick={() => dispatch(ResetGame())}>
        Chơi lại
      </button>
    </div>
  );
};
