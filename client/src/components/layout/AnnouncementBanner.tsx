import { useState } from "react";
import { Link } from "wouter";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 text-center text-sm shadow-lg">
      <div className="container mx-auto flex items-center justify-center">
        <p className="font-medium">
          <strong>Phase 1 Submissions Open!</strong> Submit your innovative solutions now.{" "}
          <Link
            href="/submission"
            className="underline hover:text-blue-200 font-semibold ml-1"
          >
            Click here to Submit 
          </Link>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 text-white hover:text-blue-200 transition-colors"
          aria-label="Close announcement"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
