import React from 'react';
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";




let token=true;

export function NavBar({total}) { 
  




  return (
    <Navbar className="bg-dark text-white" >
      <Container fluid style={{paddingLeft:'0px', marginLeft:'2rem', paddingRight:'0px', marginRight:'2rem', width:'100vw'}}>
        <Navbar.Brand href="#home" className="text-white" as={Link} to="/">
         
          Pizzeria Mamma Mia!
          
        </Navbar.Brand>
        <Navbar.Toggle />
  
        <Navbar.Collapse className="">         
            <Button variant="outline-light" as={Link} to="/">
              &#x1F355;Home
            </Button>
            
        {!token ? (
          <>            
              <Button variant="outline-light" className="m-2" as={Link} to="/login">&#x1F510;Login</Button>{" "}
              <Button variant="outline-light" as={Link} to="/register">&#x1F510;Register</Button>{" "}            
          </>
        ) : (
          <>           
              <Button variant="outline-light" className="m-2" as={Link} to="/profile">&#x1F513;Profile</Button>{" "}
              <Button variant="outline-light" as={Link} to="/logout">&#x1F512;Logout</Button>{" "}
              
          </> 
          
        )}

</Navbar.Collapse> 
       
        <Navbar.Collapse className="justify-content-end" style={{  margin:'0px', padding:'none'}}>
          <Button variant="outline-info"  as={Link} to="/cart">&#x1F6D2;Total: ${total} </Button>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar