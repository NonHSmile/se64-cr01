import React, { useState } from 'react';
import { Course,Review } from '../interfaces';

import CoursesService from '../services/CoursesService'

type CourseItemProps = {
    course: Course,
};

const CourseItem = (props: CourseItemProps) => {
    const course: Course = props.course;

    const [reviewsVisible,setReviewsVisible] = useState<boolean>(false);
    const [reviews,setReviews]  = useState<Review[]>([]);
    const handleReviewsVisibleToggle = () => {
        if(!reviewsVisible){
            if(course.id){
                CoursesService.fetchReviews(course.id)
                    .then(reviews => {
                        setReviews(reviews);
                        console.log(reviews);
                        setReviewsVisible(true);
                    });
            }else{
                setReviewsVisible(true);
            }
        }else {
            setReviewsVisible(false);
        }
    }

    return (
        <li className="CourseItem">
            {course.number} - {course.title}
            &nbsp;&nbsp;
            <button onClick={handleReviewsVisibleToggle}>
                {reviewsVisible ? 'hide reviews' : 'toggle'}
            </button>
            {reviewsVisible && 
                (
                    <ul>
                        {reviews.map(review => (
                            <li>{review.comment} ({review.score})</li>
                        ))}
                        {reviews.length === 0 &&
                            (
                                <li>No reviews</li>
                            )
                        }
                    </ul>
                )
            }
        </li>
    );
};

export default CourseItem;