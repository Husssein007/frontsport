
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/client/home/Home";
import AuthForm from "./components/client/authForm/AuthForm";
import SignUp from "./components/client/authForm/SignUp";
import { Toaster } from "react-hot-toast";
import Contact from "./components/client/contact/Contact";
import Category from "./components/client/categories/Category";
import Footer from "./components/client/footer/Footer";
import PrivateRoute from "./components/PrivateRoute";
import AppLanding from "./components/LandingPage/AppLanding";
import Navbar from "./components/client/navbar/Navbar";
import Shop from "./components/client/shop/Shop";
import Profile from "./components/client/Profil/Profile";
import Product from "./components/client/products/Product";
import AdminMessages from "./components/admin/message/Message";
import { ProduitParCategory } from "./components/client/categories/ProduitParCategory";
import ProductDetail from "./components/client/categories/ProductDetail";
import Community from "./components/LandingPage/components/Community";

function App() {
  const location = useLocation();

  // Paths where the Navbar should not be displayed
  const noNavbarRoutes = ["/", "/login", "/signup"];

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      
      {/* Conditionally render Navbar */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<AppLanding />} />
          <Route path="/privateRoute" element={<PrivateRoute />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<Product />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/shop/:idproduit" element={<ProduitParCategory/>}/>
          <Route path="/shop" element={<Shop />} />
          <Route path="/adminMessage" element={<AdminMessages />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/community" element={<Community />} />

        </Routes>
      </main> 

      <Footer />
    </div>
  );
}

export default App;
