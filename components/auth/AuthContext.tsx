import { createContext, useEffect, useState } from "react";

import { setCookie, parseCookies } from "nookies";
import { useRouter } from "next/router";
import Handlers from "../../Handlers/Handlers";

type User = {
  name: string;
  email: string;
  _id: string;
};

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
  const isAuthenticated = !!user;

  const router = useRouter();

  const cargarUsuario = async (token) => {
    const data = await Handlers().getApiUserDataHandler(token);
    setUser(data.user);
  };

  useEffect(() => {
    const { Token } = parseCookies();

    if (Token) {
      cargarUsuario(Token);
    }
  }, []);

  const singin = async (data: SingInData) => {
    const result = await Handlers().loginHandler(data);
    if (result.msg === "Bad Request") {
      throw "error";
    } else {
      const token: string = result?.token;
      if (token) {
        setCookie(undefined, "Token", token, {
          maxAge: 60 * 60 * 1, //1hora
        });

        await cargarUsuario(token);
        router.push("/dashboard");
      }
    }
  };

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
