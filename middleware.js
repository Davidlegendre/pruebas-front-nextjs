import { NextResponse } from "next/server";

export async function middleware(req){
    let verify = req.cookies.get('Token')

    if(!verify)
    {
        return NextResponse.redirect(new URL('/', req.url))
    }
}

export const config = {
    matcher: ['/dashboard','/dashboard/:paht*', '/post', '/post/:path*']
  }