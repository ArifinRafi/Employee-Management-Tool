import React from 'react';
import Sidebar from '../components/Sidebar';

const Employee = () => {
        return (
                <div className='flex'>
      <Sidebar />
      <div className='flex flex-col items-center   ml-0 mt-8 gap-12'>
        <div className='flex flex-col items-center ml-36 justify-center'>
          <h1 className='text-4xl text-white mb-12'>List of Employees</h1>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Image</th>
        <th>Email</th>
        <th>Address</th>
        <th>Salary</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>Arifin Rafi</td>
        <td>image</td>
        <td>ahmedrafi364@gmail.com</td>
        <td>Bashundhara R/A</td>
        <td>30000</td>
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

export default Employee;