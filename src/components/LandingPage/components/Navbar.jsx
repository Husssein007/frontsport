import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { cartItems } = useCart()

  return (
    <header>
      <nav>
        <Link to="/" className="logo">Muscle-Nutrition</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="cart-icon">
          <FaShoppingCart />
          <span id="cart-count">{cartItems.length}</span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar