"use client";

import React, { useState, useEffect } from "react";
import { Users, FileDown, Search, ArrowLeft, Trash2, Award, BookOpen, Star, RefreshCw, X, ShieldCheck, HelpCircle } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Submission {
  id: string;
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  collegeName: string;
  course: string;
  branchSpecialization: string;
  passoutYear: string;
  areaOfInterest: string;
  currentSkillLevel: string;
  completedInternship: string;
  howDidYouHear: string;
  idCardImage?: string;
  idCardVerified?: boolean;
  createdAt: string;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("All");
  
  // Modal State for viewing student ID Card
  const [viewingID, setViewingID] = useState<{ studentName: string; image: string } | null>(null);

  const loadSubmissions = () => {
    setLoading(true);
    try {
      const data = localStorage.getItem("future_tech_scholarship_submissions");
      if (data) {
        setSubmissions(JSON.parse(data));
      } else {
        setSubmissions([]);
      }
    } catch (err) {
      console.error("Failed to read from localStorage:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  // Filter Submissions
  const filteredSubmissions = submissions.filter((sub) => {
    const matchesSearch =
      sub.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.emailAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.collegeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCourse = selectedCourse === "All" || sub.course === selectedCourse;
    
    return matchesSearch && matchesCourse;
  });

  // Export to CSV Function
  const exportToCSV = () => {
    if (filteredSubmissions.length === 0) return;

    const headers = [
      "Application ID",
      "Full Name",
      "Email Address",
      "Mobile Number",
      "College Name",
      "Course",
      "Branch/Specialization",
      "Passout Year",
      "Area of Interest",
      "Skill Level",
      "Completed Internship",
      "ID Card Verified?",
      "Source",
      "Applied Date",
    ];

    const rows = filteredSubmissions.map((sub) => [
      sub.id,
      `"${sub.fullName.replace(/"/g, '""')}"`,
      sub.emailAddress,
      sub.mobileNumber,
      `"${sub.collegeName.replace(/"/g, '""')}"`,
      sub.course,
      `"${sub.branchSpecialization.replace(/"/g, '""')}"`,
      sub.passoutYear,
      sub.areaOfInterest,
      sub.currentSkillLevel,
      sub.completedInternship,
      sub.idCardVerified ? "Yes (2026)" : "No",
      sub.howDidYouHear,
      new Date(sub.createdAt).toLocaleString(),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `future_tech_scholarship_submissions_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Clear Submissions
  const clearAllSubmissions = () => {
    if (confirm("Are you sure you want to clear all registrations? This cannot be undone.")) {
      localStorage.removeItem("future_tech_scholarship_submissions");
      setSubmissions([]);
    }
  };

  // Metrics calculations
  const totalCount = submissions.length;
  const internshipCount = submissions.filter((s) => s.completedInternship === "Yes").length;
  const verifiedCount = submissions.filter((s) => s.idCardVerified).length;
  const confusedCount = submissions.filter((s) => s.areaOfInterest === "Confused? Speak to Counsellor").length;
  
  // Get most popular Area of Interest
  const interestMap: { [key: string]: number } = {};
  submissions.forEach((s) => {
    interestMap[s.areaOfInterest] = (interestMap[s.areaOfInterest] || 0) + 1;
  });
  let popularInterest = "N/A";
  let maxInterestCount = 0;
  Object.keys(interestMap).forEach((k) => {
    if (interestMap[k] > maxInterestCount) {
      maxInterestCount = interestMap[k];
      popularInterest = k;
    }
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-purple-500/30 py-8 px-4 sm:px-6 lg:px-8">
      {/* Universal Mesh Background */}
      <div className="mesh-bg" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Header Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-900 pb-6">
          <div className="space-y-1">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Landing Page
            </Link>
            <div className="flex items-center gap-3">
              <img src="/logo/codemeLogo.png" alt="CodeMe Hub Logo" className="w-10 h-10 object-cover rounded-full border border-zinc-800/80 shadow-md shadow-purple-500/10 shrink-0" />
              <h1 className="text-2xl font-extrabold text-white border-l border-zinc-800 pl-3">Admissions Dashboard</h1>
            </div>
            <p className="text-xs text-zinc-500">CodeMe Hub Scholarship 2026 Admin Portal (Simulation)</p>
          </div>

          <div className="flex flex-wrap gap-3 w-full sm:w-auto">
            <button
              onClick={loadSubmissions}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-all cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Refresh
            </button>
            <button
              onClick={exportToCSV}
              disabled={filteredSubmissions.length === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-95 transition-all shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FileDown className="w-3.5 h-3.5" /> Export CSV
            </button>
            {submissions.length > 0 && (
              <button
                onClick={clearAllSubmissions}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-red-400 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" /> Reset Data
              </button>
            )}
          </div>
        </div>

        {/* Metrics Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="glass-panel p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Total Submissions</span>
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-3xl font-extrabold text-white">{totalCount}</p>
            <p className="text-[10px] text-zinc-500 mt-2">All graduating students of 2026</p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">With Internship</span>
              <BookOpen className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-3xl font-extrabold text-white">{internshipCount}</p>
            <p className="text-[10px] text-zinc-500 mt-2">
              {totalCount > 0 ? `${Math.round((internshipCount / totalCount) * 100)}%` : "0%"} of total registered
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">ID Verified (2026)</span>
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-3xl font-extrabold text-white">{verifiedCount}</p>
            <p className="text-[10px] text-zinc-500 mt-2">
              {totalCount > 0 ? `${Math.round((verifiedCount / totalCount) * 100)}%` : "0%"} of registered entries
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-panel p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-semibold">Popular Interest</span>
              <Star className="w-5 h-5 text-amber-400" />
            </div>
            <p className="text-lg font-bold text-white truncate">{popularInterest}</p>
            <p className="text-[10px] text-zinc-500 mt-2 flex items-center justify-between">
              <span>Most selected area</span>
              {confusedCount > 0 && (
                <span className="text-amber-400 font-extrabold bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 text-[9px] animate-pulse">
                  ⚠️ {confusedCount} Counselling
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch bg-zinc-900/40 border border-zinc-900 p-4 rounded-2xl">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Name, Email, College, Application ID..."
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          {/* Course Dropdown */}
          <div className="w-full sm:w-[200px]">
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full px-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
            >
              <option value="All">All Courses</option>
              <option value="B.Tech">B.Tech</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="BSc Computer Science">BSc Comp Sci</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Submissions Table / List */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center gap-3 text-zinc-500">
              <RefreshCw className="w-8 h-8 animate-spin text-purple-500" />
              <span>Loading registered applications...</span>
            </div>
          ) : filteredSubmissions.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-500">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">No registrations match your search</h3>
              <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
                Try adjusting your search keywords, course filter, or submit some test data from the landing page.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-900 bg-zinc-900/30 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    <th className="py-4 px-6">App ID</th>
                    <th className="py-4 px-6">Name</th>
                    <th className="py-4 px-6">Contact</th>
                    <th className="py-4 px-6">College / Stream</th>
                    <th className="py-4 px-6">Interest / Skill</th>
                    <th className="py-4 px-6 text-center">ID Verification</th>
                    <th className="py-4 px-6 text-center">Internship?</th>
                    <th className="py-4 px-6">Applied On</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900 text-xs text-zinc-300">
                  {filteredSubmissions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-zinc-900/30 transition-colors">
                      <td className="py-4 px-6 font-mono font-bold text-purple-400">{sub.id}</td>
                      <td className="py-4 px-6">
                        <span className="font-bold text-white block">{sub.fullName}</span>
                      </td>
                      <td className="py-4 px-6 space-y-0.5">
                        <span className="block text-zinc-400">{sub.emailAddress}</span>
                        <span className="block text-[10px] text-zinc-500">{sub.mobileNumber}</span>
                      </td>
                      <td className="py-4 px-6 max-w-[220px]">
                        <span className="block text-white truncate" title={sub.collegeName}>
                          {sub.collegeName}
                        </span>
                        <span className="block text-[10px] text-zinc-500 truncate">
                          {sub.course} — {sub.branchSpecialization} (Class of {sub.passoutYear})
                        </span>
                      </td>
                      <td className="py-4 px-6 space-y-1">
                        {sub.areaOfInterest === "Confused? Speak to Counsellor" ? (
                          <span className="inline-block px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/20 font-bold text-[10px] animate-pulse">
                            ⚠️ Counselling Required
                          </span>
                        ) : (
                          <span className="inline-block px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-semibold text-[10px]">
                            {sub.areaOfInterest}
                          </span>
                        )}
                        <span className="block text-[10px] text-zinc-500 font-medium pl-1">
                          Level: {sub.currentSkillLevel}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        {sub.idCardVerified ? (
                          <div className="flex flex-col items-center gap-1.5">
                            <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold text-[9px]">
                              Verified (2026)
                            </span>
                            {sub.idCardImage && (
                              <button
                                type="button"
                                onClick={() => setViewingID({ studentName: sub.fullName, image: sub.idCardImage! })}
                                className="text-[9px] text-purple-400 hover:text-purple-300 underline cursor-pointer"
                              >
                                View ID Card
                              </button>
                            )}
                          </div>
                        ) : (
                          <span className="inline-block px-2 py-0.5 rounded bg-zinc-800 text-zinc-500 font-semibold text-[9px]">
                            Not Verified
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span
                          className={`inline-block px-2 py-0.5 rounded font-semibold text-[10px] ${
                            sub.completedInternship === "Yes"
                              ? "bg-green-500/10 text-green-400"
                              : "bg-zinc-800 text-zinc-500"
                          }`}
                        >
                          {sub.completedInternship}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-zinc-500 font-mono text-[10px]">
                        {new Date(sub.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      {/* ID CARD PREVIEW MODAL */}
      <AnimatePresence>
        {viewingID && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-zinc-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel w-full max-w-md p-6 rounded-3xl relative flex flex-col items-center shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setViewingID(null)}
                className="absolute top-4 right-4 p-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-4 self-start">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="text-sm font-bold text-white">Verified Student ID — {viewingID.studentName}</h3>
              </div>

              <div className="w-full aspect-[8/5] rounded-xl border border-zinc-800 overflow-hidden bg-zinc-900/50 flex items-center justify-center p-2 mb-2">
                <img
                  src={viewingID.image}
                  alt="Student ID card preview"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[10px] text-zinc-500 font-mono leading-relaxed mt-2 text-center">
                OCR verified graduation target: Class of 2026.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
