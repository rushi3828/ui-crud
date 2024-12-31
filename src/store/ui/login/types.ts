export interface IUserState {
  processing: boolean;
  userData: IUserData[];
  loginData: ILoginData | undefined;
  deleteData: IUserData[]
  
}

export interface ILoginData {
  username: string;
  password: string;
  remember?: string;
    EmpId: number;
}

export interface IUserData {
  EmpId: number;
  FirstName: string;
  Email: string;
  LastName: string;
  Gender: string;
  MobileNumber: string;
}



export interface IForm {
  EmpId?:number
  FirstName: string;
  LastName: string;
  MobileNumber: string;
  Gender:string
}

export interface IForm1 {
  FirstName?: string;
  LastName?: string;
  MobileNumber?: string;
    EmpId?:number
}

export type IFormField = {
  [key: string]: string | number | string[] | boolean | [] | number;
};
