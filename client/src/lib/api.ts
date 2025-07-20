// This file contains API service methods for communication with the backend
// In production, this will use https://incubate-backend.tech-iitb.org/api
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://incubate-backend.tech-iitb.org/api';

// Helper function to get auth headers
const getAuthHeaders = (): Record<string, string> => {
  const token = localStorage.getItem('authToken');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

// Helper function for authenticated requests
const authenticatedFetch = async (url: string, options: RequestInit = {}) => {
  const authHeaders = getAuthHeaders();
  
  const config: RequestInit = {
    ...options,
    headers: {
      ...authHeaders,
      ...options.headers,
    },
    credentials: 'include',
  };

  return fetch(url, config);
};

export const authService = {
  async login(email: string, password: string) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });

    const data = await response.json();
    
    if (response.ok) {
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      return data;
    } else {
      throw new Error(data.error || 'Login failed');
    }
  },

  async register(userData: {
    email: string;
    password: string;
    fullName: string;
    phone: string;
    college: string;
  }) {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      credentials: 'include',
    });

    const data = await response.json();
    
    if (response.ok) {
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      return data;
    } else {
      throw new Error(data.error || 'Registration failed');
    }
  },

  async requestRegistration(userData: {
    email: string;
    password: string;
    fullName: string;
    phone: string;
    college: string;
  }) {
    const response = await fetch(`${API_BASE_URL}/auth/register/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      credentials: 'include',
    });

    const data = await response.json();
    
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.error || 'Registration request failed');
    }
  },

  async completeRegistration(email: string) {
    const response = await fetch(`${API_BASE_URL}/auth/register/complete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
      credentials: 'include',
    });

    const data = await response.json();
    
    if (response.ok) {
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      return data;
    } else {
      throw new Error(data.error || 'Registration completion failed');
    }
  },

  async verifyOTP(email: string, otp: string) {
    // This now handles client-side verification
    const { verifyOTPLocally } = await import('../utils/emailService');
    
    const isValid = verifyOTPLocally(email, otp);
    if (!isValid) {
      throw new Error('Invalid or expired verification code');
    }

    // Complete registration on backend
    return this.completeRegistration(email);
  },

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },

  isAuthenticated() {
    return !!localStorage.getItem('authToken');
  },

  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  getToken() {
    return localStorage.getItem('authToken');
  }
};

export const registrationService = {
  async createTeam(teamData: {
    teamName: string;
    themeId: number;
    college: string;
    members: Array<{ email: string; name: string; }>;
  }) {
    const token = authService.getToken();
    const response = await fetch(`${API_BASE_URL}/registration/team`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(teamData),
    });

    const data = await response.json();
    return { data, ok: response.ok };
  },

  async getMyTeam() {
    const token = authService.getToken();
    const response = await fetch(`${API_BASE_URL}/registration/my-team`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return { data, ok: response.ok };
  }
};

export const submissionService = {
  async submitPhase1(formData: FormData) {
    const token = authService.getToken();
    const response = await fetch(`${API_BASE_URL}/submission/phase1`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
      credentials: 'include',
    });

    const data = await response.json();
    return { data, ok: response.ok };
  },

  async getMySubmissions() {
    const token = authService.getToken();
    const response = await fetch(`${API_BASE_URL}/submission/my-submissions`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
    });

    const data = await response.json();
    return { data, ok: response.ok };
  },

  async submitPhase1Proposal(formData: FormData) {
    try {
      console.log('Submitting to:', `${API_BASE_URL}/submission/phase1`);
      
      // Get the authentication token
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('Authentication required. Please log in first.');
      }

      const headers: Record<string, string> = {
        'Authorization': `Bearer ${token}`,
      };

      const response = await fetch(`${API_BASE_URL}/submission/phase1`, {
        method: 'POST',
        headers,
        body: formData,
        credentials: 'include',  // CRITICAL: Include credentials for CORS
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      const data = await response.json();
      
      if (!response.ok) {
        const errorMessage = data.error || `HTTP ${response.status}: ${response.statusText}`;
        console.error('Submission failed:', errorMessage);
        throw new Error(errorMessage);
      }
      
      console.log('File uploaded successfully:', data);
      return data;
    } catch (error) {
      console.error('API error details:', error);
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new Error('Network error - unable to connect to server. Please check your internet connection.');
      }
      throw error;
    }
  },

  async getAllSubmissions() {
    try {
      const response = await authenticatedFetch(`${API_BASE_URL}/submission/all`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch submissions');
      }
      
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  },
  
  getDownloadUrl(submissionId: number) {
    return `${API_BASE_URL}/submission/download/${submissionId}`;
  }
};