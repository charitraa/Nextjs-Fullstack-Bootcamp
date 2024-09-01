import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  
  return NextResponse.json({
    message: "Hello from the serverless function!",
    name: 'charii',
    'email': 'stharabi@gmail.com'

  })
}