import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import newsData from "../data/newsData.js";

const NewsDetail = () => {
  const { slug } = useParams();
  const article = newsData.find((item) => item.slug === slug);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  const otherArticles = newsData.filter((item) => item.slug !== slug);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mb-6"
        >
          &larr; Back to all news
        </Link>

        <span className="text-xs font-semibold tracking-wider text-blue-600">
          {article.tag}
        </span>
        <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
          {article.headline}
        </h1>
        <p className="mt-2 text-xs text-gray-400">{article.date}</p>

        <img
          src={article.image}
          alt={article.headline}
          className="w-full h-72 sm:h-96 object-cover rounded-xl mt-6 shadow-md"
        />

        <div className="mt-6 space-y-4">
          {article.body.map((paragraph, index) => (
            <p key={index} className="text-gray-700 text-base leading-7">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* More news */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-lg font-bold text-gray-900 mb-4">More news</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherArticles.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.slug}`}
              className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.headline}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <p className="text-sm font-semibold text-gray-900 leading-snug">
                  {item.headline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
