import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchAccount, logout } from "../../store/userSlice";

export default function Profile() {
  const { user, loading } = useSelector((state) => state.auth); // Access user data and loading state from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      dispatch(fetchAccount()); // Fetch user data if not already available
    }
  }, [dispatch, user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout()); // Reset Redux state
    navigate("/login"); // Redirect to login page
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen section-bg relative">
      <div className="relative z-10 px-4 pt-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center sm:text-left md:max-w-lg lg:max-w-2xl">
          {/* Page Header */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 mb-2">
            Your Profile
          </h1>
          <p className="text-gray-600 mt-2 sm:text-lg">
            Manage your account and customize your settings.
          </p>

          {/* Profile Card */}
          <div className="card-container mt-8">
            {/* Profile Picture */}
            <div className="flex justify-center mb-4">
              <img
                className="profile-img"
                src="https://i.pravatar.cc/150?img=3"
                alt="User Avatar"
              />
            </div>
            {/* User Info */}
            <div className="text-center sm:text-left mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                {user?.name || "Name"} || {user?.userName || "Username"}
              </h2>
              <p className="text-sm text-gray-500">{user?.email || "Email"}</p>
              <p className="text-sm text-gray-500">{user?.phone || "Phone"}</p>
              <p className="text-sm text-gray-500">{user?.adresse || "Address"}</p>
            </div>

            {/* Edit & Log Out Buttons */}
            <div className="flex justify-center sm:justify-start gap-3 mt-4">
              <Link
                to="/edit-profile"
                className="button-hover px-4 py-2 rounded-md text-sm"
              >
                Edit Profile
              </Link>
              <button
                className="red-button px-4 py-2 rounded-md text-sm"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          </div>

          {/* Settings Section */}
          <div className="settings-section mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Preferences
            </h3>
            <p className="text-sm text-gray-600 leading-5">
              Update your notification preferences or connected app settings.
            </p>
            <div className="mt-4 flex justify-center sm:justify-start gap-2">
              <Link
                to="/settings"
                className="button-hover px-3 py-1 rounded-md text-sm"
              >
                Go to Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
