import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function NavBar() {
  return (
    <nav>
      <ul className='navbar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/subtraction'>Subtraction</Link></li>
        <li><Link to='/multiplication'>Multiplication</Link></li>
        <li><Link to='/addition'>Addition</Link></li>
        <li><Link to='/division'>Division</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar