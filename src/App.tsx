import "./App.css";
import About from "./pages/about";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RequestDemo from "./pages/requestDemo";
import Partner from "./pages/partner";
import Partner2 from "./pages/partner2";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/partner2" element={<Partner2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
