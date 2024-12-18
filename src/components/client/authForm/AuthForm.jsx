import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Mail, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function SignIn() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!state.email || !state.password) {
      toast.error('Please fill in both fields.');
      return;
    }

    if (!emailRegex.test(state.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post('http://localhost:4000/auth/login', state);
      const { token } = res.data;

      // Save the token to local storage
      localStorage.setItem('token', token);

      toast.success('Login successful! Welcome back!');
      navigate('/privateRoute');
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Login failed. Please check your credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-800 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0">
        <img
          src="https://i.pinimg.com/736x/71/db/ca/71dbca59fc462a71f893a125bd59a9e0.jpg"
          alt="Background"
          className="w-full h-full object-cover blur-sm opacity-40"
        />
      </div>

      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md bg-white rounded-lg shadow-xl p-8 space-y-6">
        <div className="flex justify-center">
          <LogIn className="h-12 w-12 text-black" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="font-medium text-black hover:text-gray-800 transition-all"
          >
            Sign up
          </Link>
        </p>

        <form>
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
              Email Address
            </label>
            <div className="mt-1 relative">
              <input
                name="email"
                type="email"
                value={state.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-black focus:border-black"
                placeholder="Enter your email"
                aria-label="Email"
              />
              <Mail className="h-5 w-5 text-gray-400 absolute right-3 top-2.5" />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-800">
              Password
            </label>
            <div className="mt-1 relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={state.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-black focus:border-black"
                placeholder="Enter your password"
                aria-label="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <Eye className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={submit}
            className="mt-6 w-full flex justify-center py-3 px-4 bg-black text-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
