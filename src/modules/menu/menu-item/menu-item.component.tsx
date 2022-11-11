import React from 'react';

const MenuItem = () => {
    return (
        <div className='w-96 shadow-xl rounded-2xl'>
            <div className='relative mb-8'>
                <img src="/assets/pizza/manhattan.jpeg" alt="pizza" className='w-full h-[15rem] object-cover object-center rounded-t-2xl'/>
                <span className='absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]'>555g</span>
            </div>
        </div>
    );
};

export default MenuItem;
