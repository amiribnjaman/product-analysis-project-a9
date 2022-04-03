import React from 'react';
import watch1 from '../../assets/img/watch1.jpg';
import ReviewsHomePage from '../ReviewsHomePage/ReviewsHomePage';
import './Home.css';

const Home = () => {
    return (
        <div className='container my-5'>
            <div className='row d-flex align-items-center'>
                <div className='col-md-6 banner'>
                    <h1>WANNA Hand Watch</h1>
                    <h2>Your satisfaction is Our Goal.</h2>
                    <p>We are internet based an e-commerce business company. Our main product is hand watch. Last 5 years we services with 100% clients satisfaction. We pioritised our clients satisfaction, its our main objective.</p>
                    <button className='explore-btn'>Explore More</button>
                </div>
                <div className='col-md-6 ps-5'>
                    <img src={watch1} alt="" />
                </div>
            </div>
            <ReviewsHomePage />
        </div>
    );
};

export default Home;