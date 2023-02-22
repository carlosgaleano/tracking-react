import React, { Component } from "react";
import { useAuthStore } from "../store/auth.ts";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const ProfilePage = () => {
  const logOut = useAuthStore((state) => state.logOut);
  const { name_:name, email, created_at } = useAuthStore.getState().profile;
  const navigate = useNavigate();
  return (
    <>
      <h1 className="d-inline">Datos del perfil</h1>
      <button
        className="d-inline btn btn-secondary right"
        onClick={() => {
          navigate("/");
          logOut();
        }}
      >
        Logout
      </button>
      <Form className="center ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} />
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="nombre" value={name}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Fecha de Creacion </Form.Label>
          <Form.Control type="text" placeholder="nombre" value={created_at}/>
        </Form.Group>
       
      </Form>

      
    </>
  );
};
