import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  fetch(new URL("https://someapiurl.com").href, {
    method: "POST",
    body: JSON.stringify({
      value: request.nextUrl.pathname,
    }),
    //@ts-ignore
    headers: {
      "Content-Type": "application/json",
      // Attach headers to the request to ensure `me` is returned
      Cookie: request.headers.get("cookie"),
    },
  })
    .then((response) => {
      console.log("Event sent", response);
    })
    .catch((error) => {
      console.log("Fetching error: ", error);
    });

  return response;
}
