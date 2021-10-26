import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Courses from '../Courses/Courses'
import { Row } from 'react-bootstrap';




const CourseDetails = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./data2.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1>Our Most Popular Courses</h1>
            <Row xs={1} md={2} className="g-4">
                {
                    courses.map(course => <Courses
                        key={course.key}
                        course={course}></Courses>)
                }
            </Row>
        </div>


    );
};

export default CourseDetails;