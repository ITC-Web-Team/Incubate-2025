import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { submissionService } from '../lib/api';

type SubmissionStatus = {
  type: 'success' | 'error';
  message: string;
} | null;

type FormDataState = {
  title: string;
  description: string;
  submissionFile: File | null;
};

const Phase1SubmissionForm = () => {
  const [formData, setFormData] = useState<FormDataState>({
    title: '',
    description: '',
    submissionFile: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmissionStatus>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload only PDF, DOC, or DOCX files');
        return;
      }
      
      // Validate file size (10MB)
      if (file.size > 10485760) {
        alert('File size must be less than 10MB');
        return;
      }

      setFormData(prev => ({
        ...prev,
        submissionFile: file
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      if (formData.submissionFile) {
        formDataToSend.append('submissionFile', formData.submissionFile);
      }

      const result = await submissionService.submitPhase1Proposal(formDataToSend);
      
      setSubmitStatus({ type: 'success', message: 'Phase 1 submission successful!' });
      setFormData({ title: '', description: '', submissionFile: null });
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Phase 1 Submission Portal</CardTitle>
        <p className="text-gray-600 text-center">Submit your problem statement solution</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Submission Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              minLength={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your submission title"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              minLength={10}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your solution approach and methodology"
            />
          </div>

          <div>
            <label htmlFor="submissionFile" className="block text-sm font-medium text-gray-700 mb-2">
              Submission Document * (PDF, DOC, DOCX - Max 10MB)
            </label>
            <input
              type="file"
              id="submissionFile"
              name="submissionFile"
              onChange={handleFileChange}
              required
              accept=".pdf,.doc,.docx"
              ref={fileInputRef}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formData.submissionFile && (
              <p className="text-sm text-green-600 mt-1">
                Selected: {formData.submissionFile.name} ({(formData.submissionFile.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            )}
          </div>

          {submitStatus && (
            <div className={`p-3 rounded-md ${
              submitStatus.type === 'success' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <Button 
            type="submit" 
            disabled={isSubmitting || !formData.title || !formData.description || !formData.submissionFile}
            className="w-full"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Phase 1'}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <h4 className="font-medium text-blue-900">Submission Guidelines:</h4>
          <ul className="text-sm text-blue-700 mt-2 space-y-1">
            <li>• Upload your complete solution document in PDF, DOC, or DOCX format</li>
            <li>• Maximum file size allowed is 10MB</li>
            <li>• Include problem analysis, proposed solution, and implementation approach</li>
            <li>• Ensure your team information is mentioned in the document</li>
            <li>• Once submitted, you cannot modify your submission</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default Phase1SubmissionForm;