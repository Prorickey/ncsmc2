import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {

    if(req.nextUrl.pathname == "/schedule.html") return NextResponse.redirect(new URL("/schedule", req.url));
    if(req.nextUrl.pathname == "/registration.html") return NextResponse.redirect(new URL("/", req.url));
    
}