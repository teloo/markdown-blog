import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';

export default function Header(props) {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src="shoebill-illust.png" width="30" height="30" className="d-inline-block align-top" alt="shoebill"/>
          {' Markdown Blog'}
        </Navbar.Brand>
        <Form inline className="ml-auto">
          <Button variant="primary">
            <span className="fas fa-plus mr-2"/>
            New Post
          </Button>
        </Form>
      </Navbar>
    </header>
  );
}
