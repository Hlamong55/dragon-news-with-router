import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className=' text-lg font-bold mt-1'>Login with</h2>
            <div className='space-y-3 mt-5'>
                <button className='btn btn-outline btn-info w-full'><FcGoogle size={25}/> Login with Google</button>
                <button className='btn btn-outline btn-primary w-full'><FaGithub size={25}/> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;