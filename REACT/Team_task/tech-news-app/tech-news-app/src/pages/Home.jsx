import React from "react";
import Newscard from "../components/Newscard.jsx";
import newsData from "../data/newsData.js";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest text-blue-600 mb-2">
            LATEST · TECHSTACK
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            This Week in AI &amp; Tech
          </h1>
          <p className="mt-2 text-gray-500 text-sm">
            The stories shaping the AI infrastructure race, in brief.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {newsData.map((item) => (
            <Newscard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
