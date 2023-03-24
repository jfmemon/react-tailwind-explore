import React from 'react';
import Feature from '../Feature/Feature';
const PricingOption = ({ option }) => {
    const {features} = option; 
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <h3>
                    <span className='text-5xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-200'>/month</span>
                </h3>
                <p className='text-1xl text-yellow-300'>{option.name}</p>
            </div>
                {
                    features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                    ></Feature>) 
                }
                <button className='bg-white w-full mt-2 py-2 rounded-md font-bold'>Buy now</button>
        </div>
    );
};

export default PricingOption;