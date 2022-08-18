import React from "react"; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navigation(){
  
    return( 
        <Navbar bg="dark" expand="lg">
        
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <Nav.Link  className="d-inline p-2 bg-dark text-white" href="/">List </Nav.Link>
              <Nav.Link  className="d-inline p-2 bg-dark text-white" href="/add" >Add</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>

        </Navbar>
    )
  }


export default Navigation  ;