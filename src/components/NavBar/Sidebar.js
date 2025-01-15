// Sidebar.js
import React from "react";
import {
  Card,
  ListGroup,
  Div,
  Row,
  OverlayTrigger,
  Tooltip,
  Button,
} from "react-bootstrap";
import { SlArrowLeftCircle } from "react-icons/sl";
import { RiPictureInPictureExitLine } from "react-icons/ri";
import { LogOut2 } from "../Mui/LogOut";
import { ClassNames } from "@emotion/react";

const Sidebar = ({
  activeMenuItem,
  handleMenuItemClick,
  toggleMenu,
  setShowMenu,
  showMenu,
  tooltipText,
}) => {
  const renderTooltip = (props) => (
    <Tooltip id="menu-tooltip" {...props}>
      {tooltipText}
    </Tooltip>
  );

  return (
    <Card className="d-flex flex-column h-100 ">
      <Card.Body  className="d-flex flex-column ">  
        <Card.Title className=" color-white">
          Menu
          <OverlayTrigger
            placement="left"
            overlay={renderTooltip}
            offset={[10, -180]}
          >
            <Button
              variant="link"
              style={{
                padding: 0,
                border: "none",
                cursor: "pointer",
                margin: 0,
              }}
              onClick={toggleMenu}
            >
              <RiPictureInPictureExitLine className="desplazar" />
            </Button>
          </OverlayTrigger>
        </Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item
            className="menuItem"
            active={activeMenuItem === "Despachos"}
            onClick={() => handleMenuItemClick("Despachos")}
            action
          >
            Despachos
          </ListGroup.Item>

          <ListGroup.Item
            className="menuItem"
            active={activeMenuItem === "Despachos"}
            onClick={() => handleMenuItemClick("Despachos")}
            action
          >
            Despachos
          </ListGroup.Item>
          
          {/* ... otros items del menu */}
        </ListGroup>
      </Card.Body>
      <div className="mt-auto"> {/* Contenedor para el botón de cerrar sesión */}
          <OverlayTrigger
            placement="left"
            overlay={(props) => renderTooltip("Cerrar sistema", props)}
            offset={[10, 0]} // Ajusta el offset si es necesario
          >
           <Button
              variant="link"
              style={{
                padding: 0,
                border: "none",
                cursor: "pointer",
                margin: 0,
              }}
              onClick={toggleMenu}
            >
              <LogOut2 />
            </Button>
          </OverlayTrigger>
        </div>
    </Card>
  );
};

export default Sidebar;
