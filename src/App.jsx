import { Routes, Route } from 'react-router-dom'
import './App.css'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Footer from './Components/Footer'
import { Pnf } from './Pages/Pnf'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
