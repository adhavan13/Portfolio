import React, { useState } from "react";

export default function WorkExperience() {
  const experiences = [
    {
      company: "Sai Sakthi Enterprises",
      role: "Software Engineer",
      department: "Sai Sakthi Enterprises",
      period: "January 2025 - April 2025",
      responsibilities: [
        "Built and deployed a SaaS analytics platform for brands on Zepto, Blinkit, and Instamart, offering pincode-level insights into stock, visibility, and ranking across 1000+ stores in India; adopted by top D2C brands like Mokobara and Lifelong.",
        "Designed and implemented fully automated data pipelines using Selenium and GCP (Cloud Run, BigQuery, Scheduler), saving 100+ manual hours/month and ensuring sub-2-hour daily refreshes.",
        "Led the development of a Shopify Partner App (Remix + BigQuery) for advanced product sorting, increasing catalog engagement by ~30%; listed on the Shopify App Store.",
      ],
    },

    {
      company: "Crayon'd",
      role: "Full Stack Developer Intern ",
      department: "Crayon'd",
      period: "September 2024 - March 2024",
      responsibilities: [
        "Developed and shipped 3+ client-facing products end-to-end, building responsive user interfaces with React and robust backend services using Node.js/Express, leading to a 20% faster feature delivery across teams.",
        "Collaborated with designers, PMs, and QA to ensure high-quality releases, contributing to smoother sprints and quicker turnaround times on critical features.",
        "Followed industry-standard Git workflows, wrote clean, modular code, and optimized API performance—significantly improving maintainability and deployment efficiency.",
      ],
    },
  ];

  const [selectedExp, setSelectedExp] = useState(0);

  return (
    <div className="max-w-6xl mx-auto pt-8">
      <h1 className="text-4xl font-font-roboto font-bold mb-8">
        Where I've Worked
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left sidebar with list of companies */}
        <div className="md:w-1/4 flex-shrink-0">
          <div className="flex flex-col border-l-2 border-gray-300">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`p-4 text-left font-spacegrotesk hover:bg-gray-100 transition-colors duration-300 ease-in-out border-l-4 ${
                  selectedExp === index
                    ? "border-black font-bold bg-gray-100"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedExp(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>
        </div>

        {/* Right side with selected experience details */}
        <div className="font-roboto md:w-3/4 ">
          <div className="mb-4">
            <h2 className="text-2xl">
              <span className="text-gray-500">
                {experiences[selectedExp].role}
              </span>{" "}
              at{" "}
              <span className="font-bold">
                {experiences[selectedExp].department}
              </span>
            </h2>
            <p className="text-lg mb-6">{experiences[selectedExp].period}</p>
          </div>

          <ul className="list-disc ml-5 space-y-3">
            {experiences[selectedExp].responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
