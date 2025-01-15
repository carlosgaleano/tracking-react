// Sidebar.js
import React from 'react';
import { Card, ListGroup,Div, Row } from 'react-bootstrap';
import { SlArrowLeftCircle } from "react-icons/sl";
import { RiPictureInPictureExitLine } from "react-icons/ri";
import { LogOut2 } from '../Mui/LogOut';
import { ClassNames } from '@emotion/react';


const Sidebar = ({ activeMenuItem, handleMenuItemClick,toggleMenu,setShowMenu, showMenu }) => {
    
    
    
    return (
        <Card>
            <Card.Body>
                <Card.Title className='color-white'>Menu     <RiPictureInPictureExitLine className='desplazar' onClick={toggleMenu} aria-label={showMenu ? 'Cerrar menú' : 'Abrir menú'}   /></Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item className='menuItem'
                        active={activeMenuItem === 'Despachos'}
                        onClick={() => handleMenuItemClick('Despachos')}
                        action
                    >
                        Despachos
                    </ListGroup.Item>
                    
                    <LogOut2/>
                    {/* ... otros items del menu */}
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default Sidebar;