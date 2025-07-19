# Frontend Debug & Fix Prompt

You are a frontend developer tasked with fixing CORS and API connectivity issues in a React/JavaScript application. The backend API is now working correctly with proper CORS configuration.

## Current Situation:
- **Backend API**: `https://incubate-backend.tech-iitb.org`
- **Frontend**: `https://incubate2025.in`
- **Issue**: Frontend getting CORS errors and 502 Bad Gateway when submitting Phase 1 proposals
- **Backend CORS**: Now properly configured and working ✅

## Your Tasks:

### 1. ANALYZE CURRENT FRONTEND CODE

Look for these common issues in the frontend codebase:

**API Configuration Issues:**
- Check if API calls are using the correct production URL
- Look for hardcoded localhost URLs that should be production URLs
- Verify environment variables are properly configured

**Request Configuration Issues:**
- Missing `credentials: 'include'` in fetch requests
- Incorrectly set Content-Type headers for file uploads
- Wrong request method or headers

**Error Handling Issues:**
- Not properly handling 502 errors
- Missing error boundaries or fallbacks

### 2. LOCATE THE SUBMISSION CODE

Find the code that handles Phase 1 submissions, likely in:
- Components that handle form submission
- API service files
- Utils or hooks that make HTTP requests

Look for patterns like:
```javascript
// Common patterns to find
fetch('/api/submission/phase1')
axios.post('/api/submission/phase1')
submitPhase1Proposal()
handleSubmit()
```

### 3. FIX THE API CONFIGURATION

Replace incorrect configurations like:

```javascript
// ❌ Wrong - localhost or missing domain
const API_BASE = 'http://localhost:5001';
const API_BASE = '/api';
fetch('/api/submission/phase1')

// ✅ Correct - production domain
const API_BASE = 'https://incubate-backend.tech-iitb.org';
fetch('https://incubate-backend.tech-iitb.org/api/submission/phase1')
```

### 4. FIX THE REQUEST CONFIGURATION

For file uploads, ensure this pattern:

```javascript
// ✅ Correct file upload configuration
const formData = new FormData();
formData.append('submissionFile', file);
formData.append('title', title);
formData.append('description', description);

const response = await fetch('https://incubate-backend.tech-iitb.org/api/submission/phase1', {
  method: 'POST',
  body: formData,
  credentials: 'include', // IMPORTANT for CORS
  // DO NOT set Content-Type - let browser set it for FormData
});

// ❌ Common mistakes to avoid:
// headers: { 'Content-Type': 'application/json' } // Wrong for file uploads
// headers: { 'Content-Type': 'multipart/form-data' } // Browser sets this automatically
```

### 5. ENVIRONMENT VARIABLES

Set up proper environment variables:

**For React (.env files):**
```env
REACT_APP_API_BASE_URL=https://incubate-backend.tech-iitb.org
REACT_APP_ENVIRONMENT=production
```

**For Next.js:**
```env
NEXT_PUBLIC_API_BASE_URL=https://incubate-backend.tech-iitb.org
```

**For Vite:**
```env
VITE_API_BASE_URL=https://incubate-backend.tech-iitb.org
```

### 6. TEST THE FIX

Create a test function to verify the fix:

```javascript
// Test function to verify API connectivity
async function testAPI() {
  try {
    // Test 1: Health check
    const healthResponse = await fetch('https://incubate-backend.tech-iitb.org/api/health');
    console.log('Health check:', await healthResponse.json());
    
    // Test 2: Submission health
    const submissionHealthResponse = await fetch('https://incubate-backend.tech-iitb.org/api/submission/health');
    console.log('Submission health:', await submissionHealthResponse.json());
    
    // Test 3: CORS preflight
    const corsResponse = await fetch('https://incubate-backend.tech-iitb.org/api/submission/phase1', {
      method: 'OPTIONS',
      headers: {
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': 'Content-Type'
      }
    });
    console.log('CORS preflight status:', corsResponse.status);
    
  } catch (error) {
    console.error('API test failed:', error);
  }
}

// Run this in browser console to test
testAPI();
```

## Common Frontend Patterns to Fix:

### Pattern 1: API Service File
```javascript
// api.js or services/api.js
const API_BASE = process.env.REACT_APP_API_BASE_URL || 'https://incubate-backend.tech-iitb.org';

export const submitPhase1Proposal = async (formData) => {
  const response = await fetch(`${API_BASE}/api/submission/phase1`, {
    method: 'POST',
    body: formData, // FormData object
    credentials: 'include',
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
};
```

