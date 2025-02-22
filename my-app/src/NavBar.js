//import React,{ Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";

function NavbarNumerMethod() {
  return (
    <Navbar bg="light" expand="lg">
        
      <Container>
        <Navbar.Brand>Numerical Method</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#Home">Home</Nav.Link> */}
            <Nav.Link as={Link} to="/Page/Home">Home</Nav.Link>
        
            <NavDropdown title="Root of Equation" id="nav-rootofequation ">
              {/* <NavDropdown.Item href="#Bisection">Bisection Method</NavDropdown.Item> */}
              <Nav.Link as={Link} to="/Page/Bisection"> Bisection</Nav.Link>
              
              <Nav.Link as={Link} to="/Page/FalsePosition"> False Position</Nav.Link>

              <Nav.Link as={Link} to="/Page/Onepointiteration"> Onepointiteration</Nav.Link>
             
              <Nav.Link as={Link} to="/Page/NewtonRaphson">Newton-Raphson Method</Nav.Link>
              
              <Nav.Link as={Link} to="/Page/SecantMethod">Secant Method</Nav.Link>

              {/* <NavDropdown.Item href="#action/1.5">Secant Method</NavDropdown.Item> */}

            </NavDropdown>

            <NavDropdown title="Linear Algebraic" id="nav-Linear Algebraic">
              <NavDropdown.Item href="#action/2.1">Cramer's Rule</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">Guss Elimination Method</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3">Guss-Jordan Method</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.4">Matrix Inversion Method</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.5">LU Decomposition Method</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.6">Jacobi Interation Method</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.7">Guss-Seidel Interation Method</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.8">Conjugate Gradient Method</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Interpoiation and Extrapoiation" id="nav-Interpoiation">
              <NavDropdown.Item href="#action/3.1">Newton's Divided-Differences</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lagrange Polynomials</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Spline Interpoiation</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Regression" id="nav-rootofequation ">
              
            
              <Nav.Link as={Link} to="/Page/LinearRegression"> Linear Regression</Nav.Link>

              <Nav.Link as={Link} to="/Page/PolynomialRegression"> Polynomial Regression</Nav.Link>
             
              {/* <Nav.Link as={Link} to="/Page/NewtonRaphson">Newton-Raphson Method</Nav.Link> */}
              
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNumerMethod;