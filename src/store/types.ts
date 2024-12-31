import { RootState } from "./rootReducer";
import { IUserState } from "./ui/login/types";

export interface IDataManagementState{
    user:IUserState
}



export type IStoreState = RootState;