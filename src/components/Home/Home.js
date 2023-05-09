import React from "react";
import './Home.css';
import BannerHome from './Banner';




const Home = () => {    

    return (
        <div className='home'>
            <div className="bannerhome"><BannerHome /></div>
            <div className="sectionone">
              <span className="titlesection">¡Conoce lo que <br/> &ensp;&emsp;tenemos para ti</span>  
            </div>
        </div>

    );
}

export default Home;