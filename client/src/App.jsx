import './App.css'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import LandingPage from './page/LandingPage'
import LanguageProvider from './contexts/LanguageContext'
import NotFound from './page/notFound'

function App() {


  return (
   <Router>
    <Routes>
      <Route path='/' element={
        <LanguageProvider>
          <LandingPage/>
        </LanguageProvider>
    } />
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
  
   </Router>
  )
}

export default App
