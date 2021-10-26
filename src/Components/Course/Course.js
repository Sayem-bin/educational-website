import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const { img, name, descriptions, price, Instructor } = props.course
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
                        <p>Course Fee {price}Tk</p>
                        <p>Instructor {Instructor}</p>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;