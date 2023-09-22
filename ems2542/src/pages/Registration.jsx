import React from 'react';
import { Container, Card, Form, Button, Col } from 'react-bootstrap';

function Registration() {
  return (
    <Container fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
      <div className='mask gradient-custom-3'></div>
      <Card className='m-5' style={{ maxWidth: '600px' }}>
        <Card.Body className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label>Your Name</Form.Label>
              <Form.Control size="md" type="text" placeholder="Your Name" required />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Your Email</Form.Label>
              <Form.Control size="md" type="email" placeholder="Your Email" required/>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control size="md" type="tel" placeholder="Phone number" required/>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control size="md" type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Repeat your password</Form.Label>
              <Form.Control size="md" type="password" placeholder="Repeat Password" required/>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Check type="checkbox" id="flexCheckDefault" label="I agree all statements in Terms of service" required />
            </Form.Group>

            <Button className='mb-4 w-100 gradient-custom-4' size='lg' type="submit">Register</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Registration;
