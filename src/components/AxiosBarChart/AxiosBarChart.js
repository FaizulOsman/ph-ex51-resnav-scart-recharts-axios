// import React from 'react';
import axios from 'axios';
import React, { useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const AxiosBarChart = () => {
    const [phones, setPhones] = useState([])

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesLoaded = data.data.data;
            const phoneData = phonesLoaded.map(phone => {
                const parts = phone.slug.split('-')
                const price = parseInt(parts[1])
                const singlePhone = {
                    name: phone.phone_name,
                    price: price
                }
                return singlePhone
            })
            setPhones(phoneData)
        })


    return (
        <div>
            <BarChart width={500} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default AxiosBarChart;