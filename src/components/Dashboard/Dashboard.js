import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='container mt-5 mb-5'>
            <div className='w-75 mx-auto'>
                <LineChart width={750} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="revenue" stroke="#F95E4F" />
                </LineChart>
            </div>
            <div className='mt-5 w-75 mx-auto'>
                <BarChart width={750} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="sell" fill="#82ca9d" />
                    <Bar dataKey="revenue" fill="#F95E4F" />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;