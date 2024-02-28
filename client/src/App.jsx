import './App.css'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import LandingPage from './page/LandingPage'
import LanguageProvider from './contexts/LanguageContext'

function App() {


  return (
   <Router>
    <Routes>
      <Route path='/' element={
        <LanguageProvider>
          <LandingPage/>
        </LanguageProvider>
    } />
    </Routes>
  
   </Router>
  )
}

export default App
