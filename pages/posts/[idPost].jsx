import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import LoadingAnimated from "../../components/loadingAnimated";

const PostDetailPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [post, setPost] = useState(null)

  useEffect(()=>{
    const call = async() =>{
        setIsLoading(true)
        const { idPost } = router.query;

        const data = await fetch(
          "http://jsonplaceholder.typicode.com/posts/" + idPost
        );
        const p = await data.json();
        setIsLoading(false)
        setPost(p)
    }
    call()
  }, [])

  if (isLoading) {
    return <LoadingAnimated></LoadingAnimated>
  } 
  if(post === null && !isLoading)
  {
    return  <p>No hay Posts</p>
  }

    if(post !== null)
    {
        return (
            <Layout>
              {!post ? (
                <p>espere</p>
              ) : (
                <div>
                  <p>{post.title}</p>
                  <p>{post.body}</p>
                </div>
              )}
            </Layout>
          );
    }
};


export default PostDetailPage;
