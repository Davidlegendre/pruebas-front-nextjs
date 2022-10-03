
import Link from "next/link";
import { useRouter } from "next/router";

const ActionLink = ({children, href})=>{
    const router = useRouter()
    const style = {
        color: router.asPath === href ? "#0070f3 !important" : "white"
    }

    return (
       <Link href={href}><a style={style}>{children}</a></Link>
    )
}
export default ActionLink