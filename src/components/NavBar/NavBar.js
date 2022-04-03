import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return (
        <div>
            <Navbar bg="" className='shadow-sm' expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto nav">
                            <Nav.Link ><NavLink className='navlink' to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link ><NavLink className='navlink' to="/">REVIEWS</NavLink></Nav.Link>
                            <Nav.Link ><NavLink className='navlink' to="/">DASHBOARD</NavLink></Nav.Link>
                            <Nav.Link ><NavLink className='navlink' to="/">BLOGS</NavLink></Nav.Link>
                            <Nav.Link ><NavLink className='navlink' to="/">ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

       
    );
};

export default NavBar;