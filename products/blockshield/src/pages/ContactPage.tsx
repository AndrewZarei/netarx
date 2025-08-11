import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Headphones } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@chaintrace.com',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak directly with our support team'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Financial District, San Francisco, CA 94111',
      description: 'Schedule an in-person meeting at our headquarters'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM PST',
      description: 'We\'re here to help during business hours'
    }
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: 'Technical Support',
      description: 'Get help with platform usage, API integration, and troubleshooting',
      action: 'Open Support Ticket'
    },
    {
      icon: Users,
      title: 'Sales Inquiry',
      description: 'Learn about our pricing, features, and enterprise solutions',
      action: 'Talk to Sales'
    },
    {
      icon: Headphones,
      title: 'Customer Success',
      description: 'Optimize your workflow and get the most out of ChainTrace',
      action: 'Schedule Call'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Have questions about our blockchain forensics platform? Need technical support? 
            Want to schedule a demo? We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="demo">Request Demo</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your requirements, questions, or how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center h-12 w-12 bg-blue-100 rounded-xl">
                          <info.icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-blue-600 font-medium mb-1">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Ways to Get Help</h2>
            <p className="text-xl text-gray-600">
              Choose the support option that best fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-2xl mb-6">
                  <option.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{option.description}</p>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'How quickly can I get started with ChainTrace?',
                answer: 'Most clients can begin using our platform within 24-48 hours after initial consultation. Enterprise deployments typically take 1-2 weeks.'
              },
              {
                question: 'What blockchains does ChainTrace support?',
                answer: 'We support Bitcoin, Ethereum, Binance Smart Chain, Solana, Tron, and many other major blockchain networks, with new additions regularly.'
              },
              {
                question: 'Is my data secure with ChainTrace?',
                answer: 'Yes, we employ enterprise-grade security measures including end-to-end encryption, secure data storage, and strict access controls.'
              },
              {
                question: 'Do you offer training for new users?',
                answer: 'Absolutely! We provide comprehensive onboarding, training sessions, and ongoing support to ensure you get maximum value from our platform.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;