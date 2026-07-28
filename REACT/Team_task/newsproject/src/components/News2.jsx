import React from "react";
import image2 from "../assets/tech_image_2.png";

const News2= () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        
        {/* Hero Image */}
                       <div className="flex justify-center mt-20">
                           <img
                               src={image2}
                               alt="Microsoft AI Models"
                               className=" h-[500px] object-cover"
                           />
                       </div>
        <div className="p-10">
          <span className="bg-red-700 text-white px-4 py-2 rounded-full font-semibold">
            Technology
          </span>

          <h1 className="text-5xl font-bold mt-5 leading-tight">
            AMD to Sell Anthropic Tens of Billions in AI Servers, Invest Up to
            $5 Billion in Startup
          </h1>

          <p className="text-gray-500 mt-3">
            July 22, 2026 • Reuters
          </p>

          <hr className="my-8" />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Article */}
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 leading-8 mb-6">
                Advanced Micro Devices (AMD) has announced a major partnership
                with AI startup Anthropic that includes selling tens of billions
                of dollars' worth of AI servers while investing up to
                <b> $5 billion </b>
                in the company. The agreement strengthens AMD's position in the
                AI chip market, where Nvidia currently dominates.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                The partnership represents another major strategic investment in
                the rapidly growing artificial intelligence industry. Similar
                deals have become common as chip manufacturers invest in AI
                companies that rely heavily on their hardware to train and run
                advanced AI models.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                Under the agreement, Anthropic will purchase up to
                <b> two gigawatts </b>
                of AMD's latest-generation
                <b> Instinct MI450 AI chips </b>
                beginning in the first half of 2027. AMD's investment will be
                released based on deployment milestones as Anthropic expands its
                AI infrastructure.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                Anthropic has become one of Silicon Valley's fastest-growing AI
                companies due to the popularity of its Claude AI models and
                enterprise products such as Claude Code. The company requires
                enormous computing power to support increasing customer demand.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                AMD executives stated that one gigawatt of AI computing
                infrastructure—enough electricity to power roughly
                <b> 750,000 U.S. homes </b>
                —can cost tens of billions of dollars. Following the
                announcement, AMD shares rose around
                <b> 2.4% </b>, continuing a strong year in which the company's
                stock has more than doubled.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                Anthropic has aggressively expanded its computing capacity in
                recent months. Earlier this year, it secured the full computing
                power of SpaceX's Colossus 1 facility and is also reportedly in
                discussions with Meta Platforms for additional AI computing
                resources.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                According to reports, Anthropic will deploy AMD chips across its
                own data centers while leasing additional computing capacity
                through cloud providers and specialized AI cloud companies. The
                agreement is expected to strengthen AMD's long-term position in
                the rapidly expanding AI hardware market.
              </p>

              {/* Highlights */}
              <div className="bg-red-50 border-l-4 border-red-700 p-6 rounded-lg mt-10">
                <h2 className="text-2xl font-bold mb-3">
                  Key Highlights
                </h2>

                <ul className="list-disc ml-6 space-y-3 text-gray-700">
                  <li>AMD will invest up to $5 billion in Anthropic.</li>
                  <li>Anthropic will purchase AI servers worth tens of billions of dollars.</li>
                  <li>Up to 2 gigawatts of Instinct MI450 AI chips will be deployed.</li>
                  <li>Chip deliveries are scheduled to begin in early 2027.</li>
                  <li>The partnership strengthens AMD's challenge against Nvidia.</li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-gray-50 rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-5">
                  Quick Facts
                </h2>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Companies</p>
                    <p>AMD & Anthropic</p>
                  </div>

                  <div>
                    <p className="font-semibold">Investment</p>
                    <p>Up to $5 Billion</p>
                  </div>

                  <div>
                    <p className="font-semibold">AI Chips</p>
                    <p>AMD Instinct MI450</p>
                  </div>

                  <div>
                    <p className="font-semibold">Deployment</p>
                    <p>First Half of 2027</p>
                  </div>

                  <div>
                    <p className="font-semibold">Industry</p>
                    <p>Artificial Intelligence & Semiconductors</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-100 rounded-lg p-5 mt-8">
                <h2 className="text-xl font-bold mb-3">
                  Why This Matters
                </h2>

                <p className="text-gray-700 leading-7">
                  This partnership highlights the growing demand for AI
                  infrastructure as companies race to build more powerful AI
                  systems. By supplying advanced AI chips and investing directly
                  in Anthropic, AMD strengthens its position as the leading
                  alternative to Nvidia while helping expand global AI computing
                  capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News2;