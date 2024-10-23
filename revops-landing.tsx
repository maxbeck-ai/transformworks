import React from 'react';
import { ArrowRight, BarChart3, Target, DollarSign, Users, LineChart, Check } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      title: "Revenue Pipeline Management",
      description: "Our team manages your entire sales pipeline, from lead scoring to close.",
      icon: Target,
      benefits: ["Dedicated RevOps manager", "Custom pipeline setup", "Weekly optimization reviews"]
    },
    {
      title: "Pricing & Contract Intelligence",
      description: "Expert-led pricing strategy and contract optimization service.",
      icon: DollarSign,
      benefits: ["Monthly pricing analysis", "Contract template creation", "Negotiation support"]
    },
    {
      title: "Performance Analytics",
      description: "Full-service analytics team providing insights and recommendations.",
      icon: BarChart3,
      benefits: ["Custom dashboard creation", "Monthly performance reviews", "Growth recommendations"]
    },
    {
      title: "Customer Success Metrics",
      description: "Proactive customer health monitoring and success planning.",
      icon: Users,
      benefits: ["Health score monitoring", "Intervention planning", "Success playbooks"]
    },
    {
      title: "Market Intelligence",
      description: "Ongoing market analysis and competitive intelligence reporting.",
      icon: LineChart,
      benefits: ["Quarterly market reports", "Competitor tracking", "Trend analysis"]
    }
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Assessment",
      description: "Our team analyzes your current revenue operations and identifies opportunities."
    },
    {
      step: 2,
      title: "Custom Strategy Development",
      description: "We create a tailored RevOps strategy aligned with your business goals."
    },
    {
      step: 3,
      title: "Implementation & Integration",
      description: "Our experts implement tools, processes, and workflows."
    },
    {
      step: 4,
      title: "Ongoing Management",
      description: "Dedicated team manages your RevOps, providing regular updates and optimizations."
    }
  ];

  const plans = [
    {
      name: "Growth",
      price: "2,999",
      description: "For growing companies ready to optimize their revenue operations",
      features: [
        "Dedicated RevOps Manager",
        "Basic Pipeline Management",
        "Monthly Performance Analytics",
        "Email & Chat Support",
        "Quarterly Strategy Reviews",
        "Up to 3 Sales Tools Integration"
      ]
    },
    {
      name: "Scale",
      price: "4,999",
      description: "For scaling companies needing comprehensive RevOps support",
      features: [
        "Everything in Growth, plus:",
        "Advanced Pipeline Optimization",
        "Weekly Performance Analytics",
        "Priority Support",
        "Monthly Strategy Reviews",
        "Up to 7 Sales Tools Integration",
        "Custom Workflow Automation",
        "Competitor Tracking"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations requiring full-service RevOps transformation",
      features: [
        "Everything in Scale, plus:",
        "Multiple RevOps Managers",
        "Daily Performance Analytics",
        "24/7 Priority Support",
        "Weekly Strategy Reviews",
        "Unlimited Tool Integrations",
        "Custom AI Models",
        "Dedicated Analytics Team"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
          Your Fully-Managed Revenue Operations Team
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Skip building an in-house RevOps team. Get a dedicated team of experts managing your entire revenue operations stack, from strategy to execution.
        </p>
        <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
          Schedule a Discovery Call
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Full-Stack Service Offering</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-16">
              {process.map((step, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1 md:w-1/2 p-6">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-lg ${plan.popular ? 'border-2 border-blue-600 shadow-xl' : 'border border-gray-200 shadow-lg'} p-6`}>
                {plan.popular && (
                  <div className="absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600">/month</span>}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-md font-medium ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Revenue Operations Excellence?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading companies who have transformed their revenue operations with our managed service.
          </p>
          <button className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors duration-300">
            Schedule Your Discovery Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
