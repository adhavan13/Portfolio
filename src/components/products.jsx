import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import eqrevImage from "../assets/eqrev.jpg";

export default function ProjectsList() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "Eq_Rev - Sai Sakthi Enterprises",
      role: "Lead Developer",
      image: eqrevImage,
      description:
        "A data-driven platform I built to help brands on Zepto, Blinkit, and Instamart gain deep visibility into their product performance. It offers store-level and pincode-level analytics on stock availability, listing health, and ad performance across 1000+ stores in India. I automated the entire data pipeline using Selenium and Google Cloud (Cloud Run, BigQuery, Scheduler), enabling daily insights with zero manual effort. Currently trusted by 5+ D2C brands, including Mokobara and Lifelong, to optimize revenue and campaign strategies.",
      technologies: [
        "React",
        "Node.js",
        "Selenium",
        "BigQuery",
        "Google Cloud Run",
        "Cloud Scheduler",
        "Cloud Storage",
      ],
      previewLink: "https://app.eqrev.com",
    },
    {
      title: "Eq_Rev - Sai Sakthi Enterprises",
      role: "Lead Developer",
      image: eqrevImage,
      description:
        "Built a high-performance data extraction system automating 25+ end-to-end jobs across seller dashboards and quickcommerce platforms with Python, Selenium, JavaScript, BigQuery, and Cloud Run. These automated jobs fetch data through API calls and web scraping, delivering real-time insights in under 1 hour—saving 24+ hours of manual effort. The system runs on a fully schedulable, trigger-free architecture, enabling time-sensitive analytics with cryptographic encryption and seamless cloud integration for scalable operations.",
      technologies: [
        "Python ",
        "Selenium ",
        "JavaScript",
        "BigQuery   ",
        "Google Cloud Run",
        "Cloud Scheduler",
        "Cloud Storage",
        "Cryptography",
      ],
      previewLink: "https://app.eqrev.com",
    },
  ];

  // Create a reusable animation component that animates on every scroll
  const ScrollAnimation = ({ children, className, delay = 0 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: false, // Animation triggers every time
      threshold: 0.1,
    });

    React.useEffect(() => {
      if (inView) {
        controls.start({
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: delay,
          },
        });
      } else {
        // Reset animation when element is out of view
        controls.start({
          y: 50,
          opacity: 0,
          transition: {
            duration: 0.3,
          },
        });
      }
    }, [controls, inView, delay]);

    return (
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  const ImageAnimation = ({ src, alt, className }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: false, // Animation triggers every time
      threshold: 0.1,
    });

    React.useEffect(() => {
      if (inView) {
        controls.start({
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.7,
            ease: "easeOut",
          },
        });
      } else {
        // Reset animation when element is out of view
        controls.start({
          scale: 0.9,
          opacity: 0,
          transition: {
            duration: 0.3,
          },
        });
      }
    }, [controls, inView]);

    return (
      <motion.img
        ref={ref}
        src={src}
        alt={alt}
        className={className}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={controls}
      />
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <ScrollAnimation className="mb-12">
        <h1 className="text-4xl font-bold">Some Things I've Built</h1>
      </ScrollAnimation>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <ScrollAnimation
            key={index}
            className="flex flex-col lg:flex-row border-r border-gray-200 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="lg:w-1/2 overflow-hidden">
              <ImageAnimation
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:w-1/2 p-8">
              <ScrollAnimation delay={0.2}>
                <div className="mb-2">
                  <p className="text-gray-600 font-spacegrotesk font-bold">
                    {project.role}
                  </p>
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <p className="mb-6 text-black font-semibold">
                  {project.description}
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.5}>
                <a
                  href={project.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border-2 border-black font-medium rounded-md hover:bg-black hover:text-white transition-colors"
                >
                  Preview
                </a>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
