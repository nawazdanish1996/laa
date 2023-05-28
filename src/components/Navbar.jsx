import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import "../styles/Navbar.scss";

const NavBar = () => {

  return (
    <React.Fragment>
            <Navbar 
                // fixed="top"
                variant="light"
                bg="light"
                expand="md" 
                collapseOnSelect
            >
                <Navbar.Brand className='ms-5'>
                    <a href="/" className='text-decoration-none d-flex '>
                    {/* <img src="" alt="logo" /> */}
                        <h4>Little Angel's Academy</h4>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle className="coloring" />

                <Navbar.Collapse>
                    <Nav className='ms-auto me-5 text-center' navbarScroll>
                        <Nav.Link className="fw-bold" href="/">Home</Nav.Link>
                        <Nav.Link className="fw-bold" href="/about">About</Nav.Link>
                        <Nav.Link className="fw-bold" href="/contact">Contact</Nav.Link>
                        <Nav.Link className="fw-bold" href="/user">Students Area</Nav.Link>
                        <Nav.Link className="fw-bold" href="/admin">Admin Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    </React.Fragment>
  )
}

export default NavBar;