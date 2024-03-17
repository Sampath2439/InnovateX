import React, { useCallback, useRef } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Webcam from "react-webcam";

function App() {
  const webcamRef = useRef(null);

  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
    },
    [webcamRef]
  );
  return (
    <Router>
      <div className="App">
        <Navbar className="navbar-custom" expand="lg">
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="nav-link-custom" href="/home">Home</Nav.Link>
              <Nav.Link className="nav-link-custom" href="/contact">Contact</Nav.Link>
              <Nav.Link className="nav-link-custom" href="/qa">Q&A</Nav.Link>
              <Nav.Link className="nav-link-custom" href="/team">Team</Nav.Link>
              <Button className="button-custom" onClick={() => window.location.href='https://github.com/join'}>Check Out On Github</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/team" element={<Team />} />
          </Routes>
        
      </div>
      
      
      
      
     
    </Router>
  );
}

// Add your component definitions here
const Home = () => <div>Home</div>;
const Contact = () => <div>Contact</div>;
const QA = () => <div>Q&A</div>;
const Team = () => <div>Team</div>;

export default App;