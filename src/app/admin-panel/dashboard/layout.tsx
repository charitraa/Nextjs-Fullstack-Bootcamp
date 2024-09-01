import React, { ReactNode } from 'react'

interface Props{
  children: ReactNode
}
const layout = ({children}:Props) => {
  return (
    <>
      <div className='bg-black p-10 flex gap-5'>
        <h1 className='text-white'>Dashboard Layout</h1>
        <a className="text-white"href="/admin-panel/dashboard/products">products</a>
        <a className='text-white' href="/admin-panel/dashboard/users">users</a>
      </div>
      <main>
        {children}
      </main>
    </>
  )
}

export default layout
