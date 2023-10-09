import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [generatedId, setGeneratedId] = useState(null);
    const [profileId, setProfileId] = useState(null);
  
    const login = (id) => {
      setProfileId(id);
    };
  
    const setGeneratedIdValue = (id) => {
      setGeneratedId(id);
    };
  
    const logout = () => {
      setGeneratedId(null);
      setProfileId(null);
    };
  
    return (
      <AuthContext.Provider value={{ generatedId, profileId, login, logout, setGeneratedId: setGeneratedIdValue }}>
        {children}
      </AuthContext.Provider>
    );
  };

export const useAuth = () => {
  return useContext(AuthContext);
};
