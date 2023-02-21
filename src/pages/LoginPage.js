import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '../hooks/useForm';
import {LoginRequest,ProfileRequest} from '../helpers/UseAuth';
import {useAuthStore} from '../store/auth.ts'

const LoginPage= ()=>{

    const setToken=useAuthStore(state=>state.setToken)

    const handleSubmit= async()=>{
        console.log(email);
      const {data:data}= await  LoginRequest(email, password);
      console.log(data.access_token);
      setToken(data.access_token)
      const resProfile=await ProfileRequest();
      console.log(resProfile);
    }

    const { formState, onInputChange, onResetForm, email, password } = useForm({
        email: 'admin@jsonapi.com',
        password:'secret'
      
    });

 return(

    <Form>
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

 )

}

export default LoginPage