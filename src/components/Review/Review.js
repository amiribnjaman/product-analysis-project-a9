import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css';

const Review = (props) => {
    const { name, review, image, rating } = props.review
    console.log(name);
    return (
        <div className="col-md-4">
            <Card body className='card shadow-sm' style={{minHeight: '245px'}}> 
                <img src={image} alt="" />
                <h6 className='mt2'>Ratings: {rating}</h6>
                <h5>&#8220;{name}&#8220;</h5>
                <p>{review}</p>
            </Card>
        </div>
    );
};

export default Review;