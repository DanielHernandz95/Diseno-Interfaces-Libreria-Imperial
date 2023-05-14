import React from "react";
import './menudropdown.css';
import novedaduno from "./novedades1.jpg";

const MenuDropDownnov = () => {    

    return (
        <div className='dropdownmenu'>
            <p>LO ULTIMO EN LIBRERIA IMPERIAL</p>
            <div className="menucards">
                <div>
                    <div className="card cards"><img src={novedaduno} alt="imagenbanner" className='imgnovedad imgizq' id="logoimperial" /></div>
                </div>
                <div >
                    <div className="card cards"><img src={novedaduno} alt="logoimperial" className='imgnovedad imgcen' id="logoimperial" /></div>
                </div>
                <div >
                    <div className="card cards"><img src={novedaduno} alt="logoimperial" className='imgnovedad imgder' id="logoimperial" /></div>
                </div>
           </div>            
        </div>

    );
}

export default MenuDropDownnov;