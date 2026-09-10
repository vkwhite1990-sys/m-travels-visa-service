import axios, { AxiosInstance, AxiosError } from 'axios';
import { ApiResponse } from '@/types';

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string = process.env.NEXT_PUBLIC_API_URL) {
    this.client = axios.create({
      baseURL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response.data,
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('authToken');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config?: any): Promise<T> {
    return this.client.get<T>(url, config);
  }

  async post<T>(url: string, data?: any, config?: any): Promise<T> {
    return this.client.post<T>(url, data, config);
  }

  async put<T>(url: string, data?: any, config?: any): Promise<T> {
    return this.client.put<T>(url, data, config);
  }

  async patch<T>(url: string, data?: any, config?: any): Promise<T> {
    return this.client.patch<T>(url, data, config);
  }

  async delete<T>(url: string, config?: any): Promise<T> {
    return this.client.delete<T>(url, config);
  }
}

export const apiClient = new ApiClient();
