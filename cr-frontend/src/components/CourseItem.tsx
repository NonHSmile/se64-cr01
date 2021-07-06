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

    const [newReviewComments , setNewReviewComments] = useState<string>('');
    const [newReviewScore, setNewReviewScore] = useState<number>(1);

    const fetchReviews = () => {
        if(course.id){
            CoursesService.fetchReviews(course.id)
            .then(reviews => {
                setReviews(reviews);
            });
        }
    }

    const clearNewReviewForm = () => {
        setNewReviewComments('');
        setNewReviewScore(1);
    }

    const handleReviewsVisibleToggle = () => {
        if(!reviewsVisible){
            fetchReviews();
            setReviewsVisible(true);
        }else {
            setReviewsVisible(false);
        }
    }

    const handleNewReviewSave = () => {
        const newReview: Review = {
            comment: newReviewComments,
            score: newReviewScore,
        };
        if(course.id){
            CoursesService.createReview(newReview,course.id)
            .then(savedNewReview => {
                if(savedNewReview){
                    fetchReviews();
                    clearNewReviewForm();
                }
            })
        }
    }

    const newReviewScoreOptions = [1,2,3,4,5];

    return (
        <li className="CourseItem">
            {course.number} - {course.title}
            &nbsp;&nbsp;
            <button onClick={handleReviewsVisibleToggle}>
                {reviewsVisible ? 'hide reviews' : 'toggle'}
            </button>
            {reviewsVisible && 
                (
                    <div>
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
                        <b>New review</b><br/>
                        Coment: &nbsp;
                        <input 
                            onChange={(e) => {setNewReviewComments(e.target.value); }}
                            value={newReviewComments}/> 
                        &nbsp; Score: &nbsp;
                        <select 
                             onChange={(e) => {setNewReviewScore(parseInt(e.target.value, 10)); }}
                            value={newReviewScore}>
                            {newReviewScoreOptions.map(item => (
                                <option value={item}>{item}</option>
                            ))}
                        </select>
                        &nbsp;
                        <button onClick={handleNewReviewSave}>Save</button>
                    </div>
                )
            }
        </li>
    );
};

export default CourseItem;