import React, { useState } from "react";

export default function WorkExperience() {
  const experiences = [
    {
      company: "EQ_REV",
      role: "Software Engineer",
      department: "EQ_REV",
      period: "January 2025 - Current",
      responsibilities: [
        "Built and deployed a SaaS analytics platform for brands on Zepto, Blinkit, and Instamart, offering pincode-level insights into stock, visibility, and ranking across 1000+ stores in India adopted by top D2C brands like Mokobara and Lifelong.",
        "Designed and implemented fully automated data pipelines using Selenium and GCP (Cloud Run, BigQuery, Scheduler), saving 100+ manual hours/month and ensuring sub-2-hour daily refreshes.",
        "Worked in the development of a Shopify Partner App (Remix + BigQuery) for advanced product sorting, increasing catalog engagement by 30%, listed on the Shopify App Store.",
      ],
    },

    {
      company: "Crayon'd",
      role: "Full Stack Developer Intern ",
      department: "Crayon'd",
      period: "September 2024 - March 2025",
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
      <h1 className="text-3xl font-font-roboto font-bold mb-8">
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
          <div className="mb-4 font-bolder flex flex-col gap-2">
            <h2 className="text-xl md:text-4xl">
              <span className="font-heading font-bold text-gray-500">
                {experiences[selectedExp].role}
              </span>{" "}
              <span className="font-bold">at </span>
              <span className="underline decoration-2 decoration-gray-500 font-bold">
                {experiences[selectedExp].department}
              </span>
            </h2>
            <p className="text-sm mb-6 font-bold md:text-xl mb-6 font-bold">
              {experiences[selectedExp].period}
            </p>
          </div>

          <ul className="list-disc ml-5 space-y-3 font-heading">
            {experiences[selectedExp].responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
