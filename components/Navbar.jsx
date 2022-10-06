import { useRouter } from "next/router.js";
import { useContext } from "react";
import Handlers from "../Handlers/Handlers";
import ActionLink from "./ActionLink.jsx";
import { AuthContext } from "./auth/AuthContext";

export default function Navbar() {

  const router = useRouter();
  const { user } = useContext(AuthContext);
  return (
    <nav className="flex flex-row justify-between">
      <ul className="flex flex-row justify-between">
        <li className="m-2">
          <ActionLink href="/dashboard">Home</ActionLink>
        </li>
        <li className="m-2">
          <ActionLink href="/dashboard/about">about</ActionLink>
        </li>
        <li className="m-2">
          <ActionLink href="/posts">post</ActionLink>
        </li>
        <li className="m-2">
          <button 
            onClick={() => {
              Handlers().logoutHandler();
              router.push("/")
            }}
          >
            logout
          </button>
        </li>
      </ul>
      <div className="m-2">
        {user ? <p>{user?.name}</p>: <p>loading</p>}
      </div>
    </nav>
  );
}
