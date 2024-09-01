import Link from 'next/link';
import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function UserPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: User[] = await res.json();


  return (
    <div>
      <Link href='/admin-panel/dashboard/users/new' className='underline'>New User</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
