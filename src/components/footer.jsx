import { useState } from "react";
import {
  Mail,
  Calendar,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

export default function ContactSection() {
  return (
    <div className="max-w-6xl font-roboto mx-auto py-6 px-4 sm:px-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Reach me at</h1>

      <div className="flex flex-col gap-8 sm:gap-12">
        <div className="space-y-6">
          {/* Main contact info section - stack on mobile, row on desktop */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            {/* Email section */}
            <div className="flex items-start space-x-3">
              <div>
                <p className="text-gray-600 text-xl sm:text-2xl">Send me an email at</p>
                <a
                  href="mailto:adhavankannan10@gmail.com"
                  className="text-xl sm:text-2xl font-medium font-saira hover:underline break-words"
                >
                  adhavankannan10@gmail.com
                </a>
                <p className="text-gray-600 text-lg sm:text-2xl mt-1">
                  Ideas this big don't belong in DMs. Email me — let's architect
                  the impossible.
                </p>
              </div>
            </div>

            {/* Social media section */}
            <div className="mt-2">
              <p className="text-gray-600 mb-3">
                Connect with me on social media
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/adhavan_kannan_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/adhavan10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="https://github.com/adhavan13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Schedule a call */}
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">Virtual Function:</p>
            <a
              href="https://calendly.com/adhavankannan10/30min"
              target="_blank"
              className="p-2 w-24 font-special text-center text-sm bg-black border border-gray-500 text-white rounded-md hover:bg-gray-50 hover:text-black transition-colors"
            >
              Talk()
            </a>
            <p className="font-bold text-sm text-gray-600">
              Overridden in every great collab.
            </p>
          </div>
        </div>

        {/* Footer section */}
        <div className="flex flex-col gap-4 mt-6">
          <div className="w-full border-2 border-gray-200"></div>
          <div className="text-black text-sm sm:text-base">
            <span>Copyright © 2025 - All right reserved by Adhavan Se V</span>
          </div>
        </div>
      </div>
    </div>
  );
}