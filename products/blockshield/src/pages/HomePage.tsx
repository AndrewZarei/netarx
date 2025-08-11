import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Users, Activity, TrendingUp, Star, CheckCircle } from 'lucide-react';
import img from '../logo.png'
const HomePage: React.FC = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

const features = [
    {
      title: "Transaction Pattern Analysis",
      description: "Advanced heuristics to detect suspicious transaction patterns, mixing services, and potential money laundering activities across blockchain networks with forensic precision.",
      icon: TrendingUp
    },
    {
      title: "Smart Contract Forensics",
      description: "Comprehensive analysis of smart contract interactions, vulnerability detection, and exploit tracing with full call stack reconstruction for incident investigations.",
      icon: Activity
    },
    {
      title: "Dark Web Monitoring",
      description: "Integrated dark web intelligence to track stolen funds, ransomware payments, and illicit marketplace transactions with automated alerting systems.",
      icon: Shield
    },
    {
      title: "Entity Clustering",
      description: "Sophisticated clustering algorithms to map wallet relationships, identify ownership patterns, and uncover hidden connections between addresses.",
      icon: Users
    }
];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className={`flex ${windowSize.width <= 768 ? 'flex-col' : 'flex-row'} items-center justify-between gap-12`}>
            <div className={`flex-1 max-w-2xl ${windowSize.width <= 768 ? 'text-center' : 'text-left'}`}>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-6">
                <Star className="h-4 w-4 mr-2" />
                Trusted by 500+ Organizations
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Unlock the Power of <span className="text-blue-600">Blockchain Forensics</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Trace wallet transactions with confidence. Discover hidden connections, investigate transaction anomalies, 
                and secure your assets with ChainTrace's advanced blockchain analytics platform.
              </p>
              <div className={`flex ${windowSize.width <= 768 ? 'flex-col' : 'flex-row'} gap-4`}>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Request Demo
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <div className="text-center">
                    <img src={img} alt="ChainTrace Logo" className="h-20 w-20 rounded-image mx-auto mb-4" />
                    {/* <Shield className="h-20 w-20 text-blue-600 mx-auto mb-4" /> */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Blockchain Analytics</h3>
                    <p className="text-gray-600">Advanced forensic investigation tools</p>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Real-time transaction monitoring
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Cross-chain analysis capabilities
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Compliance-ready reporting
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who Uses ChainTrace?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by professionals across industries who need reliable blockchain investigation tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Compliance Officers Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-100">
              <div className="h-16 w-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Shield className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance Officers</h3>
              <p className="text-gray-600 leading-relaxed">
                Meet regulatory requirements with comprehensive transaction monitoring, 
                identify high-risk wallets, and generate audit-ready reports for 
                anti-money laundering (AML) compliance.
              </p>
            </div>

            {/* Law Enforcement Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-100">
              <div className="h-16 w-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <Users className="h-8 w-8 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Law Enforcement</h3>
              <p className="text-gray-600 leading-relaxed">
                Trace illicit funds across multiple blockchains, identify wallet clusters, 
                and follow the money trail with our forensic-grade investigation tools.
              </p>
            </div>

            {/* Crypto Investigators Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-100">
              <div className="h-16 w-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <Activity className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Crypto Investigators</h3>
              <p className="text-gray-600 leading-relaxed">
                Uncover sophisticated money laundering patterns, detect mixing services, 
                and expose fraudulent schemes with our advanced analytics platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Blockchain Forensic Capabilities</h2>
      <p className="text-xl text-gray-600">
        Advanced tools for law enforcement, regulators, and compliance professionals
      </p>
    </div>

    {features.map((feature, index) => (
      <div key={index} className={`flex ${windowSize.width <= 768 ? 'flex-col' : index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-12 mb-16`}>
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {feature.description}
          </p>
          <button className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors">
            View Case Studies →
          </button>
        </div>
        <div className="flex-1">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-12 shadow-xl">
            <feature.icon className="h-24 w-24 text-white mx-auto" />
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
      {/* Transaction Guide Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Blockchain Transaction Analysis Guide
            </h2>
            <p className="text-xl text-gray-600">
              Master the fundamentals of blockchain investigation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reading Transaction Data */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-600">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Reading Transaction Data
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Learn how to interpret transaction fields like:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Inputs and Outputs</li>
                <li>• Transaction Hashes</li>
                <li>• Block Confirmations</li>
                <li>• Gas Fees and Timestamps</li>
              </ul>
            </div>

            {/* Tracing Funds */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-600">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Tracing Funds Across Chains
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Techniques for following cryptocurrency movements:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Identifying bridge transactions</li>
                <li>• Tracking cross-chain swaps</li>
                <li>• Analyzing mixer patterns</li>
                <li>• Cluster analysis techniques</li>
              </ul>
            </div>

            {/* Risk Assessment */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-orange-600">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Risk Assessment
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                How to evaluate transaction risks:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Darknet market indicators</li>
                <li>• Scam pattern recognition</li>
                <li>• Money laundering flags</li>
                <li>• Regulatory compliance checks</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Analyzing Transactions
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to see ChainTrace in action?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Schedule a personalized demo to discover how ChainTrace can transform your blockchain investigations.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Request Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;