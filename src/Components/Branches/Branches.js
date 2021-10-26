import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Branch from '../Branch/Branch';

const Branches = () => {
    const [branches, setBranches] = useState([])
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setBranches(data))
    }, [])
    return (
        <div>
            <h4>We have Eight Branches all of Bangladesh.We have well experienced Teachers.</h4>

            <Row xs={1} md={3} className="g-3 m-5 p-3">
                {branches.map(branch => <Branch
                    key={branch.key}
                    branch={branch}></Branch>)}
            </Row>



        </div>
    );
};

export default Branches;