import { createContext, useState } from "react";

const AuthContext = createContext({});

type PropsAuthProvider = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: PropsAuthProvider) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
