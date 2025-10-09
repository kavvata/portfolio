import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Blog from "./pages/Blog.tsx";

function App() {
  return (
    <div className="flex min-h-dvh flex-col bg-zinc-900 font-sans text-zinc-100">
      <BrowserRouter basename="/portfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience/" element={<Experience />} />
          <Route path="/projects/" element={<Projects />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/about/" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
