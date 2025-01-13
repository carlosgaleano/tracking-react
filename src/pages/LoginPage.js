import React, { Component } from 'react'
import backgroundImage from '../img/Gemini_Generated_Image_10gyec10gyec10gy.jpeg';

//import Button from 'react-bootstrap/Button';
import { Form, Button, Container} from 'react-bootstrap';

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
      /*const {data:{data:{attributes:dataProfile}}}=await ProfileRequest();
      console.log('data profiles',dataProfile);
      setProfile(dataProfile);*/
      navegate('/blog')
    }

    const { formState, onInputChange, onResetForm, email, password } = useForm({
       /* email: 'admin@jsonapi.com',
        password:'secret'*/

        email: 'cags20031@gmail.com',
        password:'api2024'
      
    });

 return(
<Container
  fluid
  className="bg-gray-200 min-vh-100 d-flex align-items-center justify-content-center"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.8,
  }}
>
     
     <Form className='center mt-5' >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"  name="email" value={email}  onChange={ onInputChange }   />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name='password' value={password}  onChange={ onInputChange } />
    </Form.Group>
   
    <Button variant="primary"  onClick={handleSubmit}>
      Login
    </Button>
  </Form>
     </Container>
    

 )

}

export default LoginPage