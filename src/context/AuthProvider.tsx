import { createContext, useState } from "react";
import { IAuth } from "../interfaces/iauth.interface";

interface MyContextType {
  auth: IAuth | null;
  setAuth?: React.Dispatch<React.SetStateAction<IAuth | null>>;
  persist: IAuth | null;
  setPersist?: React.Dispatch<React.SetStateAction<IAuth | null>>;
}
const AuthContext = createContext<MyContextType>({ auth: null, persist: null });

type PropsAuthProvider = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: PropsAuthProvider) => {
  const [auth, setAuth] = useState<IAuth | null>(
    JSON.parse(localStorage.getItem("persist") as string)
  );
  const [persist, setPersist] = useState<IAuth | null>(
    JSON.parse(localStorage.getItem("persist") as string)
  );

  console.log("AuthProvider VALUES", persist);

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
