import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="me-auto">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/service">Services</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/branches">Branches</NavLink>
            </Nav>

        </Navbar>


    );
};

export default Header;