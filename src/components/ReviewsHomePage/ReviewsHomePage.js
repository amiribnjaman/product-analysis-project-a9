import React from 'react';
import { Link } from 'react-router-dom';
import { useReviews } from '../../customHooks/useReviews';
import Review from '../Review/Review';
import './ReviewHomePage.css';


const ReviewsHomePage = () => {

    const [reviews] = useReviews()
    let reviewsLengthSlice;
    if (reviews.length > 3) {
        reviewsLengthSlice = reviews.slice(0, 3)
    } else {
        reviewsLengthSlice = reviews
    }


    return (
        <div className='text-center review-sec'>
            <h2>Clients Reviews ({reviews.length})</h2>
            <div className="row review-card">
                {
                    reviewsLengthSlice.map(review => <Review key={review.id} review={review} />)
                }
            </div>
            <Link to='/reviews'>
                <button className='reviews-btn'>Sell All Reviews</button>
            </Link>
        </div>
    );
};

export default ReviewsHomePage;