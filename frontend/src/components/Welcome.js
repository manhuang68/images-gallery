import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

function Welcome() {
  return (
    <div className="jumbotron">
      <h1>Imagine, Search, Enjoy!</h1>
      <p>This is a simple application</p>
      <p>
        <Button bsStyle="primary" target="blank">
          Learn more
        </Button>
      </p>
    </div>
  );
}
export default Welcome;
