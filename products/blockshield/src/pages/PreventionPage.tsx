import React from 'react';
import { Shield, AlertTriangle, Lock, EyeOff, Database, Bell, BookOpen } from 'lucide-react';

const PreventionPage: React.FC = () => {
  const tips = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-blue-600" />,
      title: "Recognize Red Flags",
      description: "Learn to identify common signs of pyramid schemes and fraudulent investment opportunities."
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: "Secure Your Assets",
      description: "Best practices for securing your cryptocurrency wallets and private keys."
    },
    {
      icon: <EyeOff className="h-8 w-8 text-blue-600" />,
      title: "Privacy Protection",
      description: "How to maintain privacy without falling victim to scams."
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Due Diligence",
      description: "Research projects thoroughly before investing time or money."
    },
    {
      icon: <Bell className="h-8 w-8 text-blue-600" />,
      title: "Stay Informed",
      description: "Subscribe to alerts about new scam patterns and threats."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Educational Resources",
      description: "Access our library of materials to educate your team or community."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-6">
              <Shield className="h-5 w-5 mr-2" />
              Scam Prevention Guide
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              Protect Yourself from <span className="text-blue-600">Cryptocurrency Scams</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Essential knowledge and tools to identify and avoid fraudulent schemes in the blockchain space.
            </p>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {tips.map((tip, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-2xl mb-6">
                  {tip.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tip.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Scams Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Cryptocurrency Scams</h2>
            <p className="text-xl text-gray-600">
              Be aware of these frequent threats in the ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pyramid Schemes</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Promises of high returns with little effort
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Focus on recruiting over product value
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Complex compensation structures
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phishing Attacks</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Fake websites mimicking legitimate services
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Urgent requests for private keys
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Malicious browser extensions
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fake ICOs</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Whitepapers copied from legitimate projects
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Celebrity endorsements without disclosure
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  No working product or prototype
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ponzi Schemes</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Guaranteed returns regardless of market conditions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Lack of transparency about operations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Pressure to reinvest earnings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Help Investigating a Suspicious Scheme?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Our forensic experts can analyze potential scams and provide detailed reports.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            Contact Our Investigation Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default PreventionPage;