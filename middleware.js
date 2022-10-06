import { NextResponse } from "next/server";

export async function middleware(req){
    let verify = req.cookies.get('Token')
    if(verify === undefined)
    {
        return NextResponse.redirect(new URL('/', req.url))
    }
}

export const config = {
    matcher: ['/dashboard','/dashboard/:paht*', '/posts', '/posts/:path*']
  }