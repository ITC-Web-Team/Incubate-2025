import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { authService } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';
import { useLocation } from 'wouter';
import OTPVerification from '@/components/auth/OTPVerification';
import { generateOTP, sendOTPEmail, storeOTPLocally } from '@/utils/emailService';

type RegistrationStep = 'form' | 'otp' | 'success';

export default function RegisterPage() {
  const [step, setStep] = useState<RegistrationStep>('form');
  const [registrationEmail, setRegistrationEmail] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: '',
    college: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Register | Incubate - MedTech Hackathon";
    
    // Redirect if already logged in
    if (authService.isAuthenticated()) {
      setLocation('/phase1-submission');
    }
  }, [setLocation]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Registration Failed",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Registration Failed",
        description: "Password must be at least 6 characters long",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Step 1: Send registration data to backend
      await authService.requestRegistration({
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
        phone: formData.phone,
        college: formData.college
      });

      // Step 2: Generate and send OTP via email (client-side)
      const otp = generateOTP();
      
      try {
        await sendOTPEmail(formData.email, otp, formData.fullName, 'registration');
        
        // Store OTP locally as backup
        storeOTPLocally(formData.email, otp);
        
        setRegistrationEmail(formData.email);
        setStep('otp');
        
        toast({
          title: "Verification Code Sent! 📧",
          description: `Please check your email (${formData.email}) for the verification code.`,
        });
      } catch (emailError) {
        console.warn('Email sending failed, using local storage only:', emailError);
        
        // Store OTP locally and continue
        storeOTPLocally(formData.email, otp);
        setRegistrationEmail(formData.email);
        setStep('otp');
        
        toast({
          title: "Registration Initiated 🔐",
          description: `For testing: Your OTP is ${otp}. In production, check your email.`,
        });
      }
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: error instanceof Error ? error.message : "Registration failed. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerificationSuccess = () => {
    setStep('success');
    toast({
      title: "Welcome to Incubate 2025! 🎉",
      description: "Your account has been created successfully.",
    });
  };

  const handleBackToForm = () => {
    setStep('form');
  };

  // Show OTP verification step
  if (step === 'otp') {
    return (
      <OTPVerification
        email={registrationEmail}
        onVerificationSuccess={handleVerificationSuccess}
        onBack={handleBackToForm}
        type="registration"
      />
    );
  }

  // Show success message (this will redirect automatically)
  if (step === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-600">Registration Complete! ✅</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p>Your account has been verified successfully.</p>
            <p>Redirecting to submission portal...</p>
            <Button onClick={() => setLocation('/phase1-submission')}>
              Continue to Submissions
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show registration form
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Create Account</CardTitle>
          <p className="text-sm text-muted-foreground text-center">
            Register to submit your Phase 1 proposal
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertDescription>
              📧 <strong>Email Setup:</strong> EmailJS configuration needed for email delivery. 
              For testing, OTP codes will be shown in notifications.
            </AlertDescription>
          </Alert>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="college">College/Institution</Label>
              <Input
                id="college"
                name="college"
                type="text"
                placeholder="Your college or institution"
                value={formData.college}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password (min 6 characters)"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>
          
          <div className="text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Button 
              variant="link" 
              className="p-0 h-auto font-normal"
              onClick={() => setLocation('/auth/login')}
            >
              Login here
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
