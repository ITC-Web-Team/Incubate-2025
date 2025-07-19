import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Phase1SubmissionForm from '../components/Phase1SubmissionForm';

const Phase1SubmissionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Phase 1 Submission Portal
          </h1>
          <p className="text-lg text-gray-600">
            Submit your innovative solution for the selected theme
          </p>
        </div>

        <Phase1SubmissionForm />
      </main>
      <Footer />
    </div>
  );
};

export default Phase1SubmissionPage;