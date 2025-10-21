import React from 'react';
import swimImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";
import bgImg from "../../assets/bg.png";


const QZone = () => {
    return (
        <div className='bg-base-200 px-5 py-3'>
            <h2 className="text-lg font-bold mb-5">Q-Zone</h2>
            <div className='space-y-3.5'>
                <img src={swimImg} alt="" className='w-full'/>
                <img src={classImg} alt="" className='w-full'/>
                <img src={playImg} alt="" className='w-full'/>
                <img src={bgImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;