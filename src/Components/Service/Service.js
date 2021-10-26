import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import('./Service.css')

const Service = (props) => {
    const { name, img, descriptions, price, Instructor } = props.service
    return (
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
                    <Button variant='primary'>Enroll Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;