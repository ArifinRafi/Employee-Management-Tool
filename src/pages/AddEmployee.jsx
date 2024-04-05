import React from 'react';
import Sidebar from '../components/Sidebar';

const AddEmployee = () => {
        return (
                <div className='grid grid-cols-8'>
                     <Sidebar></Sidebar> 
                <div className='col-span-6 flex mt-12 justify-center'>
                        <form className='flex flex-col bg-gradient-to-b from-slate-900 to-black-600 p-8 rounded-xl gap-8' action="">
                                <input className='rounded-sm w-80 h-8 border-xl' type="text" name="" placeholder='Employee Name' id="" />
                                <input className='rounded-sm w-80 h-8 border-xl' type="text" name="" placeholder='Employee ID' id="" />
                                <input type="file" name="" placeholder='Employee Image' id="" />
                                <input className='rounded-sm w-80 h-8 border-xl' type="email" name="" placeholder='Email' id="" />
                                <input className='rounded-sm w-80 h-8 border-xl' type="text" name="" placeholder='Address' id="" />
                                <input type="range" name="fg" id="" />
                                <input className='rounded-sm w-80 h-8 border-xl' type="text" name="" placeholder='Salary' id="" />
                                <button className='btn btn-primary bg-gradient-to-r from-green-900 to-green-600'>Add Employee</button>
                        </form>
                </div> 
                </div>
        );
};

export default AddEmployee;