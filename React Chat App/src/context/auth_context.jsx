import { createContext, useState, useContext, useEffect } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase"
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

  const value = {
    currentUser,
    setCurrentUser,
    googleLogin
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    })

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
