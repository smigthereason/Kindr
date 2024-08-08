import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import BeneficiaryPage from './pages/BeneficiaryPage'

 
  const App: React.FC = () => {
 

    return (
      <>
        <Router>
          
          <BeneficiaryPage/>
         
        </Router>
      </>
    )
  }
  
  export default App