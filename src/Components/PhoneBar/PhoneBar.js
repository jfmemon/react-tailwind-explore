import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const PhoneBar = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            // console.log(data.data.data);
            const loadedData = data.data.data;
            // console.log(loadedData);
            const phoneData = loadedData.map(phone=> {
                const splitSlug= phone.slug.split('-');
                const price = parseInt(splitSlug[1]);
                const singlePhone = {
                    name: phone.phone_name,
                    price: price
                }
                return singlePhone
            })
            setPhones(phoneData);
        })
    },[])
    return (
        <div>
            <BarChart
          width={800}
          height={300}
          data={phones}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="name" fill="#8884d8" background={{ fill: '#eee' }} />
          <Bar dataKey="price" fill="#82ca9d" />
        </BarChart>
        </div>
    );
};

export default PhoneBar;