### Pattern 2: React Hook
```javascript
// hooks/useSubmission.js
import { useState } from 'react';

export const useSubmission = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const submitProposal = async (file, title, description) => {
    setLoading(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('submissionFile', file);
      formData.append('title', title);
      formData.append('description', description);
      
      const response = await fetch('https://incubate-backend.tech-iitb.org/api/submission/phase1', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });
      
      if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`);
      }
      
      const result = await response.json();
      setLoading(false);
      return result;
      
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };
  
  return { submitProposal, loading, error };
};
```

### Pattern 3: Component Form Handler
```javascript
// components/SubmissionForm.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!file || !title || !description) {
    setError('All fields are required');
    return;
  }
  
  try {
    setLoading(true);
    const formData = new FormData();
    formData.append('submissionFile', file);
    formData.append('title', title);
    formData.append('description', description);
    
    const response = await fetch('https://incubate-backend.tech-iitb.org/api/submission/phase1', {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });
    
    if (response.ok) {
      const result = await response.json();
      onSuccess(result);
    } else {
      const errorData = await response.json();
      setError(errorData.error || 'Submission failed');
    }
  } catch (error) {
    setError('Network error: ' + error.message);
  } finally {
    setLoading(false);
  }
};
```

## Debugging Checklist:

- [ ] API URL uses `https://incubate-backend.tech-iitb.org` (not localhost)
- [ ] fetch/axios requests include `credentials: 'include'`
- [ ] No Content-Type header set for FormData uploads
- [ ] FormData properly constructed with file and text fields
- [ ] Error handling covers both network and HTTP errors
- [ ] Environment variables properly configured
- [ ] CORS preflight requests work in browser dev tools
- [ ] Network tab shows requests going to correct domain

## Browser Developer Tools Debugging:

### 1. Network Tab Analysis
- Open DevTools → Network tab
- Try to submit a form
- Look for requests to your API
- Check if requests go to correct domain
- Verify response status codes

### 2. Console Error Analysis
```javascript
// Common CORS error patterns to look for:
// "Access to fetch at 'https://...' from origin 'https://incubate2025.in' has been blocked by CORS policy"
// "Failed to fetch"
// "TypeError: NetworkError when attempting to fetch resource"
```

### 3. Headers Inspection
Check request headers in Network tab:
- Should NOT have `Content-Type` for FormData
- Should have `Origin: https://incubate2025.in`
- Response should have `Access-Control-Allow-Origin` header

## Common Fix Scenarios:

### Scenario 1: Axios Configuration
```javascript
// ❌ Wrong
axios.post('/api/submission/phase1', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});

// ✅ Correct
axios.post('https://incubate-backend.tech-iitb.org/api/submission/phase1', formData, {
  withCredentials: true,
  // No headers needed for FormData
});
```

### Scenario 2: Environment Variables Not Working
```javascript
// Debug environment variables
console.log('API Base URL:', process.env.REACT_APP_API_BASE_URL);
console.log('All env vars:', process.env);

// Fallback if env vars not working
const API_BASE = process.env.REACT_APP_API_BASE_URL || 'https://incubate-backend.tech-iitb.org';
```

### Scenario 3: Proxy Configuration (Remove if exists)
```javascript
// ❌ Remove proxy from package.json if it exists
{
  "name": "frontend",
  "proxy": "http://localhost:5001", // REMOVE THIS LINE
  "dependencies": {...}
}
```

## Expected Behavior After Fix:

✅ No CORS errors in browser console  
✅ Requests show 200/201 status codes (not 502)  
✅ File uploads complete successfully  
✅ Success/error messages display correctly  
✅ Network tab shows requests to production API domain  

## Quick Test Commands:

Test these in your browser console on `https://incubate2025.in`:

```javascript
// Test 1: Simple health check
fetch('https://incubate-backend.tech-iitb.org/api/health')
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);

// Test 2: CORS preflight
fetch('https://incubate-backend.tech-iitb.org/api/submission/phase1', {
  method: 'OPTIONS',
  headers: { 'Access-Control-Request-Method': 'POST' }
})
  .then(r => console.log('CORS OK:', r.status))
  .catch(console.error);

// Test 3: Mock submission
const testFormData = new FormData();
testFormData.append('title', 'Test');
testFormData.append('description', 'Test desc');

fetch('https://incubate-backend.tech-iitb.org/api/submission/phase1', {
  method: 'POST',
  body: testFormData,
  credentials: 'include'
})
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);
```

## Summary

The backend CORS is working correctly. Focus on:
1. **Fixing the API URL** - Use production domain, not localhost
2. **Adding credentials** - Include `credentials: 'include'` in all requests
3. **Removing wrong headers** - Don't set Content-Type for FormData
4. **Testing systematically** - Use browser dev tools to verify each fix

Look for these specific error patterns and fix them systematically. The backend CORS is working correctly, so any remaining issues are in the frontend configuration.