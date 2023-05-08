
import './App.css';
import Navmenu from './components/menu/Navmenu';
import Footerpage from './components/footer/Footerpage';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <div><Navmenu /></div>
      <div><Home /></div>
      <div className='footerpage'><Footerpage /></div>
    </div>
  );
}

export default App;
