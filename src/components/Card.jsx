import React from 'react';

const Card = (props) => {
        const {name} = props;
        return (
                <div className='bg-slate-900 w-64 h-44 rounded-xl text-white flex flex-col items-center'>
                    <h2 className='text-2xl'>{name}</h2>    
                    <div><h1 className='text-4xl'>12</h1></div>
                </div>
        );
};

export default Card;