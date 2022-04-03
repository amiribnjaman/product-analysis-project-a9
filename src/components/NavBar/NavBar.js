import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomActiveLink from '../CustomActiveLink/CustomActiveLink';
import './NavBar.css';


const NavBar = () => {
    return (
        <div>
            <Navbar bg="" className='shadow-sm' expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto nav">
                            <CustomActiveLink className='navlink' to='/'>HOME</CustomActiveLink>
                            <CustomActiveLink className='navlink' to='/reviews'>REVIEWS</CustomActiveLink>
                            <CustomActiveLink className='navlink' to='/dashboard'>DASHBOARD</CustomActiveLink>
                            <CustomActiveLink className='navlink' to='/blog'>BLOGS</CustomActiveLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>


    );
};

export default NavBar;