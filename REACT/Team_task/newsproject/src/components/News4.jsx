
import image4 from "../assets/tech_image_1.png";
const News4= () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">

        {/* Hero Image */}
                       <div className="flex justify-center mt-20">
                    <img
                        src={image4}
                        alt="Microsoft AI Models"
                        className=" h-[500px] object-cover"
                    />
                </div>

        <div className="p-10">

          <span className="bg-green-700 text-white px-4 py-2 rounded-full font-semibold">
            Technology
          </span>

          <h1 className="text-5xl font-bold mt-5 leading-tight">
            Infosys Names Insider Ashiss Kumar Dash as Next CEO, Strengthens AI Vision
          </h1>

          <p className="text-gray-500 mt-3">
            July 24, 2026 • 
          </p>

          <hr className="my-8" />

          <div className="grid md:grid-cols-3 gap-8">

            {/* Main Article */}
            <div className="md:col-span-2">

              <p className="text-lg text-gray-700 leading-8 mb-6">
                Infosys has announced veteran executive <b>Ashiss Kumar Dash</b>
                as its next Managing Director and Chief Executive Officer.
                Dash will officially assume the CEO role on
                <b> April 1, 2027</b>, following the completion of Salil Parekh's
                tenure. The transition will begin months in advance to ensure
                smooth leadership continuity.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                Having spent more than three decades at Infosys, Dash has
                successfully led multiple global business units, managed
                strategic international clients, and played a major role in the
                company's digital transformation journey. His appointment
                highlights Infosys' confidence in internal leadership and its
                long-term growth strategy.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                The announcement was made alongside Infosys' first-quarter FY2027
                financial results. The company reported healthy revenue growth
                driven by strong demand for cloud computing, cybersecurity,
                enterprise modernization, and Artificial Intelligence services.
                Infosys also secured several major contracts across banking,
                healthcare, retail, manufacturing, and telecommunications.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                Artificial Intelligence continues to be one of the company's
                fastest-growing business segments. Infosys has expanded its AI
                portfolio by offering intelligent automation, Generative AI
                solutions, machine learning platforms, and enterprise AI
                applications that help organizations improve efficiency and
                customer experiences.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                The company has also invested heavily in employee development by
                launching AI certification programs covering Large Language
                Models (LLMs), Generative AI, cloud platforms, and intelligent
                automation. Thousands of engineers have already completed these
                training programs to prepare for the next generation of software
                development.
              </p>

              <p className="text-lg text-gray-700 leading-8 mb-6">
                Although Infosys lowered its annual revenue growth forecast due
                to cautious spending from global clients, analysts remain
                optimistic about the long-term outlook. They believe AI adoption
                will continue driving demand for digital transformation services
                across industries worldwide.
              </p>

              <div className="bg-green-50 border-l-4 border-green-700 p-6 rounded-lg mt-10">

                <h2 className="text-2xl font-bold mb-3">
                  Key Highlights
                </h2>

                <ul className="list-disc ml-6 space-y-3 text-gray-700">
                  <li>Infosys appoints Ashiss Kumar Dash as CEO Designate.</li>
                  <li>Dash officially becomes CEO on April 1, 2027.</li>
                  <li>AI and digital transformation remain key growth areas.</li>
                  <li>Thousands of employees are receiving AI training.</li>
                  <li>Infosys continues expanding cloud and cybersecurity services.</li>
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
                    <p className="font-semibold">Company</p>
                    <p>Infosys Ltd.</p>
                  </div>

                  <div>
                    <p className="font-semibold">CEO Designate</p>
                    <p>Ashiss Kumar Dash</p>
                  </div>

                  <div>
                    <p className="font-semibold">Effective Date</p>
                    <p>April 1, 2027</p>
                  </div>

                  <div>
                    <p className="font-semibold">Sector</p>
                    <p>Information Technology</p>
                  </div>

                  <div>
                    <p className="font-semibold">Focus Areas</p>
                    <p>AI, Cloud, Cybersecurity, Digital Transformation</p>
                  </div>

                </div>

              </div>

              <div className="bg-yellow-100 rounded-lg p-5 mt-8">

                <h2 className="text-xl font-bold mb-3">
                  Why This Matters
                </h2>

                <p className="text-gray-700 leading-7">
                  Leadership transitions play a major role in shaping the future
                  of technology companies. With AI becoming central to business
                  operations, Dash's experience is expected to strengthen
                  Infosys' innovation strategy while helping clients accelerate
                  digital transformation worldwide.
                </p>

              </div>

            </div>

          </div>

         


        

            </div>

          </div>

        </div>

      
  );
};

export default News4;