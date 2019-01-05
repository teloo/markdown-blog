import React from 'react';
import PropTypes from 'prop-types';
import {LinkContainer} from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';

export default function Header(props) {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src="/shoebill-illust.png" width="30" height="30" className="d-inline-block align-top" alt="shoebill"/>
            {' Markdown Blog'}
          </Navbar.Brand>
        </LinkContainer>
        <Form inline className="ml-auto">
          <LinkContainer to="/articles/new">
            <Button variant="primary" disabled={props.postButtonDisabled}>
              <span className="fas fa-plus mr-2"/>
              New Post
            </Button>
          </LinkContainer>
        </Form>
      </Navbar>
    </header>
  );
}

Header.propTypes = {
  postButtonDisabled: PropTypes.bool
};
