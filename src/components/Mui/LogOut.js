import React, { useEffect, useState, useRef } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthStore } from "../../store/auth.ts";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Tooltip from "react-bootstrap/Popover";

export const LogOut2 = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const logOut = useAuthStore((store) => store.logOut);
  const navigate = useNavigate();
  const test=()=>{
    console.log('test');  
  }
  const close = () => {
    navigate("/");
    logOut();
  };

  return (
    <>
    
     
        <OverlayTrigger
          offset={[108, 15]}
          className="bg-dark text-white w-25"
          overlay={<Tooltip  className="bg-dark text-white mb-2" id="tooltip-disabled">Boton de Salida!</Tooltip>}
        >
          <span className="d-inline-block ">
            <Button
              
              className="d-inline-block bg-white text-black botton-exit"
              
              onClick={close}
            >
              Salir{" "}
              <AiOutlineLogout
                className="d-inline-block text-red exit"
                color="warning"
                sx={{ fontSize: 80 }}
               
              />
            </Button>
          </span>
        </OverlayTrigger>

    </>
  );
};
