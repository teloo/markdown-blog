import React from 'react';
import PropTypes from 'prop-types';
import {LinkContainer} from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';

const createNewArticleButtonClassValue = isDisplayed => {
  return isDisplayed ? '' : 'd-none'
};

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
            <Button
              variant="primary"
              className={createNewArticleButtonClassValue(props.newArticleButtonDisplayed)}
            >
              <span className="fas fa-plus"/>
            </Button>
          </LinkContainer>
        </Form>
      </Navbar>
    </header>
  );
}

Header.propTypes = {
  newArticleButtonDisplayed: PropTypes.bool
};

Header.defaultProps = {
  newArticleButtonDisplayed: false
};
