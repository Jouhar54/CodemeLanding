import React from 'react';

export default function PrivacyPolicy() {
  const lastUpdated = "October 10, 2026";
  const companyName = "CodeMe"; // Update to your exact registered brand name
  const companyLocation = "Calicut, Kerala, India";
  const contactEmail = "info@codeme.in"; // Replace with your actual email

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-slate-800 dark:text-slate-200">
      <header className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Last Updated: {lastUpdated}
        </p>
      </header>

      <section className="space-y-8 text-base leading-relaxed">
        <div>
          <p>
            At <strong>{companyName}</strong>, based in {companyLocation}, we respect your privacy and are committed to protecting the personal information you share with us through our website and services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
            1. Information We Collect
          </h2>
          <p className="mb-2">We collect information to provide better IT services, respond to inquiries, and build custom solutions for our clients:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, and company name when you fill out contact forms or request project estimates.
            </li>
            <li>
              <strong>Project & Technical Briefs:</strong> Ideas, specifications, and business requirements submitted for custom software or consulting engagements.
            </li>
            <li>
              <strong>Usage Data & Analytics:</strong> IP address, browser type, device details, and page views via standard analytics tools to improve site functionality.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To evaluate project inquiries and provide software development services.</li>
            <li>To communicate updates, proposals, invoices, and technical support.</li>
            <li>To optimize site performance and improve user experience.</li>
            <li>To comply with legal obligations under applicable Indian privacy and IT laws.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
            3. Data Confidentiality & Sharing
          </h2>
          <p className="mb-2">
            We do <strong>not</strong> sell, rent, or trade your personal or project data to third parties.
          </p>
          <p>
            Information may only be shared with trusted third-party service providers (e.g., cloud hosting, transactional email providers) necessary to operate our website and services, under strict non-disclosure agreements.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
            4. Cookies and Tracking
          </h2>
          <p>
            Our website may use essential cookies and basic analytics scripts to enhance navigation and understand user traffic. You can disable cookies directly through your browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
            5. Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
            6. Your Rights
          </h2>
          <p>
            You have the right to request access to, correction of, or deletion of any personal information we hold about you. Contact us at <a href={`mailto:${contactEmail}`} className="text-blue-600 dark:text-blue-400 underline">{contactEmail}</a> to submit a request.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
            7. Contact Us
          </h2>
          <p className="mb-2">If you have questions regarding this Privacy Policy or our data practices, please get in touch:</p>
          <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
            <p className="font-semibold text-slate-900 dark:text-white">{companyName}</p>
            <p className="text-sm">Calicut, Kerala, India</p>
            <p className="text-sm">Email: <a href={`mailto:${contactEmail}`} className="text-blue-600 dark:text-blue-400 underline">{contactEmail}</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
