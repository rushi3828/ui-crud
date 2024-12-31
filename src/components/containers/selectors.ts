import { IStoreState } from "../../types";
    
export const isListSelector = (
    (State: IStoreState) => State?.data?.dataManagement?.user?.userData
);
  
export const isLoginSelector = (
    (State: IStoreState) => State?.data?.dataManagement?.user?.loginData
  );