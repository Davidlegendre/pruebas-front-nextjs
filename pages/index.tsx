import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../components/auth/AuthContext";
import { parseCookies } from "nookies";
import Link from "next/link";
import Layout from "../components/Layout";

export default function SinginPage() {

  const [isloading, setisloagind] = useState(false);
    const [erro, setError] = useState(false)
    const { register, handleSubmit } = useForm();

    const { singin } = useContext(AuthContext);

    const submitForm = async (data) => {
      setisloagind(true);
      try {
        await singin(data);
        setError(false)
      } catch (error) {
       setError(true)
      }
      setisloagind(false);
    };

    return (
     <Layout title={"Login"} isNavbarVisibile={false}>
       <div className="flex justify-center items-center h-screen">
        <form
          className="bg-neutral-800 dark:bg-white gap-1 grid dark:text-neutral-900 p-2 rounded"
          onSubmit={handleSubmit(submitForm)}
        >
          <div>
            <input
              {...register("email")}
              type={"email"}
              name="email"
              placeholder="email"
              className="p-2 w-full bg-neutral-200 rounded"
            ></input>
          </div>
          <div>
            <input
              {...register("password")}
              type={"password"}
              name="password"
              placeholder="password"
              className="p-2 w-full bg-neutral-200 rounded"
            ></input>
          </div>
          
          <div className="flex justify-between">
          <button className="p-2 w-full hover:bg-slate-400 rounded">
            Logearse
          </button>
          <Link href={"/register"}>
            <a className="p-2  hover:bg-slate-400 rounded text-center w-60">Ir a Registro</a>
          </Link>
        </div>
        <div>
        {isloading && <p>cargando</p>}
        </div>
        <div>
        {erro && <p>Login Error</p>}
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