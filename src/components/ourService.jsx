import React from 'react';
import Lottie from 'react-lottie';
import data from '../assets/animation/Animation - 1713338270331.json';
import '../index.css';

export const OurService = () => {
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
            <div className="text-center lg:text-left hidden sm:block">
                <p className="text-xl font-bold mb-4 lg:mb-0">
                With our service, you're just one tap away from getting a ride.
                </p>
            </div>
            <div className="text-center lg:text-right">
                <Lottie options={defaultOptions} height={100} width={100} />
            </div>
            <div className="text-center lg:text-left  lg:hidden">
                <p className="text-xl font-bold mb-4 lg:mb-0">
                With our service, you're just one tap away from getting a ride.
                </p>
            </div>
        </div>
    );
};

export default OurService;
