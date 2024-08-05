import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Navbar  from './components/Navbar'
import Footer from './components/Footer'
import BeneficiaryPage from './pages/BeneficiaryPage'

 
  const App: React.FC = () => {
 

    return (
      <>
        <Router>
          <Navbar />
          <BeneficiaryPage/>
          <Footer />
        </Router>
      </>
    )
  }
  
  export default App