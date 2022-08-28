import { createContext } from "react";

export interface AuthState{
  userInfo : {},
  setUserInfo: value => {}

}

export const AuthContext = createContext({} as AuthState);