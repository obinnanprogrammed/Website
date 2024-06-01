import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Links from "./components/Links";

const theme = createTheme({
  typography: {
    fontFamily: "Maven Pro"
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/links" element={<Links />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
