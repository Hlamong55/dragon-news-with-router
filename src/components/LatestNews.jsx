import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-white bg-secondary px-4 py-2'>Latest</p>
            <Marquee className='flex gap-7' pauseOnClick={true} speed={70}>
                <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, tempore?</p>
                <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, tempore?</p>
                <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, tempore?</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;