import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const options = [
        {
            id: 1, name: 'Free', price: 9.99, features: [
                'Awesome feature',
                'Good feature',
                'Bad feature',
                'Best feature',
                'Active feature',
                'Inactive feature'
            ]
        },
        {
            id: 2, name: 'Medium', price: 99.99, features: [
                'Awesome feature',
                'Good feature',
                'Bad feature',
                'Best feature',
                'Active feature',
                'Inactive feature'
            ]
        },
        {
            id: 3, name: 'Premium', price: 9999.99, features: [
                'Awesome feature',
                'Good feature',
                'Bad feature',
                'Best feature',
                'Active feature',
                'Inactive feature'
            ]
        }
    ]
    return (
        <div>
            <h1 className='text-5xl font-bold bg-indigo-300 text-white p-10'>Best Deal Of Town</h1>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    options.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;