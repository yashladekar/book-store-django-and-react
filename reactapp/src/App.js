import "./App.css";
import Header from "./components/Header";
import Home from "./modules/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product";
import Products from "./modules/Products";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
