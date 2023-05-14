import React from "react";
import './menudropdown.css';
import novedaduno from "./novedades1.jpg";

const MenuDropDowncom = () => {    

    return (
        <div className='dropdownmenu'>           
            <p className="titulomenu">Comics</p>
            <div className="menucards">
                <div className="panelcards">
                    <div className="card cards">
                        <img src={novedaduno} alt="imagenbanner" className='imgnovedad imgizq' id="logoimperial" />
                        <span>Titulo</span>
                        <p>descripción</p>
                    </div>
                </div>
                <div className="panelcards" >
                    <div className="card cards">
                        <img src={novedaduno} alt="imagenbanner" className='imgnovedad imgcen' id="logoimperial" />
                        <span>Titulo</span>
                        <p>descripción</p>
                    </div>
                </div>
                <div className="panelcards" >
                    <div className="card cards">
                        <img src={novedaduno} alt="imagenbanner" className='imgnovedad imgcen' id="logoimperial" />
                        <span>Titulo</span>
                        <p>descripción</p>
                    </div>
                </div>
                <div className="panelcards" >
                    <div className="card cards">
                        <img src={novedaduno} alt="imagenbanner" className='imgnovedad imgcen' id="logoimperial" />
                        <span>Titulo</span>
                        <p>descripción</p>
                    </div>
                </div>
                <div className="panelcards">
                    <div className="card cards">
                        <img src={novedaduno} alt="imagenbanner" className='imgnovedad imgder' id="logoimperial" />
                        <span>Titulo</span>
                        <p>descripción</p>
                    </div>
                </div>
           </div>   
        </div>

    );
}

export default MenuDropDowncom;