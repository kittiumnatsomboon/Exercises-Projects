import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { ThemeProvider } from "./components/darkmode/Themecontext.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';
import Login from './Pages/Login';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
              <Route index element={<Homepage/>}/>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
