import './Login.css';
import Navmenu from '../menu/Navmenu';
import Footerpage from '../footer/Footerpage';

export default function Login() {
    
    return (
        <>
        <div className='App'>
            <div><Navmenu /></div>
            <div className="login">
                <h1> INICIAR SESION </h1>
            </div>
            <div className='footerpage'><Footerpage /></div>
            </div>
        </>
    )
  }