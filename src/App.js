
import './App.css';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Info from './Navbar/Info';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Info/>
    <Navbar/>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
