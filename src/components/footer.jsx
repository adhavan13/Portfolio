import { useState } from "react";
import {
  Mail,
  Calendar,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <div className="max-w-6xl font-roboto  mx-auto py-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-4xl font-bold mb-6">Reach me at</h1>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div>
              <p className="text-gray-600 text-2xl">Send me an email at</p>
              <a
                href="mailto:arunnats2004@gmail.com"
                className="text-2xl font-medium font-saira hover:underline"
              >
                adhavankannan10@gmail.com
              </a>
              <p className="text-gray-600 text-2xl text mt-1">
                Ideas this big don’t belong in DMs. Email me — let’s architect
                the impossible.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-gray-600 mb-3">
              Connect with me on social media
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Twitter size={20} />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* Email contact */}

        {/* Schedule a call */}
        <div className="flex flex-col gap-2">
          <p className="font-bold text-xl">Virtual Function:</p>
          <a
            href="https://calendly.com/yourusername"
            target="_blank"
            className="p-2 w-24 font-special text-center text-lm bg-black border border-gray-500 text-white rounded-md hover:bg-gray-50 hover:text-black transition-colors"
          >
            Talk()
          </a>
          <p className="font-bold text-lm text-gray-600">
            Overridden in every great collab.
          </p>
        </div>
      </div>
    </div>
  );
}
