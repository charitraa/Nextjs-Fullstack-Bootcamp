import React from 'react'
import { notFound } from 'next/navigation';
import { Post } from '../page';
export default async function UserDetailsPage({ params }: any) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const data: Post = await res.json();

  if (params.id > 100)
    return notFound()

  return (
    <div>
      <table className='table'>
        <tr>
          <th>ID</th>
          <td>{data.id}</td>

        </tr>
        <tr>
          <th>title</th>
          <td>{data.title}</td>
        </tr>
        <tr>
          <th>Body</th>
          <td>{data.body}</td>
        </tr>
      </table>
    </div>
  )
}


