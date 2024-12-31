import { combineReducers } from "redux";
import { userReducer } from "./login/slices";
import { IDataManagementState } from "../types";

export const IDataReducer = combineReducers<IDataManagementState>({
    user:userReducer
})