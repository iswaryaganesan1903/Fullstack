import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import NewsDetail from "./pages/NewsDetail.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* One dynamic route serves all 4 news pages:
            /news/microsoft-mai-models
            /news/amd-anthropic-investment
            /news/openai-security-incident
            /news/openai-agent-platform-datacenter */}
        <Route path="/news/:slug" element={<NewsDetail />} />
      </Routes>
    </>
  );
};

export default App;
