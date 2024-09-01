import React, { ReactNode } from 'react'
import Link from 'next/link'

interface Props{
  children: ReactNode
}
const layout = ({children}:Props) => {
  return (
    <>
      <div className='bg-black p-10 flex gap-5'>
        <Link className='text-white' href={'/admin-panel/dashboard/'}>Dashboard Layout</Link>
        <Link className="text-white" href={'/admin-panel/dashboard/products'}>products</Link>
        <Link className='text-white' href={'/admin-panel/dashboard/users'}>users</Link>
        <Link className='text-white' href={'/admin-panel/dashboard/posts'}>posts</Link>
      </div>
      <main className='p-8'>
        {children}
      </main>
    </>
  )
}

export default layout
