
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ComicResults from './components/Comics/ComicResults';
import './components/Home/Home.css';
import './components/menu/Navmenu.css';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/comics" element={<ComicResults/>} />
       </Routes>
    </>
  );
}

export default App;
