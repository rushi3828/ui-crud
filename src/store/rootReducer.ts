import { combineReducers } from "redux";
import { IDataReducer } from "./ui/reducer";


export const rootReducer = combineReducers({
  data: combineReducers({
    dataManagement: IDataReducer,
  }),
});

export type RootState=ReturnType<typeof rootReducer>