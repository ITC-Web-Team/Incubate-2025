import { useState } from "react";

const AnnouncementBanner = () => {
  // Always keep this false as registrations are closed
  const [isVisible, setIsVisible] = useState(false);

  // This component will never be displayed since isVisible is false
  if (!isVisible) return null;

  return (
    <div className="bg-primary text-white py-2 px-4 text-center text-sm">
      <div className="container mx-auto flex items-center justify-center">
        <span className="inline-block animate-pulse mr-2">🔔</span>
        <p className="font-medium">
          Registrations are closed. Stay tuned! National-level MedTech
          Hackathon. 
          {/* Join our{" "}
          <a
            href="https://discord.gg/W8acE8nK"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            Discord Server
          </a>{" "}
          for updates! */}
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
