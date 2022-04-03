import React from 'react';
import {useReviews} from '../../customHooks/useReviews'
import Review from '../Review/Review';

const ReviewsPage = () => {
    const [reviews] = useReviews()
    return (
        <div className='container mt-5 text-center'>
            <div className="row my-5">
                {
                    reviews.map(review => <Review key={review.id} review={review} />)
                }
            </div>
        </div>
    );
};

export default ReviewsPage;