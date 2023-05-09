import React from "react";
import './Navmenu.css';
import logoimperial from './logo-imperial.png';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Navmenu = () => {    

    return (
        <div className='menus'>
            <div className='logo'>
            <img src={logoimperial} alt="logoimperial" className='logoimperial' id="logoimperial" />
            </div>
            <div className='menubars'>
                <div className='menutop'>
                    <nav className="navigatortop">
                        <ul>
                            <li>Ayuda</li>
                            <li>Contacto</li>
                            <li>Registrarse</li>                            
                        </ul>
                    </nav>
                </div>
                <div className='menubottom'>                    
                    <nav className="navigatorbottom">
                        <div>
                            <ul>
                                <li>Novedades</li>
                                <li>Comics</li>
                                <li>Catálogo</li>
                                <li className="itemmarvel">Marvel</li>
                                <li>Figuras de acción</li>
                            </ul>
                        </div>
                        <div className="iconosnav">
                            <ul>
                                <li>
                                    <div className='search'>   
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                     </div>
                                </li>                                
                                <li><FontAwesomeIcon icon={faUser} /></li>     
                                <li><FontAwesomeIcon icon={faCartShopping} /></li>                       
                            </ul>
                        </div>
                        
                    </nav>
                </div>
            </div>
            
        </div>

    );
}

export default Navmenu;