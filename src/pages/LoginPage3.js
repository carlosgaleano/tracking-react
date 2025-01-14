import React, { Component } from 'react'
import backgroundImage from '../img/Gemini_Generated_Image_10gyec10gyec10gy.jpeg';
import backgroundImage2 from '../img/fondo_2.jpeg';

//import Button from 'react-bootstrap/Button';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

import { useForm } from '../hooks/useForm';
import { useNavigate } from "react-router-dom";
import {LoginRequest,ProfileRequest} from '../helpers/UseAuth';
import {useAuthStore} from '../store/auth.ts'

const LoginPage= ()=>{

    const setToken=useAuthStore(state=>state.setToken);
    const setProfile=useAuthStore(state=>state.setProfile);
     const navegate=useNavigate();
    const handleSubmit= async()=>{
        console.log(email);
      const {data:{access_token}}= await  LoginRequest(email, password);
      console.log(access_token);
      setToken(access_token)
     /* const {data:{data:{attributes:dataProfile}}}=await ProfileRequest();
      console.log('data profiles',dataProfile);
      setProfile(dataProfile);*/
      navegate('/blog')
    }

    const { formState, onInputChange, onResetForm, email, password } = useForm({
     email: 'cags20031@gmail.com',
        password:'api2024'
      
    });

 return(
  <>
   
<Container
  fluid
  className="bg-gray-200 min-vh-75 d-flex align-items-center justify-content-center "
  style={{
    backgroundImage: `url(${backgroundImage2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.8,
  }}
>

  <Row className="w-100">
    <Col xs={12} md={8} lg={4} className="mx-auto transparent-card-body ">
      <Card className="z-index-0 fadeIn3 fadeInBottom transparent-card-body cardAcceso border-white-shadow"  > 
        <Card.Header className="p-0 position-relative bg-gradient-dark border-radius-lg">
          <div className="py-3 text-center">
            <h4 className="text-white font-weight-bolder color-white ">Acceso al Sistema</h4>
            <div className="d-flex justify-content-center mt-3">
              <Button variant="link" className="text-white me-2"><i className="fa fa-facebook text-lg"></i></Button>
              <Button variant="link" className="text-white me-2"><i className="fa fa-github text-lg"></i></Button>
              <Button variant="link" className="text-white"><i className="fa fa-google text-lg"></i></Button>
            </div>
          </div>
        </Card.Header>
        <Card.Body
          className="transparent-card-body"
          
        >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 color-white" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                className='inputColor'
                value={email}
                onChange={onInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 color-white" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                 className='inputColor'
                value={password}
                onChange={onInputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 text-white">
              <Form.Check
                type="checkbox"
                label="Remember me"
                defaultChecked
              />
            </Form.Group>
            <Button  variant="dark" className="w-100 color-white" onClick={handleSubmit}>Ingresar</Button>
            <p className="mt-3 text-center">
              Don't have an account? <a href="/signup" className="text-primary">Sign Up</a>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>
</>
    

 )

}

export default LoginPage