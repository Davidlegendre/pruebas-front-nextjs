import Link from "next/link"
import Layout from "../../components/Layout"

const DocsPage = ({data}) =>{
    return (
        <Layout title={"Docs"}>
           <ul>
           { data !== undefined ?
                data.map((e)=>{
                    return <li key={e.id}>
                        <p>{e.title}</p>
                        <Link href={`/posts/${encodeURIComponent(e.id)}`}>post</Link>
                    </li>
                })
                : <p>NO hay post</p>
            }
           </ul>
        </Layout>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }

export default DocsPage