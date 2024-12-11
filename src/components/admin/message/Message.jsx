import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/message');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast.error('Failed to load messages. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) {
    return <div className="text-center text-xl mt-10">Loading messages...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">User Messages</h1>
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Message</th>
                <th className="py-3 px-6 text-left">numero</th>
                <th className="py-3 px-6 text-left">email</th>

              </tr>
            </thead>
            <tbody>
              {messages.length === 0 ? (
                <tr>
                  <td colSpan="2" className="text-center py-4">
                    No messages found.
                  </td>
                </tr>
              ) : (
                messages.map((message) => (
                  <tr key={message._id} className="border-t">
                    <td className="py-3 px-6">{message.name}</td>
                    <td className="py-3 px-6">{message.message}</td>
                    <td className="py-3 px-6">{message.phone}</td>
                    <td className="py-3 px-6">{message.email    }</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
