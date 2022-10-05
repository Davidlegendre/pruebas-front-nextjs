import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../components/auth/AuthContext";
import { parseCookies } from "nookies";
import Link from "next/link";
import Layout from "../components/Layout";

export default function RegisterPage() {

  const [isloading, setisloagind] = useState(false);
  const [erro, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const { registerUser } = useContext(AuthContext);

  const submitForm = async (data) => {    
    setError("");
    setisloagind(true);
    const result = await registerUser(data);
    setError(result);
    setisloagind(false);
  };

  return (
   <Layout title={"Registro"} isNavbarVisibile={false}>
     <div className="flex justify-center items-center h-screen">
      <form
        className="bg-neutral-800 dark:fondoLogin p-2 rounded grid gap-1"
        onSubmit={handleSubmit(submitForm)}
      >
        <div>
          <input
            {...register("name")}
            type={"text"}
            name="name"
            placeholder="name"
            className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded"
          ></input>
        </div>
        <div>
          <input
            {...register("email")}
            type={"email"}
            name="email"
            placeholder="email"
            className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded"
          ></input>
        </div>
        <div>
          <input
            {...register("password")}
            type={"password"}
            name="password"
            placeholder="password"
            className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded"
          ></input>
        </div>
        <div className="flex justify-between">
          <button className="p-2 w-full hover:bg-neutral-700 rounded">
            Registrarse
          </button>
          <Link href={"/"}>
            <a className="p-2 w-full hover:bg-neutral-700 rounded text-center">
              Ir a Login
            </a>
          </Link>
        </div>
        <div>{isloading && <p>cargando</p>}</div>
        <div>
          <p>{erro}</p>
        </div>
      </form>
    </div>
   </Layout>
  );
}

export async function getServerSideProps(){
  
  const { Token } = parseCookies();
  if (Token !== undefined) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false
      }
    }
  } 
  return {
    props: {}
  }
}