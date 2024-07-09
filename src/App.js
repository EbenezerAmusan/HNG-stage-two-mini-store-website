import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Shop from "./pages/shop/shop";
import Dress from "./pages/dress/dress";
import Bouquet from "./pages/bouquet/bouquet";
import Fan from "./pages/fan/fan";
import Shoes from "./pages/shoes/shoes";
import Headgears from "./pages/headgears/headgears";
import Footer from "./components/footer/footer";
import Cart from "./pages/cart/cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Shop />
            </>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dress" element={<Dress />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/headgears" element={<Headgears />} />
          <Route path="/bouquet" element={<Bouquet />} />
          <Route path="/fan" element={<Fan />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
