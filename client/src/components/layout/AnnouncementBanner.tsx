import { useState } from "react";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white py-2 px-4 text-center text-sm">
      <div className="container mx-auto flex items-center justify-center">
        <span className="inline-block animate-pulse mr-2">🔔</span>
        <p className="font-medium">
          Registration are now open! Stay tuned! National-level MedTech
          Hackathon. Join our{" "}
          <a
            href="https://discord.gg/rbFhtagR"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            Discord Server
          </a>{" "}
          for updates!
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 text-white hover:text-gray-200"
          aria-label="Close announcement"
        >
          <i className="ri-close-line"></i>
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
