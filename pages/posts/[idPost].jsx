
import Layout from "../../components/Layout"

const PostDetailPage = ({post}) =>{
 return(
    <Layout>
        <p>{post.title}</p>
        <p>{post.body}</p>
    </Layout>
 )
}

export async function getServerSideProps(context)
{
    const {idPost} = context.query
    const data = await fetch("http://jsonplaceholder.typicode.com/posts/" + idPost)
    const post = await data.json()
    return {
        props: {
            post
        }
    }
}

export default PostDetailPage