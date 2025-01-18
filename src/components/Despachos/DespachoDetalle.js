import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useEffectGetDespachoDetalle } from '../../hooks/useFetchDespachoDetalle';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

const DespachosDetalle = (props) => {
  const [page, setpage] = useState(1);
  const [pending, setpending] = useState(true);
  const [despachoid, setDespachoID] = useState(null); 
  useEffect(() => {
    setDespachoID(props.row?.Despacho_ID); // Actualizar Despacho_ID cuando props.row cambie
}, [props.row]); // Dependencia crucial: props.row
console.log("Despacho_ID", despachoid);
const { data: data } = useEffectGetDespachoDetalle(page, setpending, despachoid);




  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tracking de la guia {props.row?.sap_id +"-" +props.row?.Despacho_ID}   
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              .col-xs-12 .col-md-8
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={4}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}   

export default DespachosDetalle;