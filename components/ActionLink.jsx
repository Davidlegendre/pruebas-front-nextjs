
import Link from "next/link";
import { useRouter } from "next/router";

const ActionLink = ({children, href})=>{
    const router = useRouter()
    return (
       <Link href={href}><a className={router.asPath === href ? "text-cyan-600": "dark:dark light"}>{children}</a></Link>
    )
}
export default ActionLink