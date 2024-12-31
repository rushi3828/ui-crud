import { UserData } from "../../../components/containers/MockData/UserData";
import { IUserState } from "./types";

export const initialState: IUserState = {
  processing: false,
  userData: UserData,
  loginData: undefined,
  deleteData: [],
  
};
