
import './App.css';
import Home from './Home/Home';
import Info from './Navbar/Info';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="info">
      <Info/>
      </div>
    <Navbar/>
    <Home/>
    </div>
  );
}

export default App;
