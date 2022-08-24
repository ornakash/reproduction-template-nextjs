import { NextRequest, NextResponse } from "next/server";

let counter = 0;
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  counter++;

  console.log("middleware #", counter);
  return response;
}

export const config = {
  matcher: ["/test-page", "/"],
};
