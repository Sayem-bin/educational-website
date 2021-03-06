import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import('./Services.css')

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-5 mb-4">
            <h2>We Offer Below Course</h2>
            <Row xs={1} md={3} className="g-3">
                {services.map(service => <Service
                    key={service.key}
                    service={service}>
                </Service>)}
            </Row>

        </div>
    );
};

export default Services;