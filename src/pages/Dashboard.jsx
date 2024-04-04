import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col  ml-48 mt-8 gap-12'>
        <div className='flex justify-center gap-12'>
          <Card name={'Admin'} quantity={'1'} />
          <Card name={'Total Employee'} quantity={'12'} />
          <Card name={'Total Salary'} quantity={'100000'} />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-4xl text-white'>List of Admins</h1>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>ahmedrafi364@gmail.com</td>
        <td><button className='btn btn-primary bg-gradient-to-r from-slate-900 to-black-500'>Edit</button></td>
        <td><button className='btn btn-primary bg-gradient-to-r from-red-900 to-red-500 hover:bg-black'>Delete</button></td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
