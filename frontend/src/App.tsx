import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import  Navbar  from './components/Navbar'
// import Footer from './components/Footer'
// import  About  from './pages/About'
// import  Contact  from './pages/Contact'
// import  LandingPage  from './pages/LandingPage'
import Login from './pages/Login'
// import { Home } from '@mui/icons-material'




const App: React.FC = () => {
 

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path='/' element={<LandingPage />} /> */}
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/contact' element={<Contact />} /> */}
          <Route path='/' element={<Login />} />
        
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App