// This file contains simplified frontend-only utility functions
// All backend functionality has been removed

// Mock auth service for frontend-only operations
export const authService = {
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

// Mock registration service
export const registrationService = {
  async createTeam(teamData: any) {
    // Placeholder for frontend-only team creation
    console.log('Team data:', teamData);
    return { data: { success: true }, ok: true };
  },

  async getMyTeam() {
    // Placeholder for getting team data
    return { data: null, ok: true };
  }
};

// Mock submission service
export const submissionService = {
  async submitPhase1(formData: FormData) {
    // Placeholder for submission
    console.log('Form data submitted:', formData);
    return { data: { success: true }, ok: true };
  },

  async getMySubmissions() {
    // Placeholder for getting submissions
    return { data: [], ok: true };
  },

  async submitPhase1Proposal(formData: FormData) {
    // Placeholder for proposal submission
    console.log('Proposal submitted:', formData);
    return { success: true };
  },

  async getAllSubmissions() {
    // Placeholder for getting all submissions
    return [];
  },
  
  getDownloadUrl(submissionId: number) {
    return `#download-${submissionId}`;
  }
};