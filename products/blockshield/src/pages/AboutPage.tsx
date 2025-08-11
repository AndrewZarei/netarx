import React from 'react';
import { Shield, Users, Award, Globe, Target, Heart, Brain, Zap, Activity } from 'lucide-react';


const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Organizations Trust Us', icon: Users },
    { number: '99.9%', label: 'Platform Uptime', icon: Shield },
    { number: '1M+', label: 'Transactions Analyzed Daily', icon: Activity },
    { number: '50+', label: 'Countries Served', icon: Globe }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize the highest standards of security and privacy in all our operations.'
    },
    {
      icon: Brain,
      title: 'Innovation',
      description: 'Continuously pushing the boundaries of blockchain analytics and forensic technology.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Operating with transparency and ethical principles in every aspect of our business.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Delivering accurate, actionable insights that our clients can trust and rely upon.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Former blockchain engineer at major crypto exchange with 10+ years in fintech.',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'PhD in Computer Science, specializing in distributed systems and blockchain technology.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Compliance',
      bio: 'Former regulatory advisor with extensive experience in AML and financial crime prevention.',
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Kim',
      role: 'Lead Security Researcher',
      bio: 'Cybersecurity expert with focus on blockchain forensics and digital asset investigation.',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              About <span className="text-blue-600">ChainTrace</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We're pioneering the future of blockchain forensics, empowering organizations worldwide 
              with the tools they need to investigate, analyze, and secure digital assets.
            </p>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full">
              <Award className="h-5 w-5 mr-2" />
              Founded in 2020 • Trusted by Industry Leaders
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-2xl mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At ChainTrace, we believe that transparency and security are fundamental to the future 
                of digital finance. Our mission is to provide the most advanced blockchain forensics 
                platform that enables organizations to investigate, monitor, and secure cryptocurrency transactions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We're committed to supporting law enforcement agencies, compliance teams, and financial 
                institutions in their fight against financial crime while fostering trust in the 
                cryptocurrency ecosystem.
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                <Zap className="h-5 w-5 mr-2" />
                Securing the future of digital finance
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 opacity-20"></div>
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working on blockchain analysis"
                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center h-16 w-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-600 transition-colors">
                  <value.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Experts in blockchain technology, security, and compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-center mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Ready to be part of the team that's shaping the future of blockchain security?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              View Open Positions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;