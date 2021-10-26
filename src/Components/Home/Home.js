
import React from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';
import img from '../../img/photo.jpg';
import { Col } from 'react-bootstrap';
import('./Home.css')

const Home = () => {
    return (
        <div >
            <div className='d-flex justify-content-center mb-5'>
                <Col xs={6} md={7} lg={5}>
                    <h1 className='mt-5'>Welcome To CodeEdu</h1> <br />
                    <h3> Learn Tech Skills.<span>Build a career you love.</span></h3>
                    <p>Immersive Web Development, UX/UI Design, Data Analytics, and Cybersecurity, Youtube Marketing, Graphics Designing, SEO courses.Formats tailored to your needs: remote or on campus, full-time or part-time.we are have more experienced teacher and you can grain your desired skill easily.</p>
                </Col>

                <Col xs={6} md={5} lg={7}>
                    <img src={img} alt="" />
                </Col>

            </div>

            <div>
                <CourseDetails></CourseDetails>
            </div>

        </div >

    );
};

export default Home;