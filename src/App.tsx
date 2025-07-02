import "./App.css";
import About from "./pages/about";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Partner from "./pages/partner";
import RequestDemo from "./pages/requestDemo";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/integration" element={<Partner />} />
          <Route path="/get-started" element={<RequestDemo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
