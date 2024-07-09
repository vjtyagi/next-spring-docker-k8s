import { NextResponse } from "next/server";
export async function GET(req: Request) {
  console.log("CALL API_HOST:", process.env.NEXT_PUBLIC_API_HOST);
  console.log("CALL API_PORT:", process.env.NEXT_PUBLIC_API_PORT);
  return NextResponse.json(
    {
      apiHost: process.env.NEXT_PUBLIC_API_HOST,
      apiPort: process.env.NEXT_PUBLIC_API_PORT,
    },
    { status: 200 }
  );
}
