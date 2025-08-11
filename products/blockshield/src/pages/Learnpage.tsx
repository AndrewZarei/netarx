import React from 'react';
import { AlertTriangle, ShieldAlert, Users, Zap, ArrowUpRight, HandCoins, BadgeDollarSign, Scale, Banknote, PieChart, TrendingUp, ChevronDown } from 'lucide-react';

const ScamEducationPage: React.FC = () => {
  const warningSigns = [
    {
      icon: TrendingUp,
      title: 'Unusually High Guaranteed Returns',
      description: 'Promises of exceptionally high returns (e.g., 20% monthly) with no clear explanation of the revenue model'
    },
    {
      icon: Users,
      title: 'Focus on Recruitment',
      description: 'Primary income comes from recruiting new members rather than selling actual products/services'
    },
    {
      icon: PieChart,
      title: 'Lack of Financial Transparency',
      description: 'No clear information about how the business actually generates revenue'
    },
    {
      icon: HandCoins,
      title: 'Unusual Reward Structure',
      description: 'Higher rewards for recruiting others compared to the core business activity'
    }
  ];

  const pyramidVsLegit = [
    {
      aspect: 'Revenue Source',
      pyramid: 'From new members\' investments',
      legitimate: 'From actual product/service sales'
    },
    {
      aspect: 'Primary Focus',
      pyramid: 'On recruiting new members',
      legitimate: 'On product/service quality'
    },
    {
      aspect: 'Profitability',
      pyramid: 'Extremely high guaranteed returns',
      legitimate: 'Reasonable market-aligned returns'
    },
    {
      aspect: 'Longevity',
      pyramid: 'Short-term (until recruitment dries up)',
      legitimate: 'Long-term and sustainable'
    }
  ];

  const preventionTips = [
    {
      title: 'Do Your Research',
      description: 'Thoroughly investigate the company and its founders before investing.'
    },
    {
      title: 'Be Skeptical of Unrealistic Returns',
      description: 'If returns seem too good to be true, they probably are.'
    },
    {
      title: 'Examine the Revenue Model',
      description: 'Determine whether income comes from product sales or new member recruitment.'
    },
    {
      title: 'Consult a Financial Advisor',
      description: 'Seek advice from an independent financial professional before major investments.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-3 rounded-full mb-6">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Scam Alert
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
              Guide to Identifying and Avoiding <span className="text-blue-600">Pyramid & Ponzi Schemes</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Learn how to recognize fraudulent investment schemes and protect yourself from becoming a victim.
            </p>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Red Flags of Pyramid & Ponzi Schemes</h2>
            <p className="text-xl text-gray-600">
              If you see these warning signs, proceed with extreme caution!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {warningSigns.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow group">
                <div className="inline-flex items-center justify-center h-12 w-12 bg-blue-100 rounded-2xl mb-4 group-hover:bg-blue-600 transition-colors">
                  <item.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pyramid vs Legitimate Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pyramid Schemes vs. Legitimate Businesses</h2>
            <p className="text-xl text-gray-600">
              How to tell the difference?
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-b border-gray-200">
              <div className="p-4 bg-gray-100 font-bold text-gray-700">Aspect</div>
              <div className="p-4 bg-blue-50 font-bold text-blue-700">Pyramid/Ponzi Scheme</div>
              <div className="p-4 bg-green-50 font-bold text-green-700">Legitimate Business</div>
              <div className="p-4 bg-gray-100 font-bold text-gray-700">Explanation</div>
            </div>
            
            {pyramidVsLegit.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-0 border-b border-gray-200 hover:bg-gray-50">
                <div className="p-4 font-medium text-gray-900">{item.aspect}</div>
                <div className="p-4 text-blue-600">{item.pyramid}</div>
                <div className="p-4 text-green-600">{item.legitimate}</div>
                <div className="p-4 text-sm text-gray-600">
                  {index === 0 && 'Where does the company make most of its money?'}
                  {index === 1 && 'What is the company primarily focused on?'}
                  {index === 2 && 'What kind of returns are promised?'}
                  {index === 3 && 'How sustainable is the business model?'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Avoid Investment Scams</h2>
            <p className="text-xl text-gray-600">
              Protect yourself from becoming a victim
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {preventionTips.map((tip, index) => (
              <div key={index} className="group relative overflow-hidden bg-gray-50 rounded-2xl p-6 h-full hover:shadow-md transition-shadow">
                <div className="absolute -right-6 -top-6 h-16 w-16 bg-blue-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Examples Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Famous Pyramid & Ponzi Schemes</h2>
            <p className="text-xl text-gray-600">
              Some of the most notorious investment scams in history
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                <BadgeDollarSign className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bernie Madoff</h3>
                <p className="text-gray-600 mb-4">Largest Ponzi scheme in history ($65 billion)</p>
                <div className="flex items-center text-blue-600 font-medium text-sm">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  Learn more
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Scale className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">OneCoin</h3>
                <p className="text-gray-600 mb-4">Cryptocurrency pyramid scheme that fooled millions</p>
                <div className="flex items-center text-blue-600 font-medium text-sm">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  Learn more
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                <Banknote className="h-16 w-16 text-white opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Zeek Rewards</h3>
                <p className="text-gray-600 mb-4">$850 million penny auction Ponzi scheme</p>
                <div className="flex items-center text-blue-600 font-medium text-sm">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  Learn more
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Suspect a scam?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            If you believe you've encountered a pyramid or Ponzi scheme, you can report it to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Report Scam
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScamEducationPage;