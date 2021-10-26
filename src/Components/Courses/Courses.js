import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Courses = (props) => {
    const { name, img, descriptions, price, Instructor } = props.course;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {descriptions}
                        </Card.Text>
                        <p>Instructor {Instructor}</p>
                        <p>Course {price}</p>
                        <Button variant='primary'>Enroll Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Courses;