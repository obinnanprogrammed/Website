import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Highlights from "./components/Highlights";

function App() {
  return (
    <HashRouter basename="/Website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="highlights" element={<Highlights />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
