import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // For managing search input

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth); // Obtenir les données de l'utilisateur via Redux
  const token = localStorage.getItem("token"); // Vérifier la présence du token dans le stockage local
  const [searchTerm, setSearchTerm] = useState(""); // State for managing the search input
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // Effacer le token
    // dispatch(logout()); // Mettre à jour l'état Redux
  };

  // Handle search functionality (this can be adjusted based on your search logic)
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`); // Assuming you have a search page that handles this
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/home" className="flex items-center space-x-2">
            <img
              className="w-10 h-10"
              src="https://i.pinimg.com/736x/57/e7/1c/57e71c7df179214a57d3861ff89a3a37.jpg"
              alt="Logo"
            />
            <span className="font-semibold text-lg text-gray-800">MuscleNutriton</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link
            to="/home"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
          >
            HOME
          </Link>
          <Link
            to="/shop"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
          >
            SHOP
          </Link>
          <Link
            to="/categories"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
          >
            CATEGORIES
          </Link>

          {/* Logique conditionnelle pour les rôles */}
          {token && user?.role === "admin" ? (
            <>
              <Link
                to="/add-category"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
              >
                ADD CATEGORY
              </Link>
              <Link
                to="/view-messages"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
              >
                VIEW MESSAGES
              </Link>
            </>
          ) : (
            token && (
              <Link
                to="/contact"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
              >
                CONTACT
              </Link>
            )
          )}
        </nav>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyUp={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 3a8 8 0 110 16 8 8 0 010-16zm7 7l4 4"
              />
            </svg>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Afficher LogIn uniquement si l'utilisateur n'est pas authentifié */}
            {!token && (
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
                >
                  LogIn
                </Link>
                <Link
                  to="/signup"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
                >
                  SignUp
                </Link>
              </>
            )}

            {/* Afficher LogOut si l'utilisateur est authentifié */}
            {token && (
              <>
                <Link
                  to="/profile"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition cursor-pointer"
                >
                  LogOut
                </button>
              </>
            )}

            {/* Icone Panier */}
            <button className="flex items-center p-2 text-gray-600 hover:text-red-600 transition">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="ml-1 text-xs font-bold text-white bg-red-600 rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
