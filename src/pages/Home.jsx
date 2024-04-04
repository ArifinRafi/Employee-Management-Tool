import React from 'react';
import Sidebar from '../components/Sidebar';

const Home = () => {
        return (
                <div className='grid grid-col-3'>
                        <div className='col-span-1/3'>
                        <Sidebar></Sidebar>
                        </div>
                        <div className='col-span-2'>
                                hello
                        </div>
                        
                </div>
        );
};

export default Home;