// import React, { Component } from 'react';import logo from './logo.svg';
// import './App.css';
// import { Container, Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (

//     <div className="App">

//       <Navbar bg="light" expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">About</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <h1>Fionnie Pollack</h1>
//       </header>
//     </div>
//   );
// }

// export default App;

import 'bootstrap/dist/css/bootstrap.min.css';


// import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar></NavigationBar>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        {/* <Route exact path="/contact" component={Contact}></Route> */}
      </Router>
    </div>
  );
}

export default App;
