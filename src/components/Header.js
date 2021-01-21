import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
        <div className='header'>
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="sm">
                <Navbar.Brand href="#home">MZ</Navbar.Brand>
                <Navbar.Text>Full-Stack Developer</Navbar.Text>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#showcase">Work</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#contact">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}


export default Header;