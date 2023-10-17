import { Link } from "react-router-dom"
import './style.css'
import { useContext } from "react"
import { CartContext } from "../Context";
const Header = () => {
  const [cart] = useContext(CartContext);
  return (
    <div>
      <span className="header">Reaact Context API</span>
      <ul className="nav">
        <li>
          <Link to='/'>Home Page</Link>
        </li>
        <li>
          <Link to='/cart'>Cart Page({cart.length})</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header