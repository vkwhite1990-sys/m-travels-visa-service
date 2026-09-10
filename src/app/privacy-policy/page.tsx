import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - M TRAVELS Visa Services',
  description: 'Read M TRAVELS privacy policy to understand how we protect your personal data.',
  robots: 'index, follow',
  openGraph: {
    title: 'Privacy Policy - M TRAVELS',
    description: 'Learn how M TRAVELS protects your personal information',
    type: 'website',
  },
};

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              M TRAVELS ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Personal Information:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Name, email address, phone number</li>
                <li>Passport information and travel details</li>
                <li>Billing and payment information</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-4">Automatic Information:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring/exit pages</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Process visa applications and provide services</li>
              <li>Communicate with you about your application status</li>
              <li>Improve our services and website</li>
              <li>Send promotional emails (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Protection</h2>
            <p>
              We implement industry-standard security measures to protect your personal information. Your data is encrypted and
              stored securely on our servers. Only authorized personnel have access to your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking</h2>
            <p>
              We use cookies to enhance your browsing experience. You can control cookie settings in your browser. We also use
              analytics to understand how users interact with our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Sharing</h2>
            <p>
              We do not sell your personal information to third parties. We may share information with service providers, partners,
              and government agencies only when necessary to provide our services or comply with legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 bg-gray-50 p-4 rounded">
              <p className="font-semibold">M TRAVELS Privacy Team</p>
              <p>Email: privacy@m-travels.com</p>
              <p>Phone: +1-800-VISA-HELP</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
