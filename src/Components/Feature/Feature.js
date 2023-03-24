import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Feature = ({feature}) => {
    return (
        <div className='flex py-2'>
            <CheckCircleIcon className="h-6 w-6 text-white-500" />
            <p className='ml-2'>{feature}</p>
        </div>
    );
};

export default Feature;