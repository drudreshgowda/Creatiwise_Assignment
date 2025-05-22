"use client";

import React, { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";

const dummyArticles = [
  {
    id: 1,
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    createdOn: "20 hours ago",
    publish: true,
  },
  {
    id: 2,
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    createdOn: "21 hours ago",
    publish: true,
  },
  {
    id: 3,
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2678,
    createdOn: "6 days ago",
    publish: false,
  },
  {
    id: 4,
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant [2900]",
    words: 2408,
    createdOn: "1 Oct, 24",
    publish: true,
  },
  {
    id: 5,
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services [390]",
    words: 1793,
    createdOn: "1 Oct, 24",
    publish: false,
  },
];

export function DashboardPage() {
  const [articles, setArticles] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [filterPublish, setFilterPublish] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setArticles(dummyArticles);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredArticles = articles.filter((article) => {
    const matchesText =
      article.title.toLowerCase().includes(filterText.toLowerCase()) ||
      article.keyword.toLowerCase().includes(filterText.toLowerCase());
    const matchesPublish =
      filterPublish === "all" ||
      (filterPublish === "published" && article.publish) ||
      (filterPublish === "unpublished" && !article.publish);
    return matchesText && matchesPublish;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 bg-white shadow-lg rounded-lg m-4">
        <div className="mb-6 text-3xl font-bold text-gray-800">Articles</div>
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <input
            type="text"
            placeholder="Search for Title & Keywords..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="max-w-sm flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <select
            value={filterPublish}
            onChange={(e) => setFilterPublish(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            <option value="all">All Articles</option>
            <option value="published">Published</option>
            <option value="unpublished">Unpublished</option>
          </select>
        </div>
        {loading ? (
          <div className="space-y-4 animate-pulse">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-8 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-md shimmer"
              ></div>
            ))}
          </div>
        ) : filteredArticles.length > 0 ? (
          <table className="min-w-full border border-gray-200 rounded-md shadow-sm overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <tr>
                <th className="p-3 border-b border-blue-700">
                  <input type="checkbox" className="cursor-pointer" />
                </th>
                <th className="p-3 border-b border-blue-700 text-left font-semibold">Article Title</th>
                <th className="p-3 border-b border-blue-700 text-left font-semibold">Keyword (Traffic)</th>
                <th className="p-3 border-b border-blue-700 text-left font-semibold">Words</th>
                <th className="p-3 border-b border-blue-700 text-left font-semibold">Created On</th>
                <th className="p-3 border-b border-blue-700 text-left font-semibold">Action</th>
                <th className="p-3 border-b border-blue-700 text-left font-semibold">Publish</th>
              </tr>
            </thead>
            <tbody>
              {filteredArticles.map((article) => (
                <tr
                  key={article.id}
                  className="hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
                >
                  <td className="p-3 border-b border-gray-300 text-center">
                    <input type="checkbox" className="cursor-pointer" />
                  </td>
                  <td className="p-3 border-b border-gray-300 font-semibold text-blue-700">{article.title}</td>
                  <td className="p-3 border-b border-gray-300">{article.keyword}</td>
                  <td className="p-3 border-b border-gray-300">{article.words}</td>
                  <td className="p-3 border-b border-gray-300">{article.createdOn}</td>
                  <td className="p-3 border-b border-gray-300">
                    <button className="px-4 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300">
                      View
                    </button>
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        article.publish ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {article.publish ? "Published" : "Unpublished"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-6 text-gray-500 font-semibold">No results.</div>
        )}
      </main>
      <style>{`
        .shimmer {
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
}
