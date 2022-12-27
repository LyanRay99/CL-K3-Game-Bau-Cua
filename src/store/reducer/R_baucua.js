import { createSlice } from "@reduxjs/toolkit";
import DataBauCua from "../../data/baucua.json";
import DataResult from "../../data/result.json";

const initialState = {
  BauCua: DataBauCua,
  TotalScore: 1000,
  Result: DataResult,
};

const BAUCUA = createSlice({
  name: "Bau Cua",
  initialState,
  reducers: {
    DatCuoc: (state, actions) => {
      state.BauCua.filter((item) => {
        if (item.name === actions.payload.item.name) {
          if (actions.payload.datCuoc === true && state.TotalScore >= 100) {
            item.order += 100;
            state.TotalScore -= 100;
          } else if (actions.payload.datCuoc === false && item.order >= 100) {
            item.order -= 100;
            state.TotalScore += 100;
          }
        }
        return state.BauCua;
      });
    },
    Play: (state, actions) => {
      const Result_NgauNhien = [];
      for (let i = 0; i < 3; i++) {
        let result = Math.floor(Math.random() * 6);
        Result_NgauNhien.push(state.BauCua[result]);
      }
      state.Result = Result_NgauNhien;

      //* Xử lý tính điểm thưởng
      Result_NgauNhien.forEach((xucXacNN, index) => {
        let indexDSCuoc = state.BauCua.findIndex(
          (qc) => qc.name === xucXacNN.name
        );
        if (index !== -1) {
          state.TotalScore += state.BauCua[indexDSCuoc].order;
        }
      });

      //* Xử lý hoàn tiền đặt cược khi win
      state.BauCua.forEach((item, index) => {
        let hoanTien = Result_NgauNhien.findIndex(
          (qc) => qc.name === item.name
        );

        if (hoanTien !== -1) {
          state.TotalScore += item.order;
          item.order = 0;
        }
      });

      //* Xử lý làm mới game
      for (const item of state.BauCua) {
        item.order = 0;
      }
    },
    ResetGame: (state) => {
      state.BauCua = DataBauCua;
      state.TotalScore = 1000;
      state.Result = DataResult;
    },
  },
});

export const { DatCuoc, Play, ResetGame } = BAUCUA.actions;

export default BAUCUA.reducer;
