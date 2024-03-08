import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Links from "./components/Links";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/links" element={<Links />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
