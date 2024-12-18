import axios from 'axios';
import { Lock, Mail, Eye, EyeOff, UserPlus } from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear errors on change
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!userData.name.trim()) newErrors.name = 'Full Name is required';
    if (!userData.email.trim()) newErrors.email = 'Email is required';
    if (!userData.password.trim()) newErrors.password = 'Password is required';
    if (userData.password !== userData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async () => {
    if (!validateInputs()) return;

    try {
      const res = await axios.post('http://localhost:4000/auth/register', userData);
      toast.success('Register successfully, Welcome!');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-black to-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0">
        <img
          src="https://i.pinimg.com/736x/71/db/ca/71dbca59fc462a71f893a125bd59a9e0.jpg"
          alt="Background"
          className="w-full h-full object-cover blur-sm opacity-40"
        />
      </div>

      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md bg-white rounded-lg shadow-xl p-8 space-y-6">
        <div className="flex justify-center">
          <UserPlus className="h-12 w-12 text-gray-800" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-gray-800 hover:text-gray-600 transition-all"
          >
            Sign in
          </Link>
        </p>

        <form>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-800">Full Name</label>
            <input
              name="name"
              type="text"
              value={userData.name}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-black focus:border-black focus:outline-none`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-800">Email Address</label>
            <input
              name="email"
              type="email"
              value={userData.email}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-black focus:border-black focus:outline-none`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mt-4 relative">
            <label className="block text-sm font-medium text-gray-800">Password</label>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={userData.password}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-black focus:border-black focus:outline-none`}
              placeholder="Enter your password"
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye className="h-5 w-5 text-gray-400" /> : <EyeOff className="h-5 w-5 text-gray-400" />}
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-800">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              value={userData.confirmPassword}
              onChange={handleChange}
              className={`mt-1 block w-full px-4 py-3 border ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              } rounded-md shadow-sm focus:ring-black focus:border-black focus:outline-none`}
              placeholder="Re-enter your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="button"
            onClick={submit}
            className="mt-6 w-full flex justify-center py-3 px-4 bg-black text-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
