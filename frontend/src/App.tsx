import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Beneficiaries from './pages/Beneficiaries';
import Donations from './pages/Donations';
import Settings from './pages/Settings';
import StoryMngt from './pages/StoryMngt';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Donation from './pages/Donation';
import Footer from './components/Footer';
import Auth from './components/Auth';

function App() {

  return (
    <Router>
      
      <Header />
      <body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/storymngt" element={<StoryMngt />} />
          <Route path="/about" element={<About />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </body>
      <Footer />
  </Router>
  )
}

export default App
