
import './App.css';
import { Home } from './pages/Home';
import "./css/all.min.css"

import "./css/slicknav.min.css";
import { Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Footer from './Components/Footer';
import BlogDetails from './pages/BlogDetails';
// import ScrollToTop from './Components/ScrollToTop';
function App() {
  return (
    <div className="App">
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
