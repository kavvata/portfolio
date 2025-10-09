import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import Experience from './pages/Experience';

function App() {
  return (
    <BrowserRouter basename='/portfolio'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience/' element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
