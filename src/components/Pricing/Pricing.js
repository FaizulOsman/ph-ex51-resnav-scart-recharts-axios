import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
                'No need Feature',
                'Outside Feature'
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99, features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
                'No need Feature',
                'Outside Feature'
            ]
        },
        {
            id: 3, name: 'Primium', price: 19.99, features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
                'No need Feature',
                'Outside Feature'
            ]
        }
    ]


    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    pricingOptions.map(option => <PriceOption key={option.id} pricingOptions={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;