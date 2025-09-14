import React from 'react';
import { CheckCircle, Clock, Users, Award, BookOpen, Code, Database, Network, Shield, Zap } from 'lucide-react';
import { useAdvancedScrollAnimation } from '../hooks/useScrollAnimation';

const CourseContent: React.FC = () => {
  const { isVisible: headerVisible, elementRef: headerRef } = useAdvancedScrollAnimation<HTMLDivElement>('fadeInUp');
  const { isVisible: contentVisible, elementRef: contentRef } = useAdvancedScrollAnimation<HTMLDivElement>('fadeInUp');

  const modules = [
    {
      id: 1,
      title: "Networking Fundamentals",
      topics: [
        "OSI Model Deep Dive",
        "TCP/IP Protocol Suite",
        "Network Topologies",
        "Ethernet Standards"
      ],
      icon: Network,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "IP Addressing & Subnetting",
      topics: [
        "IPv4 Address Structure",
        "Subnet Masks & CIDR",
        "Subnetting Techniques",
        "VLSM (Variable Length Subnet Masking)"
      ],
      icon: Code,
      color: "from-violet-500 to-purple-500"
    },
    {
      id: 3,
      title: "Routing & Switching",
      topics: [
        "Static vs Dynamic Routing",
        "Routing Protocols (RIP, OSPF, BGP)",
        "Switch Configuration",
        "VLAN Implementation"
      ],
      icon: Database,
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      title: "NAT & Security",
      topics: [
        "Network Address Translation",
        "Firewall Configuration",
        "VPN Implementation",
        "Network Security Best Practices"
      ],
      icon: Shield,
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "3 Hours Each Day",
      description: "Balanced 2-day format for better retention"
    },
    {
      icon: Users,
      title: "Live Interaction",
      description: "Direct Q&A with Vimal Daga"
    },
    {
      icon: Award,
      title: "Certificate",
      description: "Industry-recognized completion certificate"
    },
    {
      icon: BookOpen,
      title: "Hands-on Labs",
      description: "Practical exercises and real scenarios"
    }
  ];

  return (
    <section id="course" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-6 py-3 mb-8">
            <BookOpen className="w-5 h-5 text-violet-400" />
            <span className="text-violet-300 font-bold text-lg">COMPREHENSIVE CURRICULUM</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            What You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Learn</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Master networking from fundamentals to advanced concepts in a single intensive session
          </p>
        </div>

        {/* Course Modules */}
        <div 
          ref={contentRef}
          className={`transform transition-all duration-1000 ${
            contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300 mb-4">
                      {module.title}
                    </h3>
                    
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center space-x-3 text-white/70 group-hover:text-white transition-colors duration-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Course Features */}
          <div className="bg-gradient-to-r from-violet-600/10 to-purple-600/10 border border-violet-500/20 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Training Highlights</h3>
              <p className="text-white/60 text-lg">Everything you need for networking mastery</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-white/60 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-6 animate-pulse">
              <Zap className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-bold">LIMITED TIME OFFER</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Master Networking?
            </h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Join 500+ professionals who have already transformed their networking skills
            </p>
            
            <a href="https://rzp.io/rzp/epawaY9" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25">
              Reserve Your Spot Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
