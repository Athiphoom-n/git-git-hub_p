import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./page/ProductDetail/ProductDetail";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </Router>
  );
}

export default App;
