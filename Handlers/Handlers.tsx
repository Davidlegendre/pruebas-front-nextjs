import Config from "../configs/api.config";
import { setCookie } from 'nookies';
type SingInData = {
  email: string;
  password: string;
};
interface IHandlers {
  loginHandler: (data: SingInData) => Promise<any>;
  getApiUserDataHandler: (token: string) => Promise<any>,
  logoutHandler: () => void
}

const loginHandler = async (data: SingInData) => {
  const result = await fetch(Config().loginURl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

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
    .catch((err) => console.error(err));
  return result;
};

const logoutHandler = () => {
    setCookie(undefined, "Token", "",{
        maxAge: 0
    })

}

const Handlers = (): IHandlers => {
  return {
    loginHandler: loginHandler,
    getApiUserDataHandler: getApiUserDataHandler,
    logoutHandler: logoutHandler
  };
};
export default Handlers;