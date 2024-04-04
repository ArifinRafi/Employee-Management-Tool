import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

const Home = () => {
        return (
                <div className='flex'>
                        <Sidebar></Sidebar>
                        <div>
                                <Card name={'Admin'}></Card>
                        </div>
                </div>
        );
};

export default Home;