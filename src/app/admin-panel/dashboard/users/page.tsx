import Link from 'next/link';
import React from 'react';
import { FaEye } from 'react-icons/fa';
import User from './Userinterface';

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
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link href={`/admin-panel/dashboard/users/${user.id}`} className='btn'><FaEye/></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
