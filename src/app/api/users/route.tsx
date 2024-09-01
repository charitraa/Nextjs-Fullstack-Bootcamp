import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  
  return NextResponse.json({
    'id': "1",
    'name': 'charii',
    'email': 'stharabi@gmail.com'

  })
}

export async function  POST(request: NextRequest) {
  
  const body = await request.json();
  return NextResponse.json({
    id: body.id,
    name: body.name,
    email: body.email,
    message: 'User Created Successfully'

  })
}