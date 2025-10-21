import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3.5'>
            <img className='w-[450px]' src={logo} alt="" />
            <p className='text-[18px] text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-[18px] text-accent font-semibold'>
                {format(new Date(), "EEEE , MMMM dd , yyyy")}
            </p>
        </div>
    );
};

export default Header;