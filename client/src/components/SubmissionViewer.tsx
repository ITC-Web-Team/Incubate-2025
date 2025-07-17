import React, { useEffect, useState } from 'react';
import { submissionService } from '../lib/api';

type Submission = {
  id: number;
  title: string;
  description: string;
  submission_file_name: string;
  submitted_at: string;
  status: string;
};

const SubmissionViewer = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        setLoading(true);
        const data = await submissionService.getAllSubmissions();
        setSubmissions(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching submissions:', err);
        setError('Failed to load submissions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const handleDownload = (id: number) => {
    window.open(submissionService.getDownloadUrl(id), '_blank');
  };

  if (loading) {
    return <div className="text-center p-6">Loading submissions...</div>;
  }

  if (error) {
    return <div className="text-center p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">All Submissions</h2>
      
      {submissions.length === 0 ? (
        <p className="text-center text-gray-500">No submissions found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {submissions.map((submission) => (
            <div key={submission.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{submission.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{submission.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="mr-2">
                    {new Date(submission.submitted_at).toLocaleDateString()}
                  </span>
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {submission.status}
                  </span>
                </div>
                
                <button
                  onClick={() => handleDownload(submission.id)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download {submission.submission_file_name}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubmissionViewer;