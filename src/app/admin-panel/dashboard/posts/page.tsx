import Link from 'next/link';
import React from 'react';
import { FaEye } from 'react-icons/fa';
import { console } from 'inspector';

export interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function PostPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Post[] = await res.json();

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <Link href={`/admin-panel/dashboard/posts/${post.id}`} className='btn'><FaEye/></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
