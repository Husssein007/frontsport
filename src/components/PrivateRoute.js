// import React, { useEffect, useState } from 'react';
// // API fetch user
// import { fetchaccount } from '../api/authApi';
// import { useNavigate } from 'react-router-dom';

// import AdminDashboard from './admin/AdminDashboard';
// import Home from './client/home/Home';

// const PrivateRoute = () => {
//   const navigate = useNavigate();
//   const [userAcount, setUserAcount] = useState(); // Initialize as null

//   const getAcount = async () => {
//     try {
//       const data = await fetchaccount();
//       console.log('Fetched user data:', data);
//       setUserAcount(data);
//     } catch (error) {
//       console.error('Error fetching account:', error);
//       navigate('/login'); // Redirect to login if fetch fails
//     }
//   };

//   useEffect(() => {
//     getAcount();
//   }, []);

//   const logout = () => {
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   // Ensure loading state is handled
//   if (!userAcount) {
//     return <div>Loading...</div>; // Or a loader/spinner component
//   }

//   return (
//     <div>
//       {userAcount.role === 'user' ? (
//         <Home user={userAcount} logout={logout} />
//       ) : (
//         <AdminDashboard user={userAcount} logout={logout} />
//       )}
//     </div>
//   );
// };

// export default PrivateRoute;


import React, { useEffect, useState } from 'react';
import { fetchaccount } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

import AdminDashboard from './admin/AdminDashboard';
import Home from './client/home/Home';

const PrivateRoute = () => {
  const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '400px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  },
};
  const navigate = useNavigate();
  const [userAcount, setUserAcount] = useState(null); // Initialize as null
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  const getAcount = async () => {
    try {
      const data = await fetchaccount();
      console.log('Fetched user data:', data);
      setUserAcount(data);
      setShowWelcomeModal(true); // Show welcome modal after fetching user
    } catch (error) {
      console.error('Error fetching account:', error);
      navigate('/login'); // Redirect to login if fetch fails
    }
  };

  useEffect(() => {
    getAcount();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const closeWelcomeModal = () => {
    setShowWelcomeModal(false);
  };

  // Ensure loading state is handled
  if (!userAcount) {
    return <div>Loading...</div>; // Or a loader/spinner component
  }

  return (
    <div>
      {showWelcomeModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Bienvenue, {userAcount.name}!</h2>
            <p>Nous sommes ravis de vous voir ici 🎉</p>
            <button style={styles.closeButton} onClick={closeWelcomeModal}>
              ✖
            </button>
          </div>
        </div>
      )}
      {!showWelcomeModal && (
        <>
          {userAcount.role === 'user' ? (
            <Home user={userAcount} logout={logout} />
          ) : (
            <AdminDashboard user={userAcount} logout={logout} />
          )}
        </>
      )}
    </div>
  );
};

// CSS styles in JS for the modal


export default PrivateRoute;
