import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-zinc-900 font-sans text-zinc-100">
      <BrowserRouter basename="/portfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience/" element={<Experience />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
