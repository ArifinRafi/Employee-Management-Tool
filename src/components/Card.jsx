import React from 'react';

const Card = (props) => {
        const {name, quantity} = props;
        return (
                <div className='bg-gradient-to-b from-slate-900 to-black-500 w-64 h-44 rounded-md text-white flex flex-col items-center'>
                    <h2 className='text-2xl'>{name}</h2>  
                    <p>__________________________</p>  
                    <div><h1 className='text-4xl text-center mt-4'>{quantity}</h1></div>
                </div>
        );
};

export default Card;