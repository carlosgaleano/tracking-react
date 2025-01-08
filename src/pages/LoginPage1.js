import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useForm } from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { LoginRequest, ProfileRequest } from '../helpers/UseAuth';
import { useAuthStore } from '../store/auth';

const LoginPage = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  });

  const { email, password } = formValues;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data: { access_token } } = await LoginRequest(email, password);
      setToken(access_token);

      const { data: { data: { attributes: dataProfile } } } = await ProfileRequest();
      setProfile(dataProfile);

      console.log('Profile loaded:', dataProfile);
      navigate('/dashboard'); // Redirigir al dashboard o página deseada
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Container fluid className="bg-gray-200 min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497294815431-9365093b7331?auto=format&fit=crop&w=1950&q=80')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Row className="w-100">
        <Col xs={12} md={8} lg={4} className="mx-auto">
          <Card className="z-index-0 fadeIn3 fadeInBottom">
            <Card.Header className="p-0 position-relative bg-gradient-dark border-radius-lg">
              <div className="py-3 text-center">
                <h4 className="text-white font-weight-bolder">Sign In</h4>
                <div className="d-flex justify-content-center mt-3">
                  <Button variant="link" className="text-white me-2"><i className="fa fa-facebook text-lg"></i></Button>
                  <Button variant="link" className="text-white me-2"><i className="fa fa-github text-lg"></i></Button>
                  <Button variant="link" className="text-white"><i className="fa fa-google text-lg"></i></Button>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    defaultChecked
                  />
                </Form.Group>
                <Button type="submit" variant="dark" className="w-100">Sign In</Button>
                <p className="mt-3 text-center">
                  Don't have an account? <a href="/signup" className="text-primary">Sign Up</a>
                </p>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
