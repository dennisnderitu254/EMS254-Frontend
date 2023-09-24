import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import ApiService from '../Utils/Headers';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await ApiService.sendUnAuthorizedRequest('login', 'POST', {
        email: email,
        password: password,
      });
      setEmail('');
      setPassword('');

      const accessToken = response.access_token;

      // Store the access token in local storage
      localStorage.setItem('access-token', accessToken);

    } catch (error) {
      console.error('Login failed: ', error.message);
    }
  };

  return (
    <Container fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
      <div className='mask gradient-custom-3'></div>
      <Card className='m-5' style={{ maxWidth: '400px' }}>
        <Card.Body className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control size="md" type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control size="md" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            </Form.Group>

            <Button className='mb-4 w-100 gradient-custom-4' size='lg' type="submit">Login</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
