import { Course , Review } from "../interfaces";
import { baseUrl } from "../config/const";

export async function fetchCourses():Promise<Course[]>{
    const res = await fetch (`${baseUrl}/courses`);
    const courses = await res.json();
    return courses;
}

async function createCourses(newCourse: Course):Promise<Course|null>{
    const res = await fetch (`${baseUrl}/courses`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCourse),
        });
    const savedNewCourse:Course = await res.json();

    if(savedNewCourse.id !== undefined) {
        return savedNewCourse;
    }
    else{
        return null;
    }

}

export async function fetchReviews(courseID:string):Promise<Review[]>{
    const res = await fetch (`${baseUrl}/courses/${courseID}/reviews`);
    const reviews = await res.json();
    return reviews;
}

export default{
    fetchCourses,
    createCourses,
    fetchReviews,
}; 
