import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false); // Pour gérer l'état de chargement

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields!');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:4000/api/message', formData);

      if (response.status === 201) {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Full-Screen Blurred Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/e9/13/53/e913531d92bcdacff4789cea3f5f1950.jpg"
          alt="Background"
          className="w-full h-full object-cover filter blur-sm"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 min-h-screen bg-white bg-opacity-90 py-12 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full sm:max-w-md bg-white shadow-md rounded-lg py-8 px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
            <p className="text-sm text-gray-600 mt-2">
              We'd love to hear from you! Send us your query using the form below.
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <div className="mt-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your full name"
              />
            </div>

            <div className="mt-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mt-3">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number (Optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your phone number"
              />
            </div>

            <div className="mt-3">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message here..."
              />
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full py-2 px-4 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
