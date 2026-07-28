import React from "react";
import { Link } from "react-router-dom";

const Newscard = ({ slug, tag, headline, image, description }) => {
  return (
    <Link
      to={`/news/${slug}`}
      className="group block max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300"
    >
      {/* Tag + Headline */}
      <div className="p-4">
        <span className="text-xs font-semibold tracking-wider text-blue-600">
          {tag}
        </span>
        <h2 className="mt-1 text-xl font-bold text-gray-900 leading-snug group-hover:text-blue-700 transition">
          {headline}
        </h2>
      </div>

      {/* News Image */}
      <img
        src={image}
        alt={headline}
        className="w-full h-56 object-cover"
      />

      {/* Description */}
      <div className="p-4">
        <p className="text-gray-600 text-sm leading-6">{description}</p>

        <span className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg group-hover:bg-blue-700 transition">
          Read More
        </span>
      </div>
    </Link>
  );
};

export default Newscard;
