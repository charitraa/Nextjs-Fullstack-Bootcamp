'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const NewUser = () => {
  const router = useRouter();
  const handleclick = () => {
    setTimeout(() => { 
      router.push('/admin-panel/dashboard/users')
    },3000)
  }
  return (
    <button className='bg-blue-500 text-white rounded-lg p-5' onClick={handleclick}>New User</button>
  )
}

export default NewUser