import React from 'react';

const Card = (props) => {
        const {name} = props;
        return (
                <div className='bg-slate-900 w-64 h-48 text-white'>
                    {name}    
                </div>
        );
};

export default Card;