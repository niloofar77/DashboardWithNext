
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes: string[] = ["/dashboard"];
const publicRoutes: string[] = [
  "/login",
  "/signUp",
  ""
 
];

export default async function middleware(req: NextRequest): Promise<NextResponse> {
    const path: string = req.nextUrl.pathname;
    
    const isProtectedRoute: boolean = protectedRoutes.includes(path);
    const isPublicRoute: boolean = publicRoutes.includes(path);

    const token = (await cookies()).get("AUTH_USER_TOKEN");

    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    if (isPublicRoute && token && !req.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
