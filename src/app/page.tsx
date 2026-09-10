'use client';

import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Globe, FileText, Users, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Visa services for 150+ countries worldwide',
    },
    {
      icon: FileText,
      title: 'Expert Guidance',
      description: 'Step-by-step assistance with visa applications',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Professional team ready to help you succeed',
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Quick visa requirement checks and approvals',
    },
  ];

  const steps = [
    { number: 1, title: 'Check Requirements', description: 'See what you need for your visa' },
    { number: 2, title: 'Prepare Documents', description: 'Gather all required documentation' },
    { number: 3, title: 'Submit Application', description: 'Complete your visa application' },
    { number: 4, title: 'Get Approved', description: 'Receive your visa decision' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Journey to Global Opportunities Starts Here
          </h1>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            M TRAVELS makes visa applications simple, transparent, and stress-free. Get expert guidance for any country, any visa type.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visa-check"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-800 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105"
            >
              Check Visa Requirements
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 text-white rounded-lg font-bold hover:bg-primary-600 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Why Choose M TRAVELS?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">We provide comprehensive visa services to make your international travel dreams a reality.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                  <Icon className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Our simple 4-step process makes getting your visa easier than ever.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-200 -z-10"></div>
                )}
                <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-primary-300 transition-all">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Visa Journey?</h2>
          <p className="text-primary-100 mb-8 text-lg">Get expert guidance and support for your visa application today.</p>
          <Link
            href="/visa-check"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-800 rounded-lg font-bold hover:shadow-xl transition-all transform hover:scale-105"
          >
            Check Your Visa Requirements Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
