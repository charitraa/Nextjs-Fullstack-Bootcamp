import React, { ReactNode } from 'react'

interface Props{
  children: ReactNode
}
const layout = ({children}:Props) => {
  return (
    <>
      <div className='bg-black p-10'>
        <h1 className='text-white'>Dashboard Layout</h1>
      </div>
      <main>
        {children}
      </main>
    </>
  )
}

export default layout
