import { NextResponse } from "next/server";

export async function middleware(req){
    let verify = req.cookies.get('Token')
    let host = req.nextUrl.origin
    let url = req.nextUrl.pathname

    if(!verify && url.includes('/dashboard'))
    {
        return NextResponse.redirect(host + '/')
    }

    if(!verify && url.includes('/posts'))
    {
        return NextResponse.redirect(host + '/')
    }
}