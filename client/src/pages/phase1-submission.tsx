import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Phase1SubmissionForm from '../components/Phase1SubmissionForm';

const Phase1SubmissionPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

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

        {!showForm ? (
          <div className="text-center">
            <button
              onClick={handleOpenForm}
              className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            >
              Open Submission Form
            </button>
          </div>
        ) : (
          <Phase1SubmissionForm />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Phase1SubmissionPage;