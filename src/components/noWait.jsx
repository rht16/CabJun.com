import React from 'react';
import Lottie from 'react-lottie';
import data from '../assets/animation/Animation - 1713343689145.json';
import '../index.css';

export const NoWait = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between">
             <div className=" text-center lg:text-right">
                <Lottie options={defaultOptions} height={100} width={100} />
            </div>
            <div className="lg:w-[80%]  text-center lg:text-left">
                <p className="text-xl font-bold mb-4 lg:mb-0">
                No more waiting 
                in line for a cab—just book your ride with us and we'll be there in a minute.
                </p>
            </div>
           
        </div>
    );
};

export default NoWait;
