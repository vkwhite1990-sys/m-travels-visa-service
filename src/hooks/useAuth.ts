'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/types';
import { apiClient } from '@/utils/api';

interface UseAuthReturn {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
}

export const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          const response = await apiClient.get<{ user: User }>('/api/auth/me');
          setUser(response.user);
        }
      } catch (error) {
        localStorage.removeItem('authToken');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await apiClient.post<{ token: string; user: User }>(
        '/api/auth/login',
        { email, password }
      );
      localStorage.setItem('authToken', response.token);
      setUser(response.user);
      router.push('/dashboard');
    } catch (error) {
      throw error;
    }
  }, [router]);

  const logout = useCallback(async () => {
    try {
      await apiClient.post('/api/auth/logout');
      localStorage.removeItem('authToken');
      setUser(null);
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, [router]);

  const register = useCallback(async (name: string, email: string, password: string) => {
    try {
      const response = await apiClient.post<{ token: string; user: User }>(
        '/api/auth/register',
        { name, email, password }
      );
      localStorage.setItem('authToken', response.token);
      setUser(response.user);
      router.push('/dashboard');
    } catch (error) {
      throw error;
    }
  }, [router]);

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    register,
  };
};
