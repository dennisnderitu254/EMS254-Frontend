import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

function Login() {
  return (
    <Container fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
      <div className='mask gradient-custom-3'></div>
      <Card className='m-5' style={{ maxWidth: '400px' }}>
        <Card.Body className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Login</h2>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label>Username</Form.Label>
              <Form.Control size="md" type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control size="md" type="password" placeholder="Password" />
            </Form.Group>

            <Button className='mb-4 w-100 gradient-custom-4' size='lg' type="submit">Login</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
