import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {  Row } from 'react-bootstrap';
import Course from '../Course/Course';

const CourseDetails = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data2.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1>Our Most Popular Courses</h1>
            <Row xs={1} md={2} className="g-4 mt-5">
                {courses.map(course => <Course
                    key={courses.key}
                    course={course}></Course>)}
            </Row>
        </div>

    );
};

export default CourseDetails;