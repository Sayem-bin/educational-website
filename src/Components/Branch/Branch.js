import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Branch = (props) => {
    const { branches, Instructor } = props.branch;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <h2> {branches} Branch</h2>
                        <p>Instructor {Instructor}</p>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Branch;