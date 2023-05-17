import './Registro.css';
import Navmenu from '../menu/Navmenu';
import Footerpage from '../footer/Footerpage';
import { useState } from 'react';
import BannerHome from '../Home/Banner';

export default function Registro() {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);

    const handleInputChange =(e) => {
        const { name, value } = e.traget;

        if (name === 'nombres') {
            setNombres(value);
          } else if (name === 'apellidos') {
            setApellidos(value);
          } else if (name === 'email') {
            setEmail(value);
          } else if (name === 'fechaNacimiento') {
            setFechaNacimiento(value);
          } else if (name === 'contrasena') {
            setContrasena(value);
          }
        };

        const handleCheckboxChange = (e) => {
            setAceptaTerminos(e.target.checked);
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();

          };
    
    return (
        <>
        <div className='App'>
            <div><Navmenu /></div>
            <div className="registro">
                <h1> REGISTRARSE </h1>
                <form onSubmit={handleSubmit}>
                    <lavel htmlFor="nombres">Nombres: </lavel>
                    <input
                        type="text"
                        id="nombres"
                        value={nombres}
                        onChange={(e) => setNombres(e.traget.value)}
                        required
                    />

                    <lavel htmlFor="apellidos">Apellidos: </lavel>
                    <input
                        type="text"
                        id="apellidos"
                        value={apellidos}
                        onChange={(e) => setApellidos(e.traget.value)}
                        required
                    />

                    <lavel htmlFor="email">Email: </lavel>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.traget.value)}
                        required
                    />

                    <lavel htmlFor="fechaNacimiento">Fecha de Nacimiento: </lavel>
                    <input
                        type="date"
                        id="fechaNacimiento"
                        value={fechaNacimiento}
                        onChange={(e) => setFechaNacimiento(e.traget.value)}
                        required
                    />
                    
                    <lavel htmlFor="contrasena">Contraseña: </lavel>
                    <input
                        type="password"
                        id="contrasena"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.traget.value)}
                        required
                    />

                    <input
                        type="checkbox"
                        id="aceptaTerminos"
                        checked={aceptaTerminos}
                        onChange={(e) => setAceptaTerminos(e.traget.value)}
                        required
                    />
                    <lavel htmlFor="aceptaTerminos">
                        Acepto los terminos de uso y politica de privacidad
                    </lavel>

                    <div className="center">
                        <button type="submit">Crear</button>
                    </div>

                </form>
            </div>

                <div className='footerpage'><Footerpage /></div>
                
            </div>
        </>
    );
  }
