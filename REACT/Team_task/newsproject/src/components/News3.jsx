
import image3 from "../assets/tech_image_4.png";
const News3 = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">

        {/* Hero Image */}
                        <div className="flex justify-center mt-20">
                    <img
                        src={image3}
                        alt="Microsoft AI Models"
                        className=" h-[500px] object-cover"
                    />
                </div>

        <div className="p-10">

          <span className="bg-purple-700 text-white px-4 py-2 rounded-full font-semibold">
            Artificial Intelligence
          </span>

          <h1 className="text-5xl font-bold mt-5 leading-tight">
            Why Voice, Not Keyboards, May Define AI's Next Chapter
          </h1>

          <p className="text-gray-500 mt-3">
             July 24, 2026 • 
          </p>

          <hr className="my-8" />

          <div className="grid md:grid-cols-3 gap-8">

            {/* Article */}
            <div className="md:col-span-2">

              <p className="text-lg text-gray-700 leading-8 mb-6">
                Artificial Intelligence is evolving rapidly, but experts believe
                the next breakthrough will come from how people interact with AI
                rather than simply building larger models.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                Voice technology is becoming more accurate through improvements
                in speech recognition and natural language processing. Users can
                now communicate with AI more naturally instead of typing
                commands.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                Companies including Microsoft, Google, OpenAI, Apple, and Amazon
                are investing heavily in voice assistants that can schedule
                meetings, answer questions, generate content, and automate daily
                tasks using simple conversations.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                Voice AI also improves accessibility by helping people who find
                keyboards difficult to use. As technology continues to improve,
                voice could become the primary way people interact with
                computers, smartphones, vehicles, and smart devices.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                While privacy and language accuracy remain challenges, experts
                believe conversational AI will become an essential part of
                everyday life and redefine the future of computing.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-700 p-6 rounded-lg mt-10">
                <h2 className="text-2xl font-bold mb-3">
                  Key Highlights
                </h2>

                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Voice AI is becoming more popular than text input.</li>
                  <li>Major tech companies are investing in conversational AI.</li>
                  <li>Voice improves accessibility and productivity.</li>
                  <li>AI assistants can complete tasks through conversation.</li>
                  <li>Privacy remains an important challenge.</li>
                </ul>
              </div>

            </div>

            {/* Sidebar */}
            <div>

              <div className="bg-gray-50 rounded-lg p-6 shadow">

                <h2 className="text-2xl font-bold mb-4">
                  Quick Facts
                </h2>

                <div className="space-y-4">

                  <div>
                    <p className="font-semibold">Category</p>
                    <p>Artificial Intelligence</p>
                  </div>

                  <div>
                    <p className="font-semibold">Technology</p>
                    <p>Voice AI</p>
                  </div>

                  <div>
                    <p className="font-semibold">Applications</p>
                    <p>Smart Assistants & Productivity</p>
                  </div>

                  <div>
                    <p className="font-semibold">Future</p>
                    <p>Voice-Based Computing</p>
                  </div>

                </div>

              </div>

              <div className="bg-yellow-100 rounded-lg p-5 mt-8">

                <h2 className="text-xl font-bold mb-3">
                  Why This Matters
                </h2>

                <p className="text-gray-700 leading-7">
                  Natural voice conversations could replace keyboards for many
                  daily computing tasks, making technology faster, easier, and
                  more accessible for everyone.
                </p>

              </div>

            </div>

          </div>

          {/* Feedback */}

          <div className="mt-16 border-t pt-10">

            <h2 className="text-3xl font-bold text-center">
              Share Your Feedback
            </h2>

            <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow mt-8">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-lg mb-4"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded-lg mb-4"
              />

              <textarea
                rows="5"
                placeholder="Write your feedback..."
                className="w-full border p-3 rounded-lg mb-4"
              ></textarea>

              <button className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800">
                Submit Feedback
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default News3;