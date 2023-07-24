
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar'
import Subtraction from './components/pages/Subtraction'
import Addition from './components/pages/Addition'
import Division from './components/pages/Division'
import Home from './components/pages/Home'
import Multiplication from './components/pages/Multiplication'

function App() {

  return (
    <>
   
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/subtraction' element={<Subtraction />} />
        <Route path='/multiplication' element={<Multiplication />} />
        <Route path='addition/' element={<Addition />} />
        <Route path='division/' element={<Division />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
