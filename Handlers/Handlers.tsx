import Config from "../configs/api.config";
import { setCookie } from "nookies";
type SingInData = {
  email: string;
  password: string;
};
type RegisterData = {
  name: string;
  email: string;
  password: string;
};
interface IHandlers {
  loginHandler: (data: SingInData) => Promise<any>;
  getApiUserDataHandler: (token: string) => Promise<any>;
  logoutHandler: () => void;
  registerHandler: (data: RegisterData) => Promise<any>
}


const loginHandler = async (data: SingInData) => {
  let result = null;
  try {
    result = await fetch(Config().loginURl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {}

  return result;
};

const getApiUserDataHandler = async (token: string) => {
  const result = await fetch(Config().userDataURL, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => res.json())
    .catch();
  return result;
};

const logoutHandler = () => {
  setCookie(undefined, "Token", "", {
    maxAge: 0,
  });
};

const registerHandler = async (data: RegisterData) => {
  const result = await fetch(Config().registerURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch();
  return result;
};

const Handlers = (): IHandlers => {
  return {
    loginHandler: loginHandler,
    getApiUserDataHandler: getApiUserDataHandler,
    logoutHandler: logoutHandler,
    registerHandler: registerHandler
  };
};
export default Handlers;
