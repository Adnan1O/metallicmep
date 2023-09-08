
import './App.css';
import Footer from './Footer/Footer';
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
    <Footer/>
    </div>
  );
}

export default App;
