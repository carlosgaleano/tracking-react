import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import DataDespachos from "../DataTable3";
import Sidebar from './Sidebar';
import { FaDatabase, FaUsers, FaEnvelope, FaCheckSquare } from 'react-icons/fa';

// Componente hijo para el contenido principal
const MainContent = ({ activeMenuItem }) => {
    switch (activeMenuItem) {
        case 'Despachos':
            return <DataDespachos />;
        case 'User Profile':
            return <p>Contenido del Perfil de Usuario</p>;
        case 'Table List':
            return <p>Contenido de la Lista de Tablas</p>;
        default:
            return (
                <Row className=''>
                    <Col md={3}>
                        <Card bg="warning" text="white" className="mb-3">
                            <Card.Body>
                                <Card.Title><FaDatabase /> 49/50 GB</Card.Title>
                                <Card.Text>Used Space</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card bg="success" text="white" className="mb-3">
                            <Card.Body>
                                <Card.Title><FaUsers /> $34,245</Card.Title>
                                <Card.Text>Revenue</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card bg="danger" text="white" className="mb-3">
                            <Card.Body>
                                <Card.Title><FaEnvelope /> 75</Card.Title>
                                <Card.Text>Email Subscriptions</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card bg="info" text="white" className="mb-3">
                            <Card.Body>
                                <Card.Title><FaCheckSquare /> +245</Card.Title>
                                <Card.Text>Completed Tasks</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            );
    }
};

const Navbar2 = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [activeMenuItem, setActiveMenuItem] = useState(null);

    const handleMenuItemClick = (item) => {
        setActiveMenuItem(item);
        setShowMenu(false);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <Container fluid className="mt-4 min-vh-75 contenedor">
            <Row>
                <Col xs="auto" className="mb-3">
                    <button className="btn btn-primary" onClick={toggleMenu} aria-label={showMenu ? 'Cerrar menú' : 'Abrir menú'}>
                        {showMenu ? <FaTimes /> : <FaBars />}
                    </button>
                </Col>
                <Col md={showMenu ? 0 : 1}></Col>

                <Col xs={12} md={showMenu ? 3 : 0} className={`sidebar ${showMenu ? 'show' : 'hide'} d-md-block d-none`}>
                    <Sidebar activeMenuItem={activeMenuItem} handleMenuItemClick={handleMenuItemClick} toggleMenu={toggleMenu} setShowMenu={setShowMenu}   showMenu={showMenu}  />
                </Col>

                {/* Usamos el componente MainContent y le pasamos activeMenuItem como prop */}
                <Col xs={12} md={showMenu ? 9 : 11}>
                    <MainContent activeMenuItem={activeMenuItem} />
                </Col>
            </Row>
        </Container>
    );
};

export default Navbar2;