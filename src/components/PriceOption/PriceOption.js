import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ pricingOptions }) => {
    const { name, price, features } = pricingOptions

    return (
        <div className='bg-indigo-300 rounded-md p-3 m-3'>
            <div className='mb-3'>
                <h3>
                    <span className='text-5xl font-bold text-white'>{price}</span>
                    <span className='text-gray-200'>/mon</span>
                </h3>
                <p className='text-3xl'>{name}</p>
            </div>
            <div className=''>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='bg-green-500 text-lg w-full rounded-md font-semibold text-white py-2 mt-4 hover:bg-green-600'>Buy Now</button>
        </div>
    );
};

export default PriceOption;