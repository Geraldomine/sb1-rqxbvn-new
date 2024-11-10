import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { login as apiLogin, signup as apiSignup, logout as apiLogout } from '../api/auth';
import type { LoginCredentials, SignUpCredentials } from '../api/auth';

interface AuthUser {
  sub: string; // JWT subject (user ID)
  email: string;
  exp: number; // Expiration timestamp
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: AuthUser | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (credentials: SignUpCredentials) => Promise<void>;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode<AuthUser>(token);
        // Check if token is expired
        if (decoded.exp * 1000 > Date.now()) {
          setUser(decoded);
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('token');
        }
      } catch (err) {
        localStorage.removeItem('token');
      }
    }
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      setError(null);
      const response = await apiLogin(credentials);
      const token = response.token;
      
      if (token) {
        localStorage.setItem('token', token);
        const decoded = jwtDecode<AuthUser>(token);
        setUser(decoded);
        setIsAuthenticated(true);
        navigate('/');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred during login');
      throw err;
    }
  };

  const signup = async (credentials: SignUpCredentials) => {
    try {
      setError(null);
      await apiSignup(credentials);
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred during registration');
      throw err;
    }
  };

  const logout = () => {
    apiLogout();
    setIsAuthenticated(false);
    setUser(null);
    navigate('/login');
  };

  const value = {
    isAuthenticated,
    user,
    login,
    signup,
    logout,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};