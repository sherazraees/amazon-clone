import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Checkout" element={<Checkout />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
