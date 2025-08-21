"use client";

import { useEffect, useState } from "react";
import { fetchAiNews } from "./utils/getNews";

export default function Home() {
  const [news, setNews] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchAiNews().then((data) => setNews(data));
  }, []);

  if (!news)
    return (
      <p className="text-center text-gray-300 mt-20">
        Loading news...
      </p>
    );

  // Fungsi filter berita berdasarkan search
  const filterNews = (items, source) =>
    items?.filter((item) =>
      (item.title || "")
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-4 left-4 right-4 z-50 bg-transparent backdrop-blur-md shadow-md shadow-violet-400 text-white rounded-2xl max-w-6xl mx-auto py-2 px-4 flex justify-between items-center">
        {/* Title */}
        <div>
          <h1 className="text-base md:text-lg font-semiibold tracking-wide">
            Latest AI Headlines
          </h1>
          
        </div>

        {/* Search Input */}
        <div className="w-1/2 md:w-1/3 lg:w-1/4">
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-xl border-b border-violet-500  text-white focus:outline-none focus:shadow-md focus:shadow-violet-600 transition ease-in-out duration-75 delay-75 focus:ring-violet-500"
          />
        </div>
      </header>


      <main className="p-6 md:p-12 max-w-6xl mx-auto space-y-12 ">
        {/* NewsApi Section */}
        <section>
          <h2 className="text-xl font-semibold mb-6 mt-16 md:mt-12 text-violet-600 text-center">
            API 1 (NEWSAPI)
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filterNews(news.newsApi.articles, "newsApi")?.map((item) => (
              <div
                key={item.url}
                className="rounded-2xl shadow-md shadow-violet-400 hover:shadow-lg transition duration-100 hover:-translate-y-1 overflow-hidden border border-gray-700 flex flex-col"
              >
                {item.urlToImage && (
                  <img
                    src={item.urlToImage}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                  />
                )}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 flex-grow line-clamp-3">
                    {item.description}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    className="mt-auto text-violet-500 hover:text-violet-600 font-medium"
                  >
                    Read More →
                  </a>
                  <span className="text-xs text-gray-500 mt-2">
                    {new Date(item.publishedAt).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GNews Section */}
        <section>
          <h2 className="text-xl font-semibold mb-6 text-center text-violet-600">
            API 2 (GNEWS)
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filterNews(news.gNews.articles, "gNews")?.map((item) => (
              <div
                key={item.url}
                className="rounded-2xl shadow-md shadow-violet-400 hover:shadow-lg transition duration-100 hover:-translate-y-1 overflow-hidden border border-gray-700 flex flex-col"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                  />
                )}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 flex-grow line-clamp-3">
                    {item.description}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    className="mt-auto text-violet-500 hover:text-violet-600 font-medium"
                  >
                    Read More →
                  </a>
                  <span className="text-xs text-gray-500 mt-2">
                    {new Date(item.publishedAt).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NewsData.io Section */}
        <section>
          <h2 className="text-xl font-semibold mb-6 text-center text-violet-600">
            API 3 (NEWSDATA.IO)
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filterNews(news.newsData.results, "newsData")?.map((item) => (
              <div
                key={item.link}
                className="rounded-2xl shadow-md shadow-violet-400 hover:shadow-lg transition duration-100 hover:-translate-y-1 overflow-hidden border border-gray-700 flex flex-col"
              >
                {item.image_url && (
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                  />
                )}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 flex-grow line-clamp-3">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    className="mt-auto text-violet-500 hover:text-violet-600 font-medium"
                  >
                    Read More →
                  </a>
                  <span className="text-xs text-gray-500 mt-2">
                    {new Date(item.pubDate).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800 mt-12">
        © {new Date().getFullYear()} AI News Portal — Alif Haikal
      </footer>
    </div>
  );
}
