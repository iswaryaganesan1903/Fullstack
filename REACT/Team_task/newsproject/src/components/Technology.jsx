import React from "react";
import image1 from "../assets/tech_image_3.png";
import image2 from "../assets/tech_image_2.png";
import image3 from "../assets/tech_image_4.png";
import image4 from "../assets/tech_image_1.png";
import { Link } from 'react-router-dom'

const Technology = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        📰 Technology News
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex">
          <img
            src={image1}
            alt="Microsoft"
            className="w-56 h-full object-cover"
          />

          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-3">Technology</h2>

            <p className="text-gray-600 leading-7">
              Microsoft is rapidly expanding the use of its in-house AI family
              of artificial intelligence (AI) models.
            </p>
            <Link to="/technology1">
                <button className="mt-5 w-fit bg-blue-600 text-white px-5 py-2 rounded-lg">Read More</button>
            </Link>
            
        
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex">
          <img
            src={image2}
            alt="AMD"
            className="w-56 h-full object-cover"
          />

          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-3">Technology</h2>

            <p className="text-gray-600 leading-7">
              AMD to invest up to $5 billion in Anthropic; AI startup to buy up
              to 2 GW of chips.
            </p>

             <Link to="/technology2">
                <button className="mt-5 w-fit bg-blue-600 text-white px-5 py-2 rounded-lg">Read More</button>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex">
          <img
            src={image3}
            alt="Voice AI"
            className="w-56 h-full object-cover"
          />

          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-3">Technology</h2>

            <p className="text-gray-600 leading-7">
              Why voice, not keyboards, may define AI's next chapter. For years,
              the artificial intelligence race has revolved around one question.
            </p>

            <Link to="/technology3">
                <button className="mt-5 w-fit bg-blue-600 text-white px-5 py-2 rounded-lg">Read More</button>
            </Link>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden flex">
          <img
            src={image4}
            alt="Infosys"
            className="w-56 h-full object-cover"
          />

          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-3">Technology</h2>

            <p className="text-gray-600 leading-7">
              Infosys appoints Ashiss Kumar Dash as CEO Designate and
              strengthens its AI vision.
            </p>

            <Link to="/technology4">
                <button className="mt-5 w-fit bg-blue-600 text-white px-5 py-2 rounded-lg">Read More</button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Technology;