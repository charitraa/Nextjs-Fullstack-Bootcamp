import React from 'react'
import User from '../Userinterface';
import { notFound } from 'next/navigation';

export default async function UserDetailsPage({params}:any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const data: User = await res.json();

  if (params.id > 10)
    return notFound()
  
  return (
    <div>
      <table className='table'>
        <tr>
          <th>ID</th>
          <td>{data.id}</td>,p
          
        </tr>
        <tr>
          <th>Name</th>
          <td>{ data.name}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{ data.email}</td>
        </tr>
      </table>
    </div>
  )
}


