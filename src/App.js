import Navbar from './components/navbar/navbar'
import Dropdown from './components/dropdown/dropdown'
import Footer from './components/footer/footer'
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages'
import About from './components/pages/about'
import Menu from './components/pages/menu'
import Contact from './components/pages/contact'
import {useState} from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>

      <Footer />
    </>
  );
}

export default App;
