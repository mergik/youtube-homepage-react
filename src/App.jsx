import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navigation/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Videobody } from './components/Videobody/Videobody';
import SearchResults from './pages/SearchResults/SearchResults';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Contact } from './pages/ContactUs/Contact';



function App() {
 
  return (
    <Router>
      <div className='font-roboto'>
        <Navbar />

        <div className='flex min-h-screen'>
          <Sidebar />
          
          <Routes>
            <Route path="/" element={<Videobody />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
