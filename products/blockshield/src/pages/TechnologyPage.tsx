import React from 'react';
import { Code, Cpu, Database, Shield, Globe, Server, Lock } from 'lucide-react';

const TechnologyPage: React.FC = () => {
  const features = [
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Distributed Ledger Analysis",
      description: "Our proprietary algorithms can trace transactions across multiple blockchains simultaneously."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Advanced Threat Detection",
      description: "Real-time identification of suspicious patterns and known malicious addresses."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Node Network",
      description: "Nodes in 50+ countries ensure comprehensive blockchain data coverage."
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Smart Contract Auditing",
      description: "In-depth analysis of smart contracts for vulnerabilities and malicious code."
    },
    {
      icon: <Server className="h-8 w-8 text-blue-600" />,
      title: "High-Performance Infrastructure",
      description: "Process millions of transactions per second with our optimized architecture."
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: "End-to-End Encryption",
      description: "All data is encrypted both in transit and at rest using military-grade protocols."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-6">
              <Cpu className="h-5 w-5 mr-2" />
              Our Technology Stack
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              The Most Advanced <span className="text-blue-600">Blockchain Forensics</span> Platform
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              ChainTrace combines cutting-edge artificial intelligence with deep blockchain expertise 
              to provide unparalleled insights into cryptocurrency transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How ChainTrace Works</h2>
            <p className="text-xl text-gray-600">
              A three-step process to uncover hidden connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-2xl mb-6 mx-auto">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Collection</h3>
              <p className="text-gray-600">
                We gather raw blockchain data from nodes across the globe, ensuring comprehensive coverage.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-2xl mb-6 mx-auto">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pattern Analysis</h3>
              <p className="text-gray-600">
                Machine learning models identify suspicious patterns and cluster related addresses.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-2xl mb-6 mx-auto">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visualization</h3>
              <p className="text-gray-600">
                Interactive graphs and reports make complex transaction flows easy to understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Our Technology?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            See how ChainTrace can help your organization combat financial crime in the digital age.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            Request a Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;