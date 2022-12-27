import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DatCuoc } from "../store/reducer/R_baucua";

export const Order = () => {
  const Baucua = useSelector((state) => state.BAUCUA.BauCua);
  const dispatch = useDispatch();

  return (
    <div className="orderGame">
      {Baucua.map((item, index) => (
        <div className="item" key={index}>
          <div className="item__baucua">
            <img src={item.image} alt={item.name}></img>
          </div>

          <div className="item__order">
            <button
              className="icon"
              onClick={() => dispatch(DatCuoc({ item, datCuoc: true }))}
            >
              +
            </button>
            <span className="gold">{item.order}</span>
            <button
              className="icon"
              onClick={() => dispatch(DatCuoc({ item, datCuoc: false }))}
            >
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
