import React, { createContext, useState, useEffect, useContext } from 'react';

// Crear el contexto
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  // Estado para manejar si el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Leer el estado de autenticación desde localStorage cuando se monta el componente
  useEffect(() => {
    const token = localStorage.getItem('token'); // Intentamos obtener el token
    if (token) {
      setIsAuthenticated(true); // Si el token está presente, el usuario está autenticado
    }
  }, []);

  // Función para hacer login
  const login = (token) => {
    localStorage.setItem('token', token); // Guardamos el token en localStorage
    setIsAuthenticated(true); // Cambiamos el estado de autenticación
  };

  // Función para hacer logout
  const logout = () => {
    localStorage.removeItem('token'); // Eliminamos el token de localStorage
    setIsAuthenticated(false); // Cambiamos el estado de autenticación
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => useContext(AuthContext);
