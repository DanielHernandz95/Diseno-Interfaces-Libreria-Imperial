import './Registro.css';
import Navmenu from '../menu/Navmenu';
import Footerpage from '../footer/Footerpage';

export default function Registro() {
    
    return (
        <>
        <div className='App'>
            <div><Navmenu /></div>
            <div className="registro">
                <h1> REGISTRO </h1>
            </div>
            <div className='footerpage'><Footerpage /></div>
            </div>
        </>
    )
  }