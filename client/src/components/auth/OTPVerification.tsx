import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { authService } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';
import { useLocation } from 'wouter';

interface OTPVerificationProps {
  email: string;
  onVerificationSuccess: () => void;
  onBack: () => void;
  type?: 'registration' | 'login';
}

export default function OTPVerification({ 
  email, 
  onVerificationSuccess, 
  onBack, 
  type = 'registration' 
}: OTPVerificationProps) {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [canResend, setCanResend] = useState(false);
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a 6-digit verification code",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await authService.verifyOTP(email, otp);
      
      toast({
        title: "Verification Successful! 🎉",
        description: "Your account has been verified. Redirecting...",
      });
      
      onVerificationSuccess();
      
      // Redirect to submission page
      setTimeout(() => {
        setLocation('/phase1-submission');
      }, 1500);
    } catch (error) {
      toast({
        title: "Verification Failed",
        description: error instanceof Error ? error.message : "Invalid verification code",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!canResend) return;
    
    setIsLoading(true);
    try {
      // This would call a resend OTP endpoint
      toast({
        title: "Code Resent",
        description: "A new verification code has been sent to your email",
      });
      setTimeLeft(600);
      setCanResend(false);
    } catch (error) {
      toast({
        title: "Resend Failed",
        description: "Failed to resend verification code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Verify Your Email</CardTitle>
          <p className="text-sm text-muted-foreground">
            We've sent a 6-digit verification code to
          </p>
          <p className="text-sm font-medium text-blue-600">{email}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertDescription>
              📧 Check your email inbox (and spam folder) for the verification code. 
              The code expires in {formatTime(timeLeft)}.
            </AlertDescription>
          </Alert>

          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp">Verification Code</Label>
              <Input
                id="otp"
                type="text"
                placeholder="Enter 6-digit code"
                value={otp}
                onChange={handleOTPChange}
                maxLength={6}
                className="text-center text-lg font-mono tracking-widest"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading || otp.length !== 6}
            >
              {isLoading ? "Verifying..." : "Verify Email"}
            </Button>
          </form>

          <div className="space-y-3">
            <div className="text-center">
              <Button
                variant="ghost"
                onClick={handleResendOTP}
                disabled={!canResend || isLoading}
                className="text-sm"
              >
                {canResend ? "Resend Code" : `Resend in ${formatTime(timeLeft)}`}
              </Button>
            </div>

            <div className="text-center">
              <Button
                variant="link"
                onClick={onBack}
                className="text-sm text-muted-foreground"
              >
                ← Back to Registration
              </Button>
            </div>
          </div>

          <div className="text-xs text-center text-muted-foreground space-y-2">
            <p>Didn't receive the email?</p>
            <ul className="space-y-1">
              <li>• Check your spam/junk folder</li>
              <li>• Make sure you entered the correct email</li>
              <li>• Wait a few minutes for delivery</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
