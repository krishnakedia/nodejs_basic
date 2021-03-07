import React, { useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Navbar,Nav, Button,Form, FormControl} from 'react-bootstrap'

import About from './About';
import Users from './Users';
import CreateUser from './CreateUser';
import Contact from './Contact';
import Home from './Home';
// import { Form } from 'react-bootstrap';
import './App.css';

function App() {
  // const [name,setName]=useState("krishna")
  return (
    <div className="App">
      <Router>

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/Home">Home Pages
</Nav.Link>
            <Nav.Link href="/about">About
</Nav.Link>
            <Nav.Link href="/createUser"> Create User
</Nav.Link>
<Nav.Link href="/Users">Users</Nav.Link>
<Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
          <Route path="/createUser">
            <CreateUser />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>

        {/* <About company={name} /> props is a global variable
        <button onClick={()=>setName("IcoreGeneration")}>Update Props</button>
        <Contact company={name} />
        <Users />
        <CreateUser /> */}
      </Router>
    </div>
  );
}

export default App;
