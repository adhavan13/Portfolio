import React, { useState } from "react";

export default function WorkExperience() {
  const experiences = [
    {
      company: "CSED NITC",
      role: "Web Developer",
      department: "Department of Computer Science and Engineering NITC",
      period: "December 2024 - January 2025",
      responsibilities: [
        "Co-lead a team of 11 developers and designers to rebuild the official website of the Department of Computer Science and Engineering.",
        "Managed frontend development and helped create a responsive and visually pleasing website.",
      ],
    },
    {
      company: "Intecso1",
      role: "Software Engineer",
      department: "Product Development",
      period: "June 2024 - November 2024",
      responsibilities: [
        "Developed and maintained web applications using React and Node.js.",
        "Collaborated with design team to implement responsive UI components.",
      ],
    },
  ];

  const [selectedExp, setSelectedExp] = useState(0);

  return (
    <div className="max-w-6xl mx-auto pt-8">
      <h1 className="text-4xl font-font-roboto font-bold mb-8">Where I've Worked</h1>

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
