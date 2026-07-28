import React from "react";
import image1 from "../assets/tech_image_3.png";

const News1 = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">

                {/* Hero Image */}
                <div className="flex justify-center mt-20">
                    <img
                        src={image1}
                        alt="Microsoft AI Models"
                        className=" h-[500px] object-cover"
                    />
                </div>

                <div className="p-10">
                    <span className="bg-blue-700 text-white px-4 py-2 rounded-full font-semibold">
                        Technology
                    </span>

                    <h1 className="text-5xl font-bold mt-5 leading-tight">
                        Microsoft Expands MAI AI Models Across Copilot, Excel, Outlook, and
                        Foundry Platform
                    </h1>

                    <p className="text-gray-500 mt-3">
                        July 2026 • Technology News
                    </p>

                    <hr className="my-8" />

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Main Article */}
                        <div className="md:col-span-2">
                            <p className="text-lg text-gray-700 leading-8 mb-6">
                                Microsoft has started deploying its in-house
                                <b> MAI (Microsoft AI) models </b>
                                across several of its flagship products, including
                                <b> GitHub Copilot, Excel, and Outlook</b>. The company plans to
                                gradually increase the use of these models whenever they perform
                                as well as or better than other leading AI systems.
                            </p>

                            <p className="text-lg text-gray-700 leading-8 mb-6">
                                Microsoft CEO <b>Satya Nadella</b> said the company is already
                                seeing promising early results and plans to expand the same
                                strategy to
                                <b> Copilot Chat, PowerPoint,</b> and additional Microsoft
                                services in the near future.
                            </p>

                            <p className="text-lg text-gray-700 leading-8 mb-6">
                                Instead of relying only on AI benchmark tests, Microsoft trains
                                its MAI models using
                                <b> real customer workflows, product tools, and practical
                                    business tasks.</b>
                                This allows the models to become highly optimized for specific
                                use cases while delivering strong performance.
                            </p>

                            <p className="text-lg text-gray-700 leading-8 mb-6">
                                According to Microsoft, these specialized AI models can
                                <b> match or even outperform general-purpose AI models </b>
                                for certain tasks while requiring fewer tokens. Lower token
                                usage helps reduce AI computing costs and improves efficiency,
                                making enterprise AI solutions more affordable.
                            </p>

                            <p className="text-lg text-gray-700 leading-8 mb-6">
                                Microsoft also announced that the same AI development framework
                                will be available through
                                <b> Microsoft Foundry</b>. Businesses will be able to build
                                intelligent AI agents using their own datasets, workflows,
                                evaluation methods, and business context.
                            </p>

                            <p className="text-lg text-gray-700 leading-8 mb-6">
                                Nadella emphasized that enterprises can follow the same approach
                                Microsoft uses internally by combining proprietary evaluations,
                                reinforcement learning techniques, workflows, and organizational
                                data to create powerful AI-driven business applications.
                            </p>

                            {/* Key Highlights */}
                            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-lg mt-10">
                                <h2 className="text-2xl font-bold mb-3">
                                    Key Highlights
                                </h2>

                                <ul className="list-disc ml-6 space-y-3 text-gray-700">
                                    <li>Microsoft deploys MAI models in GitHub Copilot, Excel, and Outlook.</li>
                                    <li>Expansion planned for Copilot Chat and PowerPoint.</li>
                                    <li>Models are trained using real customer workflows.</li>
                                    <li>Specialized AI models reduce token usage and computing costs.</li>
                                    <li>Microsoft Foundry enables businesses to build custom AI agents.</li>
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
                                        <p>Microsoft</p>
                                    </div>

                                    <div>
                                        <p className="font-semibold">AI Platform</p>
                                        <p>MAI (Microsoft AI)</p>
                                    </div>

                                    <div>
                                        <p className="font-semibold">Products</p>
                                        <p>GitHub Copilot, Excel, Outlook</p>
                                    </div>

                                    <div>
                                        <p className="font-semibold">Upcoming Expansion</p>
                                        <p>Copilot Chat & PowerPoint</p>
                                    </div>

                                    <div>
                                        <p className="font-semibold">Enterprise Tool</p>
                                        <p>Microsoft Foundry</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-100 rounded-lg p-5 mt-8">
                                <h2 className="text-xl font-bold mb-3">
                                    Why This Matters
                                </h2>

                                <p className="text-gray-700 leading-7">
                                    Microsoft's strategy shows how AI is shifting from general
                                    models to specialized systems trained on real business
                                    workflows. By reducing computing costs while improving
                                    performance, the company aims to make AI more efficient for
                                    both its products and enterprise customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News1;