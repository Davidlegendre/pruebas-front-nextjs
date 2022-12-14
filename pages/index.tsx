import { useContext, useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from "../components/auth/AuthContext";
import { parseCookies } from "nookies";
import Link from "next/link";
import Layout from "../components/Layout";
import { useRouter } from 'next/router';

export default function SinginPage() {

  const router = useRouter()
  useEffect(()=>{
    const { Token } = parseCookies();
    if (Token !== undefined) {
      router.push("/dashboard")
    } 
  })

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
          className="bg-neutral-800 dark:fondoLogin gap-1 grid dark:text-white p-2 rounded"
          onSubmit={handleSubmit(submitForm)}
        >
          <div>
            <input
              {...register("email")}
              type={"email"}
              name="email"
              placeholder="email"
              className="p-2 w-full dark:bg-neutral-700 bg-neutral-200 rounded"
            ></input>
          </div>
          <div>
            <input
              {...register("password")}
              type={"password"}
              name="password"
              placeholder="password"
              className="p-2 w-full dark:bg-neutral-700 bg-neutral-200 rounded"
            ></input>
          </div>
          
          <div className="flex justify-between">
          <button className="p-2 w-full hover:bg-neutral-700 rounded">
            Logearse
          </button>
          <Link href={"/register"}>
            <a className="p-2  hover:bg-neutral-700 rounded text-center w-60">Ir a Registro</a>
          </Link>
        </div>
        <div>
        {isloading && <p>cargando</p>}
        {erro && <p>Login Error</p>}
        </div>
        </form>
      </div>
     </Layout>
    );
}
