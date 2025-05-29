import { useRoute } from "wouter";
import { themesData } from "@/data/themesData";
import ThemeCard from "@/components/themes/ThemeCard";
import { useEffect } from "react";

export default function ThemeDetailPage({ params }: { params: { slug: string } }) {
  const theme = themesData.find(t => t.slug === params.slug);

  useEffect(() => {
    if (theme) document.title = `${theme.title} | Theme | Incubate`;
  }, [theme]);

  if (!theme) {
    return (
      <div className="py-20 text-center text-2xl text-red-600 dark:text-red-400">
        Theme not found.
      </div>
    );
  }

  return (
    <div className="py-12 min-h-screen dark:bg-gray-900">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-3xl">
          <ThemeCard {...theme} />
        </div>
        <div className="mt-10 bg-white/80 dark:bg-gray-800/80 rounded-xl p-8 shadow-lg w-full max-w-3xl">
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">Key Features :</h2>
          <ul className="list-disc ml-6 mb-6 text-gray-700 dark:text-gray-200">
            {theme.challenges?.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
          {/* <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">Resources</h2> */}
          {/* <ul className="list-disc ml-6 mb-6 text-gray-700 dark:text-gray-200">
            {theme.resources?.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">Tags</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {theme.tags?.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-xs font-semibold">{tag}</span>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">Mentors</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-200">{theme.mentors}</p>
          <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">Expected Outcomes</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-200">{theme.outcomes}</p> */}
        </div>
      </div>
    </div>
  );
}
