import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function ProjectDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Sample project data structure
  const defaultProject = {
    title: "India Post AI Platform",
    description:
      "Intelligent outreach system serving 600K+ villages with AI recommendations and automated data processing",
    longDescription:
      "India Post AI Platform is an intelligent outreach system designed for India's vast rural network, serving over 600,000 villages. Developed as a finalist project for Smart India Hackathon 2024, the platform leverages Next.js for a responsive web interface and integrates advanced AI components including LightGBM for predictive analytics and a Retrieval-Augmented Generation (RAG) chatbot for interactive, personalized communication. It dynamically recommends the top three most relevant government schemes to each user based on regional demographics and behavioral patterns. The system automates complex data extraction and transformation workflows using Python-based ETL pipelines and Selenium for web scraping, significantly reducing manual effort by 80%. This automation, coupled with AI-driven insights, boosts operational efficiency by 40%, enabling India Post to deliver targeted, data-driven services at scale.",
    challenges:
      "One of the main challenges was implementing a real-time inventory tracking system that would update across all active user sessions. This was solved by implementing Socket.io for real-time communication between the client and server. Another challenge was optimizing the performance of the application when dealing with large product catalogs. This was addressed by implementing pagination, lazy loading, and image optimization techniques.",
    timeline: "20 days (June 2024 - August 2024)",
    role: "Full Stack Developer",
    screenshots: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
    ],
    techStack: [
      "RAG",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
      "JWT Auth",
    ],
    features: [
      "AI-powered scheme recommendations",
      "Interactive RAG chatbot",
      "Demographic data visualization",
      "Automated data processing",
      "Real-time analytics dashboard",
      "Secure rural data management",
      "Cross-platform accessibility",
      "Offline data synchronization",
    ],
    github: "https://github.com/username/project",
    liveDemo: "https://example.com",
    testimonial: {
      quote:
        "This platform has transformed how we deliver services to rural India, making government schemes more accessible than ever before.",
      author: "Rajesh Sharma",
      role: "Director of Rural Operations, India Post",
    },
    metrics: [
      { label: "Villages Reached", value: "600K+" },
      { label: "Efficiency Increase", value: "40%" },
      { label: "Manual Effort Reduced", value: "80%" },
      { label: "User Satisfaction", value: "92%" },
    ],
  };

  // Use provided project or fallback to default
  const projectData = defaultProject;

  // Functions for image navigation
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === projectData.screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? projectData.screenshots.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll through images, pause on hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Handle back button click
  const handleBackClick = () => {
    // Fallback if no onBackClick prop
    window.history.back();
  };

  // Animations for elements
  const animatedClass = "transition-all duration-700 transform";

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* Hero header section */}
      <div className="relative bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
        </div>

        <div className="container mx-auto px-6 py-16 relative z-10">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group mb-8"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to projects</span>
          </button>

          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            {projectData.title}
          </h1>

          <p className="text-xl text-neutral-300 max-w-2xl mb-8">
            {projectData.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {projectData.github && (
              <a
                href={projectData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-lg transition-colors border border-white/20 backdrop-blur-sm"
              >
                <Github size={20} />
                <span>View on GitHub</span>
              </a>
            )}
            {projectData.liveDemo && (
              <a
                href={projectData.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 px-5 py-3 rounded-lg transition-colors border border-neutral-700"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Key metrics section */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto py-8 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {projectData.metrics.map((metric, idx) => (
              <div key={idx} className="p-4">
                <p className="text-3xl md:text-4xl font-bold text-neutral-900">
                  {metric.value}
                </p>
                <p className="text-neutral-600 mt-1">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-12">
        {/* Screenshot carousel */}
        <div
          className="relative overflow-hidden rounded-xl shadow-2xl mb-16 bg-neutral-900"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-video">
            <img
              src={projectData.screenshots[currentImageIndex]}
              alt={`${projectData.title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-all hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-all hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Pagination dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {projectData.screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-white scale-125"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-lg font-medium">
                Interactive Demo {currentImageIndex + 1}/
                {projectData.screenshots.length}
              </p>
            </div>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="mb-12 border-b border-neutral-200">
          <div className="flex overflow-x-auto scrollbar-hide space-x-8">
            {["overview", "challenges", "features"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 font-medium text-lg border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "border-neutral-900 text-neutral-900"
                    : "border-transparent text-neutral-500 hover:text-neutral-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column - Project Information */}
          <div className="lg:col-span-2">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className={`${animatedClass}`}>
                <h2 className="text-3xl font-bold mb-6 text-neutral-900">
                  Project Overview
                </h2>
                <div className="prose prose-lg max-w-none text-neutral-700">
                  <p className="text-xl mb-6 text-neutral-800 leading-relaxed">
                    {projectData.description}
                  </p>
                  <p className="leading-relaxed">
                    {projectData.longDescription}
                  </p>
                </div>

                {/* Testimonial */}
                <div className="mt-12 bg-neutral-900 rounded-xl p-1">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 text-2xl font-serif">
                          "
                        </div>
                      </div>
                      <div>
                        <p className="italic text-neutral-700 mb-4">
                          {projectData.testimonial.quote}
                        </p>
                        <p className="font-medium text-neutral-900">
                          {projectData.testimonial.author}
                        </p>
                        <p className="text-sm text-neutral-500">
                          {projectData.testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Challenges Tab */}
            {activeTab === "challenges" && (
              <div className={`${animatedClass}`}>
                <h2 className="text-3xl font-bold mb-6 text-neutral-900">
                  Challenges & Solutions
                </h2>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-neutral-200">
                  <p className="text-neutral-700 leading-relaxed">
                    {projectData.challenges}
                  </p>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-neutral-100 rounded-lg p-5 border border-neutral-200">
                      <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                        Challenge
                      </h3>
                      <p className="text-neutral-700">
                        Real-time inventory tracking across multiple user
                        sessions
                      </p>
                    </div>
                    <div className="bg-neutral-100 rounded-lg p-5 border border-neutral-200">
                      <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                        Solution
                      </h3>
                      <p className="text-neutral-700">
                        Implemented Socket.io for real-time communication
                        between client and server
                      </p>
                    </div>
                    <div className="bg-neutral-100 rounded-lg p-5 border border-neutral-200">
                      <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                        Challenge
                      </h3>
                      <p className="text-neutral-700">
                        Performance optimization for large product catalogs
                      </p>
                    </div>
                    <div className="bg-neutral-100 rounded-lg p-5 border border-neutral-200">
                      <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                        Solution
                      </h3>
                      <p className="text-neutral-700">
                        Implemented pagination, lazy loading, and image
                        optimization techniques
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === "features" && (
              <div className={`${animatedClass}`}>
                <h2 className="text-3xl font-bold mb-6 text-neutral-900">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 hover:shadow-md transition-shadow flex"
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-600">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-neutral-900">
                          {feature}
                        </h3>
                        <p className="text-neutral-600 mt-1">
                          Enhanced user experience with cutting-edge technology.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column - Tech Stack and Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-neutral-200">
              <div className="bg-neutral-900 px-6 py-4">
                <h2 className="text-xl font-bold text-white">
                  Project Details
                </h2>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-medium text-neutral-500 mb-2">
                    Timeline
                  </h3>
                  <p className="text-lg text-neutral-900">
                    {projectData.timeline}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium text-neutral-500 mb-2">Role</h3>
                  <p className="text-lg text-neutral-900">{projectData.role}</p>
                </div>

                <div>
                  <h3 className="font-medium text-neutral-500 mb-2">
                    Team Size
                  </h3>
                  <p className="text-lg text-neutral-900">5 developers</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-neutral-200">
              <div className="bg-neutral-900 px-6 py-4">
                <h2 className="text-xl font-bold text-white">Tech Stack</h2>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-3">
                  {projectData.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional card for impact */}
            <div className="bg-neutral-900 rounded-xl shadow-lg text-white p-6">
              <h2 className="text-xl font-bold mb-4">Project Impact</h2>
              <p className="mb-4">
                This platform has revolutionized service delivery across rural
                India, connecting over 600,000 villages to essential government
                services.
              </p>
              <div className="h-2 w-16 bg-white/30 rounded-full mb-4" />
              <p className="text-neutral-300">
                Winner, Smart India Hackathon 2024 Rural Innovation Category
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-neutral-900 text-white mt-16">
        <div className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in this project?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
            Contact me to learn more about how we built this solution and the
            impact it's having across rural India.
          </p>
          <button className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-3 rounded-lg font-medium transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
