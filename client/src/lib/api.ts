// This file contains API service methods for communication with the backend
// In production, this will use https://incubate-backend.tech-iitb.org/api
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export const authService = {
  async login(email: string, password: string) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    
    if (response.ok) {
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    
    return { data, ok: response.ok };
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
    });

    const data = await response.json();
    
    if (response.ok) {
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    
    return { data, ok: response.ok };
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
    });

    const data = await response.json();
    return { data, ok: response.ok };
  },

  async submitPhase1Proposal(formData: FormData) {
    try {
      const response = await fetch(`${API_BASE_URL}/submission/phase1`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      
      if (!response.ok) {
        const errorMessage = data.error || 'Failed to submit proposal';
        throw new Error(errorMessage);
      }
      
      console.log('File uploaded successfully:', data);
      return data;
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  },

  async getAllSubmissions() {
    try {
      const response = await fetch(`${API_BASE_URL}/submission/all`);
      
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