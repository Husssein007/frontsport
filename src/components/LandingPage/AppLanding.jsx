// import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { CartProvider } from './context/CartContext'
import './LandingPage.css'// 

function AppLanding() {
  return (
    <CartProvider>  
      <Home/>
        <Footer />
 
    </CartProvider>
  )
}

export default AppLanding