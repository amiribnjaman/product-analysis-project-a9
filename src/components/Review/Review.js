import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css';

const Review = (props) => {
    const { name, review, image, rating } = props.review;
    return (
        <div className="col-md-4">
            <Card body className='card shadow-sm' style={{ minHeight: '245px' }}>
                <div className="img-box">
                    <img src={image} alt="" />
                </div>
                <h6 className='mt2'>Ratings: <span style={{ color: '#F6BE00;' }}>{rating}</span></h6>
                <h5>&#8220;{name}&#8220;</h5>
                <p>{review}</p>
            </Card>
        </div>
    );
};

export default Review;