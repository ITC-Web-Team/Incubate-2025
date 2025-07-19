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
      
      // Store the fileUrl from the result if available
      const fileUrl = result.fileUrl || '';
      const submissionId = result.submissionId || '';
      
      setSubmitStatus({ 
        type: 'success', 
        message: `Submission successful! Your file "${formData.submissionFile?.name}" has been uploaded to our secure cloud storage with ID: ${submissionId}.` 
      });
      
      setFormData({ title: '', description: '', submissionFile: null });
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Unable to upload your submission. Please try again or contact support.' 
      });
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
            <div className="border-2 border-dashed border-gray-300 rounded-md px-6 py-8 text-center hover:border-blue-500 transition-colors">
              <input
                type="file"
                id="submissionFile"
                name="submissionFile"
                onChange={handleFileChange}
                required
                accept=".pdf,.doc,.docx"
                ref={fileInputRef}
                className="hidden"
              />
              <label 
                htmlFor="submissionFile"
                className="cursor-pointer flex flex-col items-center justify-center gap-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-10 w-10 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                  />
                </svg>
                <span className="text-gray-600 font-medium">
                  {formData.submissionFile ? 'Change file' : 'Choose a file or drag and drop'}
                </span>
                <span className="text-xs text-gray-500">
                  PDF, DOC, DOCX up to 10MB
                </span>
              </label>
            </div>
            {formData.submissionFile && (
              <div className="mt-3 p-3 bg-blue-50 rounded-md flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-blue-500 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-blue-700">
                    {formData.submissionFile.name}
                  </p>
                  <p className="text-xs text-blue-600">
                    {(formData.submissionFile.size / 1024 / 1024).toFixed(2)} MB • {formData.submissionFile.type.split('/')[1].toUpperCase()}
                  </p>
                </div>
              </div>
            )}
          </div>

          {submitStatus && (
            <div className={`p-4 rounded-md ${
              submitStatus.type === 'success' 
                ? 'bg-green-100 border-l-4 border-green-500' 
                : 'bg-red-100 border-l-4 border-red-500'
            }`}>
              <div className="flex">
                <div className="flex-shrink-0">
                  {submitStatus.type === 'success' ? (
                    <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                    {submitStatus.message}
                  </p>
                </div>
              </div>
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
            <li>• Files are securely stored in our cloud storage system</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default Phase1SubmissionForm;