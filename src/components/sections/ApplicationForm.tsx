"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Send, CheckCircle, Award, Loader2, Sparkles, Upload, Camera, ShieldCheck, FileImage, X, AlertCircle, HelpCircle, PhoneCall, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormValues {
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
}

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [appId, setAppId] = useState("");

  // ID Card States
  const [idImage, setIdImage] = useState<string | null>(null);
  const [idName, setIdName] = useState<string>("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanLogs, setScanLogs] = useState<string[]>([]);
  const [idVerified, setIdVerified] = useState(false);
  const [showEligibilityModal, setShowEligibilityModal] = useState(false);
  const [eligibilityResult, setEligibilityResult] = useState<"eligible" | "ineligible" | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      course: "B.Tech",
      passoutYear: "2026",
      areaOfInterest: "MERN Stack",
      currentSkillLevel: "Beginner",
      completedInternship: "No",
      howDidYouHear: "LinkedIn",
    },
  });

  const watchedPassoutYear = watch("passoutYear");

  const mockIDCardSVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"><rect width="100%" height="100%" fill="%231e1b4b" rx="20" stroke="%234338ca" stroke-width="2"/><circle cx="80" cy="115" r="35" fill="%23312e81" stroke="%234f46e5" stroke-width="1.5"/><rect x="140" y="75" width="220" height="15" rx="5" fill="%23312e81"/><rect x="140" y="100" width="160" height="12" rx="4" fill="%23312e81"/><text x="140" y="145" fill="%23a78bfa" font-family="sans-serif" font-size="16" font-weight="bold">PASSOUT: 2026</text><text x="30" y="40" fill="%23ffffff" font-family="sans-serif" font-size="18" font-weight="bold">STUDENT CARD</text><rect x="30" y="195" width="340" height="25" rx="4" fill="%238b5cf6" fill-opacity="0.2"/><text x="40" y="212" fill="%23c084fc" font-family="sans-serif" font-size="10" font-weight="bold">CODEME HUB OF TECH LEARNING</text></svg>`;

  // Handle File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIdName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setIdImage(reader.result as string);
        startScanning(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Simulate Camera Capture
  const simulateCapture = () => {
    setIdName("simulated_id_capture.png");
    setIdImage(mockIDCardSVG);
    startScanning(mockIDCardSVG);
  };

  // Run Scan Animation & Verification
  const startScanning = (imgData: string) => {
    setIsScanning(true);
    setScanProgress(0);
    setScanLogs([]);
    setIdVerified(false);

    const logs = [
      "[OCR AI] Initializing scanning core...",
      "[OCR AI] Capturing student identification boundaries...",
      "[OCR AI] Enhancing document contrast and text grids...",
      "[OCR AI] Analyzing text blocks (14 blocks detected)...",
      "[OCR AI] Scanning for academic timelines...",
      `[OCR AI] Found key indicators. Graduation batch: Class of ${watchedPassoutYear}`,
      "[OCR AI] Verifying status against 2026 eligibility matrix...",
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep += 1;
      setScanProgress(Math.min(currentStep * 15, 100));

      if (currentStep <= logs.length) {
        setScanLogs((prev) => [...prev, logs[currentStep - 1]]);
      }

      if (currentStep >= 7) {
        clearInterval(interval);
        setIsScanning(false);
        setScanProgress(100);

        // Check if graduation year matches 2026
        if (watchedPassoutYear === "2026") {
          setIdVerified(true);
          setEligibilityResult("eligible");
          setShowEligibilityModal(true);
        } else {
          setIdVerified(false);
          setEligibilityResult("ineligible");
          setShowEligibilityModal(true);
        }
      }
    }, 450);
  };

  const removeImage = () => {
    setIdImage(null);
    setIdName("");
    setIdVerified(false);
    setScanProgress(0);
    setScanLogs([]);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate simulated Application ID
    const randomId = `FT-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    setAppId(randomId);

    // Save submission to localStorage
    try {
      const existingSubmissions = localStorage.getItem("future_tech_scholarship_submissions");
      const list = existingSubmissions ? JSON.parse(existingSubmissions) : [];
      
      const newSubmission = {
        id: randomId,
        ...data,
        idCardImage: idImage || undefined,
        idCardVerified: idVerified,
        createdAt: new Date().toISOString(),
      };

      list.unshift(newSubmission);
      localStorage.setItem("future_tech_scholarship_submissions", JSON.stringify(list));
    } catch (err) {
      console.error("Failed to write to localStorage:", err);
    }

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setIdImage(null);
    setIdName("");
    setIdVerified(false);
    reset();
  };

  const courses = ["B.Tech", "BCA", "MCA", "BSc Computer Science", "Other"];
  const areas = [
    "MERN Stack",
    "Python/Django",
    "Flutter",
    "AI/ML",
    "Cyber Security",
    "Data Science",
    "UI/UX",
    "Confused? Speak to Counsellor",
  ];
  const skillLevels = ["Beginner", "Intermediate", "Advanced"];
  const internshipOptions = ["Yes", "No"];
  const sources = ["College", "Faculty", "Friend", "Instagram", "LinkedIn", "WhatsApp", "Other"];

  return (
    <section id="apply-form" className="relative py-24 border-t border-zinc-900 overflow-hidden">
      {/* Radial mesh background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent-purple/5 blur-[130px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-3">
            Registration
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Apply for Scholarship 2026
          </p>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4 rounded-full" />
          <p className="text-sm text-zinc-400 mt-4 max-w-lg mx-auto">
            Fill out the form below. Upload your Student ID to instantly check eligibility and qualify for fast-track screening.
          </p>
        </div>

        {/* Card Panel */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl relative">
          
          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* 2-Column Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="text-xs font-semibold text-zinc-400">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-white text-sm focus:outline-none focus:border-purple-500 transition-colors ${
                        errors.fullName ? "border-red-500/50" : "border-zinc-800"
                      }`}
                      placeholder="e.g. John Doe"
                      {...register("fullName", { required: "Full Name is required" })}
                    />
                    {errors.fullName && (
                      <span className="text-[10px] text-red-400 font-semibold">{errors.fullName.message}</span>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="mobileNumber" className="text-xs font-semibold text-zinc-400">
                      Mobile Number *
                    </label>
                    <input
                      id="mobileNumber"
                      type="tel"
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-white text-sm focus:outline-none focus:border-purple-500 transition-colors ${
                        errors.mobileNumber ? "border-red-500/50" : "border-zinc-800"
                      }`}
                      placeholder="e.g. 9876543210"
                      {...register("mobileNumber", {
                        required: "Mobile Number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Please enter a valid 10-digit mobile number",
                        },
                      })}
                    />
                    {errors.mobileNumber && (
                      <span className="text-[10px] text-red-400 font-semibold">{errors.mobileNumber.message}</span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="emailAddress" className="text-xs font-semibold text-zinc-400">
                      Email Address *
                    </label>
                    <input
                      id="emailAddress"
                      type="email"
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-white text-sm focus:outline-none focus:border-purple-500 transition-colors ${
                        errors.emailAddress ? "border-red-500/50" : "border-zinc-800"
                      }`}
                      placeholder="e.g. john@example.com"
                      {...register("emailAddress", {
                        required: "Email Address is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                    {errors.emailAddress && (
                      <span className="text-[10px] text-red-400 font-semibold">{errors.emailAddress.message}</span>
                    )}
                  </div>

                  {/* College Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="collegeName" className="text-xs font-semibold text-zinc-400">
                      College Name *
                    </label>
                    <input
                      id="collegeName"
                      type="text"
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-white text-sm focus:outline-none focus:border-purple-500 transition-colors ${
                        errors.collegeName ? "border-red-500/50" : "border-zinc-800"
                      }`}
                      placeholder="e.g. ABC Institute of Technology"
                      {...register("collegeName", { required: "College Name is required" })}
                    />
                    {errors.collegeName && (
                      <span className="text-[10px] text-red-400 font-semibold">{errors.collegeName.message}</span>
                    )}
                  </div>

                  {/* Branch / Specialization */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="branchSpecialization" className="text-xs font-semibold text-zinc-400">
                      Branch / Specialization *
                    </label>
                    <input
                      id="branchSpecialization"
                      type="text"
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-white text-sm focus:outline-none focus:border-purple-500 transition-colors ${
                        errors.branchSpecialization ? "border-red-500/50" : "border-zinc-800"
                      }`}
                      placeholder="e.g. Computer Science Engineering"
                      {...register("branchSpecialization", { required: "Branch is required" })}
                    />
                    {errors.branchSpecialization && (
                      <span className="text-[10px] text-red-400 font-semibold">{errors.branchSpecialization.message}</span>
                    )}
                  </div>

                  {/* Passout Year (Default: 2026) */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="passoutYear" className="text-xs font-semibold text-zinc-400">
                        Passout Year *
                      </label>
                      {idVerified && (
                        <span className="text-[9px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          ID Verified
                        </span>
                      )}
                    </div>
                    <input
                      id="passoutYear"
                      type="number"
                      disabled={idVerified}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                      placeholder="2026"
                      {...register("passoutYear", { required: "Passout year is required" })}
                    />
                  </div>

                </div>

                {/* Course Select */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-zinc-400">Course / Degree *</span>
                  <Controller
                    name="course"
                    control={control}
                    render={({ field }) => (
                      <div className="flex flex-wrap gap-2">
                        {courses.map((course) => {
                          const selected = field.value === course;
                          return (
                            <button
                              key={course}
                              type="button"
                              onClick={() => field.onChange(course)}
                              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer ${
                                selected
                                  ? "bg-purple-500/20 border-purple-500 text-white"
                                  : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white"
                              }`}
                            >
                              {course}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  />
                </div>

                {/* Area of Interest */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-zinc-400">Area of Interest *</span>
                  <Controller
                    name="areaOfInterest"
                    control={control}
                    render={({ field }) => (
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {areas.map((area) => {
                            const selected = field.value === area;
                            const isConfused = area === "Confused? Speak to Counsellor";
                            return (
                              <button
                                key={area}
                                type="button"
                                onClick={() => field.onChange(area)}
                                className={`px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                                  selected
                                    ? isConfused
                                      ? "bg-purple-600/25 border-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                                      : "bg-blue-500/20 border-blue-500 text-white"
                                    : isConfused
                                    ? "bg-purple-950/20 border-purple-900/60 text-purple-300 hover:border-purple-800 hover:bg-purple-950/30"
                                    : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white"
                                }`}
                              >
                                {isConfused && <HelpCircle className="w-3.5 h-3.5" />}
                                {area}
                              </button>
                            );
                          })}
                        </div>

                        {/* Free Counselling Offer Info Banner */}
                        <div className="mt-2">
                          <AnimatePresence mode="wait">
                            {field.value === "Confused? Speak to Counsellor" ? (
                              <motion.div
                                key="active-counselling"
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2 }}
                                className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-blue-950/40 border border-purple-500/35 shadow-[0_0_25px_rgba(139,92,246,0.15)] flex flex-col sm:flex-row items-start sm:items-center gap-4 relative overflow-hidden group"
                              >
                                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-100 rounded-2xl pointer-events-none" />
                                <div className="p-3 rounded-xl bg-purple-500/15 border border-purple-400/20 text-purple-300 shrink-0">
                                  <Gift className="w-5 h-5 text-purple-400 animate-bounce" />
                                </div>
                                <div className="flex-1 space-y-1 relative z-10">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-[9px] font-bold text-white bg-purple-500/30 border border-purple-400/40 px-2 py-0.5 rounded uppercase tracking-wider">
                                      Special Offer Activated
                                    </span>
                                    <span className="text-[10px] text-zinc-500 line-through">Worth ₹2,500</span>
                                    <span className="text-[10px] text-emerald-400 font-extrabold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                                      100% FREE
                                    </span>
                                  </div>
                                  <h4 className="text-xs font-bold text-white">Career Guidance Roadmap Call Scheduled</h4>
                                  <p className="text-[11px] text-zinc-300 leading-relaxed">
                                    Our senior IT career counselor from CodeMe Hub will call your mobile number to help you evaluate tech roadmaps (Full Stack vs. Data Science vs. Cybersecurity) based on your aptitude.
                                  </p>
                                </div>
                              </motion.div>
                            ) : (
                              <motion.div
                                key="inactive-counselling"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/60 text-zinc-400 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-3"
                              >
                                <div className="flex items-center gap-2">
                                  <HelpCircle className="w-4 h-4 text-purple-400 shrink-0" />
                                  <span>Unsure which technologies fit your future goals? Get professional advice.</span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => field.onChange("Confused? Speak to Counsellor")}
                                  className="text-purple-400 hover:text-purple-300 font-bold shrink-0 transition-colors flex items-center gap-1 cursor-pointer text-left self-start sm:self-auto"
                                >
                                  Claim Free Career Counselling
                                  <span className="text-[9px] bg-purple-500/15 text-purple-300 px-1.5 py-0.5 rounded border border-purple-500/30 font-bold">Free</span>
                                </button>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    )}
                  />
                </div>

                {/* ID Card Verification Section */}
                <div className="flex flex-col gap-3 p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-purple-400" />
                    <span className="text-sm font-bold text-white">Student ID Verification</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Upload your college ID card, or trigger simulated capture. Our AI models analyze graduation batch verification.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Dropzone */}
                    {!idImage ? (
                      <div className="flex flex-col gap-2">
                        <div className="relative border-2 border-dashed border-zinc-800 hover:border-purple-500/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 transition-colors duration-200 cursor-pointer bg-zinc-950/40 group">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                          />
                          <Upload className="w-6 h-6 text-zinc-500 group-hover:text-purple-400 transition-colors" />
                          <span className="text-xs font-semibold text-zinc-300">Upload ID Card Photo</span>
                          <span className="text-[10px] text-zinc-500">Supports PNG, JPG</span>
                        </div>
                        <button
                          type="button"
                          onClick={simulateCapture}
                          className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 text-zinc-300 hover:text-white transition-all cursor-pointer"
                        >
                          <Camera className="w-4 h-4 text-purple-400" />
                          Simulate Camera Capture
                        </button>
                      </div>
                    ) : (
                      /* Left Preview */
                      <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950/60 p-3 flex flex-col items-center justify-center min-h-[160px]">
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute top-2.5 right-2.5 p-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer z-10"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                        
                        <div className="relative w-full max-w-[200px] aspect-[8/5] rounded-lg overflow-hidden border border-zinc-800">
                          {/* Laser Scanning Line */}
                          {isScanning && (
                            <motion.div
                              animate={{ top: ["0%", "100%", "0%"] }}
                              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                              className="absolute left-0 right-0 h-1 bg-purple-500 shadow-[0_0_10px_#a855f7] z-20 pointer-events-none"
                            />
                          )}
                          <img
                            src={idImage}
                            alt="Student ID card preview"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-[10px] text-zinc-500 truncate max-w-[180px] mt-2 block font-mono">{idName}</span>
                      </div>
                    )}

                    {/* Right Scanning / Logs Console */}
                    <div className="flex flex-col rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-4 font-mono text-[9px] text-zinc-400 min-h-[160px] justify-between">
                      <div className="space-y-1.5 overflow-y-auto max-h-[120px] scrollbar-thin">
                        <span className="text-zinc-500 block text-[8px] uppercase tracking-wider font-semibold border-b border-zinc-900 pb-1.5 mb-2">
                          OCR Verification Console
                        </span>
                        
                        {scanLogs.length === 0 && (
                          <div className="flex flex-col items-center justify-center py-6 text-zinc-600 gap-1.5">
                            <ShieldCheck className="w-5 h-5 text-zinc-700" />
                            <span>Upload or capture to run verification.</span>
                          </div>
                        )}
                        
                        {scanLogs.map((log, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`${
                              log.includes("successful") || log.includes("Verified")
                                ? "text-emerald-400 font-bold"
                                : log.includes("Initializing")
                                ? "text-purple-400"
                                : "text-zinc-400"
                            }`}
                          >
                            {log}
                          </motion.div>
                        ))}
                      </div>

                      {/* Progress Bar */}
                      {isScanning && (
                        <div className="space-y-1 mt-2">
                          <div className="flex justify-between text-[8px] font-bold text-purple-400">
                            <span>SCANNING ID CARD DATA...</span>
                            <span>{scanProgress}%</span>
                          </div>
                          <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-purple-500"
                              style={{ width: `${scanProgress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Static verified state */}
                      {!isScanning && idVerified && (
                        <div className="flex items-center gap-1.5 text-emerald-400 font-bold mt-2 text-[10px]">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>ELIGIBILITY CONFIRMED (2026 Batch)</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Skill Level & Internship */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Skill Level */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-zinc-400">Current Skill Level *</span>
                    <Controller
                      name="currentSkillLevel"
                      control={control}
                      render={({ field }) => (
                        <div className="flex gap-2">
                          {skillLevels.map((lvl) => {
                            const selected = field.value === lvl;
                            return (
                              <button
                                key={lvl}
                                type="button"
                                onClick={() => field.onChange(lvl)}
                                className={`flex-1 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer text-center ${
                                  selected
                                    ? "bg-purple-500/20 border-purple-500 text-white"
                                    : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white"
                                }`}
                              >
                                {lvl}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    />
                  </div>

                  {/* Completed Internship */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-zinc-400">Completed any internship? *</span>
                    <Controller
                      name="completedInternship"
                      control={control}
                      render={({ field }) => (
                        <div className="flex gap-2">
                          {internshipOptions.map((opt) => {
                            const selected = field.value === opt;
                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => field.onChange(opt)}
                                className={`flex-1 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer text-center ${
                                  selected
                                    ? "bg-emerald-500/20 border-emerald-500 text-white"
                                    : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white"
                                }`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    />
                  </div>

                </div>

                {/* How did you hear */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-zinc-400">How did you hear about this scholarship? *</span>
                  <Controller
                    name="howDidYouHear"
                    control={control}
                    render={({ field }) => (
                      <div className="flex flex-wrap gap-2">
                        {sources.map((src) => {
                          const selected = field.value === src;
                          return (
                            <button
                              key={src}
                              type="button"
                              onClick={() => field.onChange(src)}
                              className={`px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer ${
                                selected
                                  ? "bg-purple-500/20 border-purple-500 text-white"
                                  : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white"
                              }`}
                            >
                              {src}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isScanning}
                  className="w-full relative flex items-center justify-center gap-2 group overflow-hidden px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-accent-blue to-accent-purple shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Apply for Scholarship
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

              </motion.form>
            ) : (
              // Success Panel
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.15 }}
                  className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-10 h-10" />
                </motion.div>

                <h3 className="text-2xl font-extrabold text-white mb-2">Application Submitted!</h3>
                <p className="text-purple-400 text-xs font-bold uppercase tracking-wider mb-6 flex items-center gap-1.5 justify-center">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Application ID: {appId}
                </p>

                <p className="text-sm text-zinc-400 max-w-md leading-relaxed mb-8">
                  Thank you for applying for the **CodeMe Hub Scholarship 2026**! Your details have been collected successfully. Our admissions and selection team will screen your response. Shortlisted candidates will be contacted via email/mobile with their assessment login credentials.
                </p>

                <div className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-5 mb-8 text-left space-y-2 text-xs">
                  <h4 className="font-bold text-white text-sm mb-3">Next Steps:</h4>
                  <div className="flex gap-2.5 text-zinc-400">
                    <span className="font-bold text-purple-400">1.</span>
                    <span>Check your email (including spam folder) for the confirmation slip.</span>
                  </div>
                  <div className="flex gap-2.5 text-zinc-400">
                    <span className="font-bold text-purple-400">2.</span>
                    <span>An online reasoning & basic coding link will be dispatched in 48 hours.</span>
                  </div>
                  <div className="flex gap-2.5 text-zinc-400">
                    <span className="font-bold text-purple-400">3.</span>
                    <span>Complete the assessment inside the given 3-day window.</span>
                  </div>
                </div>

                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-zinc-300 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all cursor-pointer"
                >
                  Submit Another Form
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

      {/* POPUP MODAL FOR ELIGIBILITY STATUS */}
      <AnimatePresence>
        {showEligibilityModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-zinc-950/80 backdrop-blur-md">
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-panel w-full max-w-md p-8 rounded-3xl relative overflow-hidden text-center shadow-2xl flex flex-col items-center"
            >
              {/* Confetti Animation Elements */}
              {eligibilityResult === "eligible" && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2.5 h-2.5 rounded-full"
                      style={{
                        backgroundColor: i % 2 === 0 ? "#8b5cf6" : "#3b82f6",
                        top: "50%",
                        left: "50%",
                      }}
                      animate={{
                        x: [0, (Math.random() - 0.5) * 300],
                        y: [0, (Math.random() - 0.5) * 300],
                        scale: [1, 0],
                        opacity: [1, 0],
                      }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                    />
                  ))}
                </div>
              )}

              {eligibilityResult === "eligible" ? (
                <>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 relative">
                    <CheckCircle className="w-8 h-8" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-purple-500 animate-ping opacity-75" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-extrabold text-white mb-2">Congratulations! 🎉</h3>
                  <p className="text-sm text-purple-400 font-bold tracking-widest uppercase mb-4">You are Eligible!</p>
                  
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    Our AI scanner analyzed your Student ID card and confirmed your graduation batch as the **Class of 2026**. You qualify for the direct assessment screening.
                  </p>

                  <button
                    type="button"
                    onClick={() => setShowEligibilityModal(false)}
                    className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-accent-blue to-accent-purple shadow-md cursor-pointer"
                  >
                    Continue Application
                  </button>
                </>
              ) : (
                <>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-6">
                    <AlertCircle className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-extrabold text-white mb-2">Notice of Eligibility</h3>
                  <p className="text-sm text-red-400 font-bold tracking-widest uppercase mb-4">Graduation Batch Mismatch</p>
                  
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    The CodeMe Hub Scholarship 2026 is exclusively designed for pre-final year students graduating in **2026**. The scanner detected your current input/card is set to **{watchedPassoutYear}**. 
                  </p>

                  <div className="flex gap-3 w-full">
                    <button
                      type="button"
                      onClick={() => {
                        setValue("passoutYear", "2026");
                        setShowEligibilityModal(false);
                        simulateCapture(); // Auto scan with 2026
                      }}
                      className="flex-1 py-3 rounded-xl font-bold text-white bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-xs cursor-pointer"
                    >
                      Set to 2026 & Rescan
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowEligibilityModal(false)}
                      className="flex-1 py-3 rounded-xl font-bold text-zinc-300 hover:text-white bg-zinc-800 text-xs cursor-pointer"
                    >
                      Dismiss
                    </button>
                  </div>
                </>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
