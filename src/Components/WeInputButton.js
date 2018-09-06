import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';

class WeInputButton extends Component {
  render() {
    return (
      <Form className='Input__form'>
        <Input
          type="text"
          className="form-control Input__text"
          id="message"
          placeholder="Type message"
          name="message" />
        <Button
          type="submit"
          className="btn Input__btn" >
          <p>Send</p>
        </Button>
      </Form>
    );
  }
}

export default WeInputButton;