import { createContext, useState } from "react";
import { IAuth } from "../interfaces/iauth.interface";

interface MyContextType {
  auth: IAuth | null;
  setAuth?: React.Dispatch<React.SetStateAction<IAuth | null>>;
}
const AuthContext = createContext<MyContextType>({ auth: null });

type PropsAuthProvider = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: PropsAuthProvider) => {
  const [auth, setAuth] = useState<IAuth | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
