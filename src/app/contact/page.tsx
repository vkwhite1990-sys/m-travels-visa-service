import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - M TRAVELS Visa Services',
  description: 'Get in touch with M TRAVELS for visa assistance and support.',
  robots: 'index, follow',
  openGraph: {
    title: 'Contact Us - M TRAVELS',
    description: 'Contact M TRAVELS visa support team',
    type: 'website',
  },
};

import ContactForm from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about your visa? Need assistance? Our expert team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="w-6 h-6 text-primary-600" />
              <h3 className="text-lg font-bold text-gray-900">Email</h3>
            </div>
            <p className="text-gray-600 mb-2">support@m-travels.com</p>
            <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <Phone className="w-6 h-6 text-primary-600" />
              <h3 className="text-lg font-bold text-gray-900">Phone</h3>
            </div>
            <p className="text-gray-600 mb-2">+1-800-VISA-HELP</p>
            <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="w-6 h-6 text-primary-600" />
              <h3 className="text-lg font-bold text-gray-900">Office</h3>
            </div>
            <p className="text-gray-600 mb-2">123 Travel Street</p>
            <p className="text-sm text-gray-500">City, Country</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h2>
            <div className="bg-white rounded-xl p-8 border border-gray-200 space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Saturday</p>
                  <p className="text-gray-600">10:00 AM - 4:00 PM EST</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Sunday</p>
                  <p className="text-gray-600">Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-primary-50 rounded-xl p-8 border border-primary-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Immediate Help?</h3>
              <p className="text-gray-600 mb-4">
                For urgent matters, please call our hotline or send an urgent email with "URGENT" in the subject line.
              </p>
              <p className="text-sm text-gray-500">Priority support available for verified customers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
