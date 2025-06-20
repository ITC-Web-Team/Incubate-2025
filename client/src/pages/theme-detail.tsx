import { themesData } from "@/data/themesData";
import ThemeCard from "@/components/themes/ThemeCard";
import { useEffect } from "react";
import { Link } from "wouter"; // Import Link for the "Back to themes" button

export default function ThemeDetailPage({ params }: { params: { slug: string } }) {
  const theme = themesData.find(t => t.slug === params.slug);

  useEffect(() => {
    if (theme) document.title = `${theme.title} | Theme | Incubate`;
    window.scrollTo(0, 0); // Scroll to top on component mount
  }, [theme]);

  if (!theme) {
    return (
      <div className="py-20 text-center text-2xl text-red-600 dark:text-red-400 min-h-screen flex flex-col items-center justify-center dark:bg-gray-900">
        <p>Theme not found.</p>
        <Link href="/themes">
          <a className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Back to Themes
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 min-h-screen dark:bg-gray-900">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Theme Card Display */}
        <div className="w-full max-w-3xl mb-10">
          <ThemeCard {...theme} clickable={false} />
        </div>
        {/* Theme Video Section */}
{theme.videoId && (
  <div className="mt-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl w-full max-w-3xl mb-10">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300 border-b pb-3 border-blue-200 dark:border-blue-700">
      Theme Video
    </h2>
    <div className="w-full rounded-lg overflow-hidden shadow-lg relative" style={{ aspectRatio: "16/9", minHeight: "320px" }}>
  <iframe
    src={`https://www.youtube.com/embed/${theme.videoId}`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    className="w-full h-full"
  ></iframe>
</div>
  </div>
)}
        {/* Focus Points Section */}
        {theme.focusPoints && theme.focusPoints.length > 0 && (
          <div className="mt-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl w-full max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300 border-b pb-3 border-blue-200 dark:border-blue-700">
              Focus Areas
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 pl-2">
              {theme.focusPoints.map((point, index) => (
                <li key={index} className="text-base md:text-lg">{point}</li>
              ))}
            </ul>
          </div>
        )}

       
        
        {/* Back to Themes Button */}
        <div className="mt-12 text-center">
          <Link href="/themes">
            <a className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium shadow-md hover:shadow-lg">
              <i className="ri-arrow-left-line mr-2"></i>Back to All Themes
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
