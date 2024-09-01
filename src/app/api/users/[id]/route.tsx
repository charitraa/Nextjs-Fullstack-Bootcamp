import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/Prisma";
import { UserSchema } from "../UserSchema";

interface Params{
  params: {
    id: string
  }
}
interface User{
  name: string,
  email: string,
}
export async function GET(request:NextRequest, { params: {id}}:Params) {
  
  const user = await prisma.user.findUnique({
    where: { id :parseInt(id)}
  });

  if (!user) {
    return new Response('Not found', {status: 404});
  }

  return NextResponse.json(user)

}

export async function PUT(request:NextRequest, { params: {id}}:Params) {
  const body: User = await request.json();
  const validation = UserSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json({ errors: validation.error.errors });
  }
  const user = await prisma.user.findUnique({
    where: { id :parseInt(id)}
  });

  if (!user) {
    return new Response('user Not found', {status: 404});
  }
    const isExist = await prisma.user.findUnique({
    where: {
      email: body.email
    }
  })

  if (isExist) {
    return NextResponse.json({
      error: 'Email already exists'
    }, {
      status: 400
    })
  }


  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      name: body.name,
      email: body.email,
    }
  })


  return NextResponse.json(updatedUser)

}

export async function DELETE(request:NextRequest, { params: {id}}:Params) {
  
  const body:User = await request.json();

  const user = await prisma.user.findUnique({
    where: { id :parseInt(id)}
  });

  if (!user) {
    return new Response('user Not found', {status: 404});
  }
  const deletedUser = await prisma.user.delete({
    where: { id: parseInt(id) }
  })

  return NextResponse.json({
    'message': 'user deleted successfully'
  })

}