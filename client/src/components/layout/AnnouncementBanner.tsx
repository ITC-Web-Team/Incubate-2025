import { useState } from "react";
import { Link } from "wouter";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 px-3 text-center text-sm shadow-lg">
      <div className="container mx-auto flex items-center justify-center min-h-0">
        <div className="flex items-center justify-between w-full gap-3">
          <p className="font-medium flex-1">
            <span className="font-bold text-base tracking-wide">Incubate 2025</span>
            <span className="mx-2">•</span>
            <span>Results announced.</span>{" "}
            <Link href="/results" className="underline decoration-white/70 hover:decoration-white font-semibold">View the list</Link>
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="shrink-0 inline-flex items-center justify-center rounded-md border border-white/30 hover:bg-white/10 transition-colors w-6 h-6"
            aria-label="Close announcement"
            title="Hide"
          >
            <span className="text-base leading-none">✕</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
