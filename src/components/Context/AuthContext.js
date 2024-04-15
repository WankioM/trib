import React, { createContext, useContext, useState } from 'react';

// Create a context for managing user authentication state
const AuthContext = createContext();

// Create a custom hook to access the authentication context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to provide authentication context
export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({ userName: null, userEmail: null });

  const login = (userName, userEmail) => {
    setUserInfo({ userName, userEmail });
  };

  const logout = () => {
    setUserInfo({ userName: null, userEmail: null });
  };

  return (
    <AuthContext.Provider value={{ userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
