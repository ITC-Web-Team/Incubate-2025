import React from 'react';
import { Link } from 'wouter';
import { ExternalLink, FileText, Lock } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Phase1SubmissionForm from '../components/Phase1SubmissionForm';

const Phase1SubmissionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Phase 1 Submission Portal
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Submit your innovative solution for the selected theme
          </p>
          
          {/* Submission Options */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center">
              <FileText className="w-6 h-6 mr-2" />
              Choose Your Submission Method
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* New Submission Method */}
              <Link href="/submission">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 hover:border-green-300 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md">
                  <div className="flex items-center justify-center mb-3">
                    <Lock className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-800 mb-2">Authenticated Submission</h3>
                  <p className="text-sm text-green-700 mb-3">
                    Use your provided credentials to access the submission form
                  </p>
                  <div className="flex items-center justify-center text-green-600">
                    <span className="mr-2">Submit Here</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </Link>
              
              {/* Alternative Submission Method */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-center mb-3">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-800 mb-2">Alternative Submission</h3>
                <p className="text-sm text-blue-700 mb-3">
                  Traditional submission form (if available)
                </p>
                <div className="text-blue-500 text-sm">
                  Contact organizers for access
                </div>
              </div>
            </div>
          </div>
        </div>

        <Phase1SubmissionForm />
      </main>
    </div>
  );
};

export default Phase1SubmissionPage;