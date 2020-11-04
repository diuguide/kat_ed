import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Landing() {
  
  return (
    <Container>
      <Row>
        <Col className="col col-md-4 mx-auto mt-4">Please login by entering your email address and your password</Col>
      </Row>
      <Row >
        <Col>
          <Row>
            <Col className="col col-md-6 col-lg-4 border login bg-light mx-auto mt-4">
              <Form>
                <Form.Group>
                  <Form.Label
                  htmlFor="inputEmail" className="sr-only"
                  >Email address</Form.Label>
                  <Form.Control 
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  name="username"
                  placeholder="Email address"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label
                  htmlFor="inputEmail" className="sr-only"
                  >Password</Form.Label>
                  <Form.Control 
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                   />
                </Form.Group>
                <Button className="btn btn-lg btn-primary btn-block" type="submit">
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default Landing;