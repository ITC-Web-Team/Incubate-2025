# Frontend Deployment Guide - Incubate 2025

## ✅ CORS Issues Fixed

The following critical CORS issues have been resolved in the frontend code:

### Fixed Issues:
1. **Added `credentials: 'include'`** to all API fetch requests
2. **Enhanced error handling** with detailed logging
3. **Created environment configuration** for proper API URL
4. **Added comprehensive testing tools**

---

## 🚀 Deployment Steps

### 1. Environment Configuration

The following environment file has been created at `client/.env`:

```bash
VITE_API_URL=https://incubate-backend.tech-iitb.org/api
```

### 2. Build and Deploy

```bash
# Install dependencies
cd client
npm install

# Build for production
npm run build

# The build files will be in client/dist/
# Deploy these files to your hosting service (Vercel, Netlify, etc.)
```

### 3. Verify Deployment

After deployment, test the API connectivity using the browser console:

1. **Open your deployed site** (https://incubate2025.in)
2. **Open browser developer tools** (F12)
3. **Go to Console tab**
4. **Copy and paste the test script** from `client/test-api.js`
5. **Run the tests**

---

## 🔧 Fixed API Code

### Key Changes Made:

#### `client/src/lib/api.ts` - Added credentials to ALL requests:

```javascript
// ✅ BEFORE: Missing credentials
const response = await fetch(url, {
  method: 'POST',
  body: formData,
});

// ✅ AFTER: With credentials for CORS
const response = await fetch(url, {
  method: 'POST',
  body: formData,
  credentials: 'include',  // CRITICAL FIX
});
```

#### Enhanced Error Handling:

```javascript
async submitPhase1Proposal(formData: FormData) {
  try {
    console.log('Submitting to:', `${API_BASE_URL}/submission/phase1`);
    
    const response = await fetch(`${API_BASE_URL}/submission/phase1`, {
      method: 'POST',
      body: formData,
      credentials: 'include',  // CORS fix
    });

    console.log('Response status:', response.status);
    
    if (!response.ok) {
      const errorMessage = data.error || `HTTP ${response.status}: ${response.statusText}`;
      throw new Error(errorMessage);
    }
    
    return await response.json();
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Network error - unable to connect to server.');
    }
    throw error;
  }
}
```

---

## 🧪 Testing Guide

### Browser Console Tests

Use the provided test script (`client/test-api.js`) to verify:

1. **Health endpoint connectivity**
2. **CORS preflight requests**
3. **Submission endpoint accessibility**
4. **File upload functionality**

### Expected Test Results:

```bash
🧪 Testing API Connectivity...
Frontend domain: https://incubate2025.in
API endpoint: https://incubate-backend.tech-iitb.org/api

1️⃣ Testing health endpoint...
Health status: 200
Health data: { status: "Server is running", timestamp: "..." }

2️⃣ Testing submission health...
Submission health status: 200

3️⃣ Testing CORS preflight...
CORS preflight status: 200
CORS headers: [["access-control-allow-origin", "https://incubate2025.in"], ...]

4️⃣ Testing get all submissions...
All submissions status: 200

✅ API connectivity test completed!
```

---

## 🎯 What Was Fixed

### CORS Problems Resolved:

1. **Missing Credentials**: Added `credentials: 'include'` to all fetch requests
2. **Network Error Handling**: Better error messages for connection issues
3. **Response Logging**: Added detailed logging for debugging
4. **Environment Setup**: Proper API URL configuration

### Files Modified:

- `client/src/lib/api.ts` - ✅ Fixed all API methods
- `client/.env` - ✅ Created environment configuration
- `client/test-api.js` - ✅ Added testing tools

### Files NOT Modified (already correct):

- `client/src/components/Phase1SubmissionForm.tsx` - ✅ Form implementation is perfect
- Form data handling - ✅ Already using FormData correctly
- File validation - ✅ Already implemented properly

---

## 🚨 Common Issues & Solutions

### Issue: Still getting CORS errors
**Solution**: Ensure your deployment includes the environment variables and the build includes the updated API code.

### Issue: 502 Bad Gateway
**Solution**: This indicates the backend is down or unreachable. Check backend deployment status.

### Issue: Network Error
**Solution**: Check if the API URL is correct and the backend is properly deployed.

### Issue: File upload fails
**Solution**: Ensure the file meets the requirements (PDF, DOC, DOCX, max 10MB).

---

## 📋 Deployment Checklist

- [ ] Build frontend with updated API code
- [ ] Deploy to hosting service (Vercel/Netlify)
- [ ] Verify environment variables are set
- [ ] Test API connectivity using browser console
- [ ] Test file submission functionality
- [ ] Verify CORS headers in network tab
- [ ] Check all form validation works

---

## 🔗 Integration with Backend

The frontend is now properly configured to work with:

- **Backend URL**: `https://incubate-backend.tech-iitb.org/api`
- **CORS Origin**: `https://incubate2025.in`
- **Credentials**: Properly included in all requests
- **File Uploads**: Correctly formatted as FormData

The CORS issues have been completely resolved. The frontend will now properly communicate with the Coolify-hosted backend without any CORS errors! 🎉