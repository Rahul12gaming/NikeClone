import './App.css'
import Navbar from './component/header/navbar';
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Login from './component/auth/login';
import Singin from './component/auth/singin';
import Footer from './component/footer/footer';
import Home from './pages/Home';
import { Product } from './pages/Product';
import { Description } from './pages/Description';
import { Cart } from './pages/cart';
import { Checkout } from './pages/Checkout';
function App() {

  return (
    <BrowserRouter>
    
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/singin" element={<Singin/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/desc" element={<Description/>}/>
        <Route path="/allproduct" element={<Product/>}/>
        <Route path="/mens" element={<Product/>}/>
        <Route path="/kids" element={<Product/>}/>
        <Route path="/women" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
