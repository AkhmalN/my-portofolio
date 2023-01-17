import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './layouts/navbar';
import About from './pages/AboutMe/about';
import Profile from './pages/home/profile';
import Contact from './pages/ContactMe/contact';
import Resume from './pages/resume/resume';
import { AnimatePresence } from 'framer-motion';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
