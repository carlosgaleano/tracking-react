import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imglog from '../../img/logo_logytech2.png';


function NavbarLogin() {

    const trackOrder = () => {
        // Agrega la lógica que deseas ejecutar al hacer clic en "Tracking de Ordenes de Entrega"
        console.log("Tracking Order clicked");
        // Puedes redirigir a otra página o mostrar un modal, etc.
    };

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark h-50 nav2">
            {/* Brand */}
            <>
                <img 
                    src={imglog} 
                    alt="logo" 
                    style={{ width: '100px', height: '50px', backgroundColor: 'white' }} 
                    onClick={() => menu(1)} // Agrega la lógica para la función 'menu'
                />
            </>

            {/* Links */}
            <p className="navbar-nav center1 text-white ml-5">
              
                        Tracking de Ordenes de Entrega
                    
              
                
            </p>
        </nav>
    );
}

export default NavbarLogin;
