import React from 'react';
import Lottie from 'react-lottie';
import data from '../assets/animation/Animation - 1713338270331.json';
import '../index.css';

export const NoRide = () => {
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
                    The future of transportation is here, and it's on your phone.
                </p>
            </div>
            <div className="text-center lg:text-right">
                <Lottie options={defaultOptions} height={100} width={100} />
            </div>
            <div className="text-center lg:text-left  lg:hidden">
                <p className="text-xl font-bold mb-4 lg:mb-0">
                    The future of transportation is here, and it's on your phone.
                </p>
            </div>
        </div>
    );
};

export default NoRide;
