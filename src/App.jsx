import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="cart" element={<Cart/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
