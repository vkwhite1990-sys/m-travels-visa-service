import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visa Check - M TRAVELS',
  description: 'Check your visa requirements instantly. Find out what you need for your dream destination.',
  robots: 'index, follow',
  openGraph: {
    title: 'Visa Check Tool - M TRAVELS',
    description: 'Check visa requirements for any country',
    type: 'website',
  },
};

import VisaCheckForm from '@/components/forms/VisaCheckForm';

const VisaCheckPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Check Your Visa Requirements</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Instantly discover what documents and requirements you need for your desired destination.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          <VisaCheckForm />
        </div>

        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-2">✓ Accurate Information</h3>
            <p className="text-blue-800 text-sm">
              Our database is regularly updated with the latest visa requirements from official sources.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-lg font-bold text-green-900 mb-2">✓ Personalized Results</h3>
            <p className="text-green-800 text-sm">
              Get customized visa requirements based on your nationality and travel purpose.
            </p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <h3 className="text-lg font-bold text-purple-900 mb-2">✓ Expert Support</h3>
            <p className="text-purple-800 text-sm">
              Need help? Our visa experts are available to answer all your questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaCheckPage;
