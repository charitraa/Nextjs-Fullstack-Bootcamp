import { NextRequest, NextResponse } from "next/server";
import { UserSchema } from "./UserSchema";
import { error } from "console";
export function GET(request: NextRequest) {
  
  return NextResponse.json({
    'id': "1",
    'name': 'charii',
    'email': 'stharabi@gmail.com'

  })
}

export async function  POST(request: NextRequest) {
  
  const body = await request.json();
  const validation = UserSchema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json({
      error: validation.error.errors
    }, {
      status:400
    })
  }


  return NextResponse.json({
    id: body.id,
    name: body.name,
    email: body.email,
    message: 'User Created Successfully'

  })
}