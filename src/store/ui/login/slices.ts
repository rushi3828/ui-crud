import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./default";
import { ActionType } from "typesafe-actions";
import { IUserData } from "./types";

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addusers(state, action) {
      state.userData.push(action.payload);
    },
    loginData(state, action) {
      state.loginData = action.payload;
    },
    deleteData: (state, action) => {
      state.userData.splice(action.payload, 1);
    },
    reset: (state) => {
      state.userData = [];
      state.loginData = undefined;
    },
    updateRecord: (state, action: PayloadAction<IUserData>) => {
      const updatedRecordIndex = state?.userData?.findIndex(
        (record) => record.EmpId === action?.payload?.EmpId
      );
      if (updatedRecordIndex !== -1) {
        state.userData[updatedRecordIndex] = action.payload;
      }
    },
  },
});

export const userReducer = slice.reducer;
export const userActionCreator = slice.actions;

export const { addusers } = slice.actions;

export type userActionTypes = ActionType<typeof userActionCreator>;
