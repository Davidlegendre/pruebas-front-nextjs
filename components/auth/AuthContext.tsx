import { createContext, useEffect, useState } from "react";

import { setCookie, parseCookies } from "nookies";
import { useRouter } from "next/router";
import Handlers from "../../Handlers/Handlers";

type User = {
    name: string;
    email: string;
    _id: string
}

type SingInData = {
  email: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  singin: (data: SingInData) => Promise<void>;
  user: any;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);


  const router = useRouter();  

  useEffect(() => {
    const { Token } = parseCookies();
          if (Token) {
            Handlers().getApiUserDataHandler(Token).then(result=>{
                 setUser(result.user)
            });
           
          }
  }, []);

  const singin = async (data: SingInData) => {
    const result = await Handlers().loginHandler(data);

    const token: string = result?.token;
    if (token) {
      setCookie(undefined, "Token", token, {
        maxAge: 60 * 60 * 1, //1hora
      });
      router.push("/dashboard")
    }
  };
  const isAuthenticated =  !!user
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        singin,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
