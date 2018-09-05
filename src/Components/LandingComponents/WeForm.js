import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class WeForm extends Component {
  render() {
    return (
      <div className="container-fluid">
            <Form className="form--style">
            <FormGroup className="form--group">
              <FormGroup>
                <Input type="email" className="form-control input--login-style" id="email" placeholder="Email" name="email"/>
              </FormGroup>
              <FormGroup>
                <Input type="password" className="form-control input--login-style" id="pwd" placeholder="Contraseña" name="pswd"/>
              </FormGroup>
              </FormGroup>
              <Button  type="submit" className="btn btn--login">Submit</Button>
            </Form>
      </div>
    );
  }
}

export default WeForm;