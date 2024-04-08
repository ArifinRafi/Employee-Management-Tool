import React from 'react';

const PrimaryButton = (props) => {
        const {title} = props;
        return (
                <div>
                  <button className='btn btn-primary bg-gradient-to-r text-white w-full from-slate-900 to-slate-500 rounded-md'>{title}</button>      
                </div>
        );
};

export default PrimaryButton;