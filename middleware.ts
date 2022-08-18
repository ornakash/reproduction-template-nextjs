import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  fetch(new URL("http://api.tvmaze.com/search/shows?q=postman").href, {
    method: "GET",
    //@ts-ignore
    headers: {
      "Content-Type": "application/json",
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
