import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import LoadingAnimated from "../../components/LoadingAnimated";

const DocsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    const call = async () => {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const d = await res.json();
      setIsLoading(false);
      setData(d);
    };
    call();
  }, []);

  if (isLoading) {
    return <LoadingAnimated></LoadingAnimated>;
  }
  if (data === null && !isLoading) {
    return <p>No hay Posts</p>;
  }

  if (data !== null) {
    return (
      <Layout title={"Docs"}>
        <ul>
          {data.map((e) => {
            return (
              <li key={e.id}>
                <p>{e.title}</p>
                <Link href={`/posts/${encodeURIComponent(e.id)}`}>
                  <a className="text-indigo-700">Post</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Layout>
    );
  }
};
export default DocsPage;
