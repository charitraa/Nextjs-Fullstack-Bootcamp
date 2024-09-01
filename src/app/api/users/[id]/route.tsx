import { NextRequest, NextResponse } from "next/server";

interface Params{
  params: {
    id: number
  }
}
export function GET(request:NextRequest, { params: {id}}:Params) {
  
  if (id > 3) {
    return new Response('Not found', { status: 404 });
  }

  return NextResponse.json({
    'id':2,
    'name': 'charii',
    'email': 'stharabi@gmail.com'

  })

}

interface User{
  id: number,
  name: string,
  email: string
}

export async function PUT(request:NextRequest, { params: {id}}:Params) {
  
  const body:User = await request.json();

  if (id > 3) {
    return new Response('Not found', {status: 404});
  }

  return NextResponse.json({
    id: body.id,
    name: body.name,
    email: body.email

  })

}

export async function DELETE(request:NextRequest, { params: {id}}:Params) {
  
  const body:User = await request.json();

  if (id > 3) {
    return new Response('Not found', {status: 404});
  }

  return NextResponse.json({
    id: body.id,
    name: body.name,
    email: body.email

  })

}