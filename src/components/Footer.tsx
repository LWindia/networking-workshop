import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Heart, Github, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/linuxworld', color: 'hover:text-gray-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/linuxworld', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/linuxworld', color: 'hover:text-blue-600' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/linuxworld', color: 'hover:text-red-500' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/linuxworld', color: 'hover:text-pink-500' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#course' },
    { name: 'Mentors', href: '#mentor' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'support@lwindia.com', href: 'mailto:support@lwindia.com' },
    { icon: Phone, text: '+91 9772201449', href: 'tel:+919772201449' },
    { icon: MapPin, text: 'Bangalore, India', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img src="/images/LW@4x1.png" alt="LinuxWorld" className="h-10 w-auto object-contain" />
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Empowering developers and IT professionals with world-class training programs. 
                Master cutting-edge technologies with industry experts.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <nav className="space-y-3" role="navigation" aria-label="Footer navigation">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                  >
                    <contact.icon className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform duration-300" />
                    <span>{contact.text}</span>
                    {contact.href.startsWith('http') && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup removed per request */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-white/60">
                <span> {currentYear} LinuxWorld. Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>in India</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-white/60">
                <a href="/privacy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="/cookies" className="hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
