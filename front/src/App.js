import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Catalogue from './pages/Catalogue';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Panier from './pages/Panier/Panier';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js'; 

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Routes>
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/catalogue' element={<Catalogue/>} />
        <Route exact path='/panier' element={<Panier/>} />
        <Route exact path='/checkout' element={<Checkout/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
