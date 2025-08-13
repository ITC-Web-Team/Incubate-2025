import { useState } from "react";
import { Link } from "wouter";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-1.5 px-2 text-center text-xs shadow-lg">
      <div className="container mx-auto flex items-center justify-center min-h-0">
        <div className="flex items-center justify-center w-full min-h-0">
          <p className="font-medium w-full">
            <span className="font-bold text-base tracking-wide">Incubate 2025</span> &mdash; Thank you for your interest in the Incubate Hackathon. Registration is now closed. <span className="font-semibold">Stay tuned!</span>
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-2 text-white hover:text-purple-200 transition-colors text-base"
            aria-label="Close announcement"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
