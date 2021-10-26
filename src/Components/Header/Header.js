import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className="justify-content-center g-4" bg="dark" variant="light">
            <Nav className="m-4 p-2">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/service">Services</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/branches">Branches</NavLink>
            </Nav>
        </Navbar>


    );
};

export default Header;