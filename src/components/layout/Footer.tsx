import React from "react";
import { Mail, Phone, MapPin, Award } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function Footer() {
  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/codeme-hub/posts/?feedView=all", icon: LinkedinIcon },
    { name: "Instagram", href: "https://www.instagram.com/codemehub/", icon: InstagramIcon },
    { name: "Facebook", href: "https://www.facebook.com/codemehubfortechlearning/", icon: FacebookIcon },
    { name: "YouTube", href: "https://www.youtube.com/channel/UCsKHxfMwtyV2ZLPlOxa15tQ", icon: YoutubeIcon },
  ];

  const quickLinks = [
    { name: "Benefits", href: "#benefits" },
    { name: "Eligibility", href: "#eligibility" },
    { name: "About Us", href: "#about" },
    { name: "Why Apply", href: "#why-apply" },
    { name: "FAQ", href: "#faq" },
  ];

  const courses = [
    { name: "Python Full Stack Development" },
    { name: "MERN Stack Development" },
    { name: "Flutter App Development" },
    { name: "Data Science & Analytics" },
    { name: "UI/UX Designing" },
  ];

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo/codemeLogo.png" alt="CodeMe Hub Logo" className="w-10 h-10 object-cover rounded-full border border-zinc-800/80 shadow-md shadow-purple-500/10 shrink-0" />
              <span className="text-xl font-bold text-white">
                CodeMe<span className="text-purple-400"> Hub</span>
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              CodeMe Hub of Tech Learning offers industry-aligned software engineering bootcamps, hands-on developer training, and 100% job placement assistance in Calicut.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-zinc-800/50 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
{/* Contact Page Link */}
<div>
  <a
    href="/contact"
    className="text-sm font-semibold text-white tracking-wider uppercase mb-5 hover:text-purple-400 transition-colors duration-200"
  >
    Contact
  </a>
</div>
          {/* Training Programs */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Programs
            </h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <span className="text-sm text-zinc-400">
                    {course.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-400 leading-relaxed">
                  7th Floor, Door No. 1709, Tower 1, HiLITE Business Park, HiLITE City, Calicut, Kerala - 673014
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="flex flex-col text-sm text-zinc-400">
                  <a
                    href="tel:+918086740111"
                    className="hover:text-white transition-colors"
                  >
                    +91 80867 40111
                  </a>
                  <a
                    href="tel:+916235035900"
                    className="text-xs text-zinc-500 hover:text-white transition-colors"
                  >
                    +91 62350 35900
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400 shrink-0" />
                <a
                  href="mailto:info@codemehub.com"
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  info@codemehub.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} CodeMe Hub of Tech Learning. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-zinc-500 hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-zinc-500 hover:text-zinc-400 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
