import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SubmissionViewer from '../components/SubmissionViewer';

const SubmissionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            All Submissions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            View and download all submissions
          </p>
        </div>

        <SubmissionViewer />
      </main>
      <Footer />
    </div>
  );
};

export default SubmissionsPage;