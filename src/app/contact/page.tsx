"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const enquiry = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      course: data.get("course"),
      message: data.get("message"),
    };

    const saved = JSON.parse(
      localStorage.getItem("codeme-enquiries") || "[]"
    );

    saved.push(enquiry);
    localStorage.setItem(
      "codeme-enquiries",
      JSON.stringify(saved)
    );

    setSubmitted(true);
    form.reset();
  }

  return (
    <main className="min-h-screen bg-[#09090b] px-5 py-16 text-white">
      <div className="mx-auto max-w-xl rounded-2xl border border-zinc-800 bg-[#141419] p-8">
        <p className="mb-3 font-bold text-purple-400">
          CODEME HUB
        </p>

        <h1 className="mb-3 text-3xl font-bold">
          Contact Us
        </h1>

        <p className="mb-8 leading-7 text-zinc-400">
          Interested in our programs? Share your details
          and our team can help you choose the right course.
        </p>

        {submitted ? (
          <div className="rounded-lg bg-green-950 p-4 text-green-300">
            Your enquiry has been saved on this device!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block">
                Full name *
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Your full name"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block">
                Phone number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Your phone number"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3"
              />
            </div>

            <div>
              <label htmlFor="course" className="mb-2 block">
                Interested program *
              </label>
              <select
                id="course"
                name="course"
                required
                defaultValue=""
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3"
              >
                <option value="" disabled>
                  Select a program
                </option>
                <option>Python Full Stack Development</option>
                <option>MERN Stack Development</option>
                <option>Flutter App Development</option>
                <option>Data Science & Analytics</option>
                <option>UI/UX Designing</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block">
                Message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="How can we help you?"
                className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-purple-600 p-3 font-semibold hover:bg-purple-500"
            >
              Submit Enquiry
            </button>
          </form>
        )}

        <a
          href="/"
          className="mt-6 inline-block text-sm text-zinc-400 hover:text-white"
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
}