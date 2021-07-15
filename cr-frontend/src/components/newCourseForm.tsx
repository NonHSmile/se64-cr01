import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { Course } from '../interfaces';
import CoursesService from '../services/CoursesService';
import AuthService from '../services/AuthService';


type NewCourseFormProps = {
    onNewCourseCreated?: (newCourse: Course) => void,
};

const NewCourseForm = (props: NewCourseFormProps) => {
    
    return (
        <div>
            <Formik
                initialValues={{ newCourseNumber: '' , newCourseTitle: '' }}
                validate={values => {
                    const errors:any = {};
                    
                    if(values.newCourseTitle === ''){
                        errors.newCourseTitle = 'Course title is required.'
                    }
                    if(values.newCourseNumber === ''){
                        errors.newCourseNumber = 'Course number is required.'
                    }else if(!/^[0-9]+$/.test(values.newCourseNumber)){
                        errors.newCourseNumber = 'Course number format error.'
                    }

                    return errors;
                }}
                onSubmit={(values, actions) => {
                    const newCourse = {
                        number : values.newCourseNumber,
                        title : values.newCourseTitle
                    }
            
                    CoursesService.createCourses(newCourse, AuthService.getAccessToken())
                    .then(savedNewCourse =>  {
                        if(savedNewCourse !== null) {
                            if(props.onNewCourseCreated !== undefined){
                                props.onNewCourseCreated(savedNewCourse);
                            }
                        } else{
                            alert("Save error");
                        }
                        actions.setSubmitting(false);
                    });   
                }}
            >
                {( {isSubmitting }) => (
                    <Form>
                        Number: <Field type="input" name="newCourseNumber"/>
                        <ErrorMessage name="newCourseNumber" component="div" />
                        <br />
                        Title: <Field type="input" name="newCourseTitle"/>
                        <ErrorMessage name="newCourseTitle" component="div" />
                        <br />
                        <button disabled={isSubmitting}>Save</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default NewCourseForm;