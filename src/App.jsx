
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar'
import Subtraction from './components/Subtraction'
import Addition from './components/Addition'
import Division from './components/Division'
import Home from './components/Home'
import Multiplication from './components/Multiplication'

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
