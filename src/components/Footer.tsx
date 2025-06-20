
import React from 'react';
import { Rocket, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './common/Logo';

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'Resources', path: '/resources' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dharshan-sondi-6a389a34a/',
    icon: Linkedin,
    external: true
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Mail,
    external: false
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <Logo size="small" />
            <p className="text-purple-100 text-sm">
              Empowering young innovators with curated resources and opportunities.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="block text-purple-200 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const linkClass = "p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300";
                
                return social.external ? (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                ) : (
                  <Link
                    key={social.name}
                    to={social.href}
                    className={linkClass}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-purple-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-purple-100">
              <Rocket size={20} className="text-yellow-400" />
              <span className="font-medium">Launching dreams into reality</span>
            </div>
            <div className="text-purple-200 text-sm">
              © 2025 IgniteHub. Sondi Dharshan. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
