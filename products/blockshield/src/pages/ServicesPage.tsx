import React from 'react';
import { Shield, Search, FileText, Users, Zap, Lock, TrendingUp, Eye, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'Wallet Investigation',
      description: 'Comprehensive wallet analysis and transaction tracking across multiple blockchain networks.',
      features: ['Multi-chain wallet clustering', 'Transaction path analysis', 'Risk scoring algorithms', 'Real-time monitoring'],
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Compliance Monitoring',
      description: 'Automated compliance solutions for financial institutions and crypto businesses.',
      features: ['AML/KYC compliance', 'Regulatory reporting', 'Risk assessment tools', 'Audit trail generation'],
      color: 'green'
    },
    {
      icon: FileText,
      title: 'Forensic Reporting',
      description: 'Detailed forensic reports for legal proceedings and regulatory submissions.',
      features: ['Court-ready reports', 'Visual transaction maps', 'Expert witness support', 'Chain of custody tracking'],
      color: 'purple'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of suspicious activities and emerging threats.',
      features: ['24/7 transaction monitoring', 'Alert notifications', 'Pattern recognition', 'Threat intelligence'],
      color: 'orange'
    }
  ];

  const industries = [
    {
      icon: Users,
      title: 'Financial Institutions',
      description: 'Banks, exchanges, and payment processors ensuring regulatory compliance.',
      benefits: ['Reduce compliance costs', 'Minimize regulatory risk', 'Automate reporting processes']
    },
    {
      icon: Shield,
      title: 'Law Enforcement',
      description: 'Government agencies investigating cryptocurrency-related crimes.',
      benefits: ['Track illicit funds', 'Identify criminal networks', 'Gather evidence for prosecution']
    },
    {
      icon: Lock,
      title: 'Cybersecurity Firms',
      description: 'Security companies protecting clients from crypto-related threats.',
      benefits: ['Threat intelligence', 'Incident response', 'Risk assessment tools']
    },
    {
      icon: TrendingUp,
      title: 'Legal Professionals',
      description: 'Law firms handling cryptocurrency litigation and regulatory matters.',
      benefits: ['Expert testimony support', 'Evidence collection', 'Case documentation']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:border-blue-400'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        border: 'border-green-200',
        hover: 'hover:border-green-400'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        border: 'border-purple-200',
        hover: 'hover:border-purple-400'
      },
      orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-600',
        border: 'border-orange-200',
        hover: 'hover:border-orange-400'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Comprehensive blockchain forensics solutions tailored to meet the unique needs 
            of compliance officers, investigators, and security professionals.
          </p>
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full">
            <Zap className="h-5 w-5 mr-2" />
            Enterprise-Grade Solutions Available
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              return (
                <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-xl`}>
                  <div className={`inline-flex items-center justify-center h-16 w-16 ${colors.bg} rounded-2xl mb-6`}>
                    <service.icon className={`h-8 w-8 ${colors.text}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className={`h-5 w-5 ${colors.text} mr-3 flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`mt-6 ${colors.text} font-semibold flex items-center hover:opacity-80 transition-opacity`}>
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for diverse industry requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center h-12 w-12 bg-blue-100 rounded-xl">
                      <industry.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                    <p className="text-gray-600 mb-4">{industry.description}</p>
                    <div className="space-y-2">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Simple, efficient process from investigation to resolution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Data Collection', description: 'Input wallet addresses or transaction hashes for analysis' },
              { step: '02', title: 'Analysis', description: 'Our AI-powered engine analyzes transaction patterns and connections' },
              { step: '03', title: 'Visualization', description: 'View results through interactive charts and network graphs' },
              { step: '04', title: 'Reporting', description: 'Generate comprehensive reports for compliance or legal use' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-600 text-white text-xl font-bold rounded-full mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Contact our team to discuss your specific requirements and see how ChainTrace 
            can enhance your blockchain investigation capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;