import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

const Home = () => {
        return (
                <div className='flex'>
                        <Sidebar></Sidebar>
                        <div className='flex justify-center ml-48 mt-8 gap-12'>
                                <Card name={'Admin'}></Card>
                                <Card name={'Total Emplpoyee'}></Card>
                                <Card name={'Total Salary'}></Card>
                                
                        </div>
                </div>
        );
};

export default Home;