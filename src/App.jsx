import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SchoolProvider } from './context/SchoolContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Admission from './pages/Admission';
import Academics from './pages/Academics';
import Faculty from './pages/Faculty';
import Facilities from './pages/Facilities';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <SchoolProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </SchoolProvider>
    </ThemeProvider>
  );
}

export default App;