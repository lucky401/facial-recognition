import { useState, createContext, useEffect } from 'react';

import axios from '../../utils/axios';

import {
  loginRequest,
  registerRequest,
  logoutRequest,
} from './authentication.service';

import { profileRequest } from '../profile/profile.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData && Object.keys(userData).length > 0) {
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', user);
    }
  }, [user]);

  const onLogin = async (email, password) => {
    setError(null);
    setIsLoading(true);
    try {
      const {
        data: { accessToken },
      } = await loginRequest(email, password);
      localStorage.setItem('token', accessToken);
      axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
      const {
        data: {
          data: { user },
        },
      } = await profileRequest();
      setUser(user);
    } catch (e) {
      if (e.response && e.response.data) setError(e.response.data.message);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  const onRegister = async (name, email, password) => {
    setError(null);
    setIsLoading(true);
    try {
      await registerRequest(name, email, password);
    } catch (e) {
      if (e.response && e.response.data) setError(e.response.data.message);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  const onLogout = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await logoutRequest();
    } catch (e) {
      if (e.response && e.response.data) setError(e.response.data.message);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
