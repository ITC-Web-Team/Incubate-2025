import emailjs from '@emailjs/browser';

// EmailJS configuration - you'll need to set these up at https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_incubate2025';
const EMAILJS_TEMPLATE_ID = 'template_otp_verification';
const EMAILJS_PUBLIC_KEY = 'your_emailjs_public_key_here';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Generate 6-digit OTP
export const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Send OTP email using EmailJS
export const sendOTPEmail = async (
  email: string, 
  otp: string, 
  fullName: string,
  type: 'registration' | 'login' = 'registration'
): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: email,
      to_name: fullName,
      otp_code: otp,
      verification_type: type,
      expires_in: '10 minutes',
      company_name: 'Incubate 2025',
      event_name: 'MedTech Innovation Challenge',
      year: new Date().getFullYear(),
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('OTP email sent successfully:', response.status, response.text);
    return true;
  } catch (error) {
    console.error('Failed to send OTP email:', error);
    throw new Error('Failed to send verification email. Please try again.');
  }
};

// Store OTP in localStorage with expiration (fallback for development)
export const storeOTPLocally = (email: string, otp: string): void => {
  const otpData = {
    otp,
    email,
    expiresAt: Date.now() + 10 * 60 * 1000, // 10 minutes
    createdAt: Date.now()
  };
  localStorage.setItem(`otp_${email}`, JSON.stringify(otpData));
};

// Verify OTP from localStorage (fallback for development)
export const verifyOTPLocally = (email: string, enteredOTP: string): boolean => {
  const storedData = localStorage.getItem(`otp_${email}`);
  if (!storedData) return false;

  try {
    const otpData = JSON.parse(storedData);
    const isExpired = Date.now() > otpData.expiresAt;
    const isValid = otpData.otp === enteredOTP && otpData.email === email;

    if (isValid && !isExpired) {
      // Remove OTP after successful verification
      localStorage.removeItem(`otp_${email}`);
      return true;
    }

    if (isExpired) {
      localStorage.removeItem(`otp_${email}`);
    }

    return false;
  } catch {
    return false;
  }
};

// Get remaining time for OTP
export const getOTPRemainingTime = (email: string): number => {
  const storedData = localStorage.getItem(`otp_${email}`);
  if (!storedData) return 0;

  try {
    const otpData = JSON.parse(storedData);
    const remaining = otpData.expiresAt - Date.now();
    return Math.max(0, Math.ceil(remaining / 1000)); // Return seconds
  } catch {
    return 0;
  }
};

// EmailJS Setup Instructions
export const EMAILJS_SETUP_INSTRUCTIONS = `
🔧 EmailJS Setup Instructions:

1. Go to https://www.emailjs.com/ and create a free account
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - {{to_email}} - recipient email
   - {{to_name}} - recipient name  
   - {{otp_code}} - the OTP code
   - {{verification_type}} - registration/login
   - {{expires_in}} - expiration time
   - {{company_name}} - Incubate 2025
   - {{event_name}} - MedTech Innovation Challenge

4. Update the constants in this file:
   - EMAILJS_SERVICE_ID
   - EMAILJS_TEMPLATE_ID  
   - EMAILJS_PUBLIC_KEY

5. Template example:
   Subject: Verify Your Email - {{company_name}}
   
   Hi {{to_name}},
   
   Your verification code for {{verification_type}} is:
   
   {{otp_code}}
   
   This code expires in {{expires_in}}.
   
   Best regards,
   {{company_name}} Team
`;

export default {
  generateOTP,
  sendOTPEmail,
  storeOTPLocally,
  verifyOTPLocally,
  getOTPRemainingTime,
  EMAILJS_SETUP_INSTRUCTIONS
};
