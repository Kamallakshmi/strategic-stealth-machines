"use client";
import { useState, useRef } from "react";
import { solutions } from "@/contants/solutions";
import Image from "next/image";
// import Link from "next/link";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing from react-icons
import ShuffleHeroSolution from "@/components/ShuffleHeroSolution"; // Adjust the path based on your file structure
import FooterCard from "@/components/FooterCard";
import { SlideTabsExample } from "@/components/SlideTab";

const Solutions = () => {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(
    "Manufacturing"
  );
  const contentRef = useRef<HTMLDivElement | null>(null); // Create a ref for the content section

  const renderSolutionContent = () => {
    switch (selectedSolution) {
      case "Manufacturing":
        return (
          <div className="transition-opacity duration-500 ease-in-out opacity-100 transform-gpu">
            <h3 className="text-2xl font-semibold text-blue-500 text-center mb-3">
              AI Driven Decisions in Manufacturing
            </h3>
            <p className="text-lg font-medium text-white text-center mb-5">
              Our AI-driven applications for manufacturing help optimize
              processes, increase efficiency, and reduce costs.
            </p>
            <ul className="mt-5 text-lg lg:pl-16 text-white list-none space-y-2">
              <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br  before:-translate-y-1/2 before:shadow-[0_0_4px_2px_rgba(255,215,0,0.8)]">
                Predictive Maintenance for IoT Devices
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br  before:-translate-y-1/2 before:shadow-[0_0_4px_2px_rgba(255,215,0,0.8)]">
                Real-Time Data Analysis
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br  before:-translate-y-1/2 before:shadow-[0_0_4px_2px_rgba(255,215,0,0.8)]">
                IoT-Driven Process Automation
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br  before:-translate-y-1/2 before:shadow-[0_0_4px_2px_rgba(255,215,0,0.8)]">
                AI-driven Asset Performance Management
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br  before:-translate-y-1/2 before:shadow-[0_0_4px_2px_rgba(255,215,0,0.8)]">
                Energy Optimization in IoT Networks
              </li>
            </ul>
          </div>
        );

      case "Automotive":
        return (
          <div className="transition-opacity duration-500 ease-in-out opacity-100 transform-gpu">
            <h3 className="text-2xl font-semibold text-blue-500 text-center mb-3">
              AI Driven Decisions in Automotive
            </h3>
            <p className="text-lg font-medium text-white text-center mb-5">
              Our AI solutions for the automotive industry focus on safety,
              automation, and enhanced customer experiences.
            </p>
            <ul className="mt-5 text-lg lg:pl-16 text-white list-none space-y-2">
              <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br  before:-translate-y-1/2 before:shadow-[0_0_4px_2px_rgba(255,215,0,0.8)]">
                Predictive Maintenance for IoT Devices
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br  before:-translate-y-1/2 before:shadow-[0_0_4px_2px_rgba(255,215,0,0.8)]">
                Real-Time Data Analysis
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br  before:-translate-y-1/2 before:shadow-[0_0_4px_2px_rgba(255,215,0,0.8)]">
                IoT-Driven Process Automation
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br  before:-translate-y-1/2 before:shadow-[0_0_4px_2px_rgba(255,215,0,0.8)]">
                AI-driven Asset Performance Management
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br  before:-translate-y-1/2 before:shadow-[0_0_4px_2px_rgba(255,215,0,0.8)]">
                Energy Optimization in IoT Networks
              </li>
            </ul>
          </div>
        );

      case "IOT Solutions":
        return (
          <div className="transition-opacity duration-500 ease-in-out opacity-100 transform-gpu">
            <h3 className="text-2xl font-semibold text-blue-500 text-center mb-3">
              AI Driven Decisions in IoT Solutions
            </h3>
            <p className="text-lg font-medium text-white text-center mb-5">
              Our AI solutions for IoT focus on real-time monitoring,
              data-driven insights, and process automation for improved
              outcomes.
            </p>
            <ul className="mt-5 text-lg lg:pl-16 text-white list-none space-y-2">
              <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br  before:-translate-y-1/2 before:shadow-[0_0_4px_2px_rgba(255,215,0,0.8)]">
                Predictive Maintenance for IoT Devices
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br  before:-translate-y-1/2 before:shadow-[0_0_4px_2px_rgba(255,215,0,0.8)]">
                Real-Time Data Analysis
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br  before:-translate-y-1/2 before:shadow-[0_0_4px_2px_rgba(255,215,0,0.8)]">
                IoT-Driven Process Automation
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br  before:-translate-y-1/2 before:shadow-[0_0_4px_2px_rgba(255,215,0,0.8)]">
                AI-driven Asset Performance Management
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:rounded-full before:bg-gradient-to-br  before:-translate-y-1/2 before:shadow-[0_0_4px_2px_rgba(255,215,0,0.8)]">
                Energy Optimization in IoT Networks
              </li>
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  const handleSolutionClick = (solutionTitle: string) => {
    if (selectedSolution === solutionTitle) {
      // If the same solution is clicked again, hide the content without changing flow
      setSelectedSolution(solutionTitle);
    } else {
      // Show the clicked solution's content but don't scroll the page
      setSelectedSolution(solutionTitle);
    }
  };

  return (
    <main className="relative bg-navy animate-gradient-bg">
      {/* Background glassmorphism effect covering all sections except the footer */}
      <div className="absolute z-10 bg-gradient-to-br from-deepBlue-900 to-blue-900 opacity-60 backdrop-blur-lg rounded-2xl shadow-xl"></div>

      {/* Floating Icons or Elements */}
      <div className="absolute top-10 right-10 w-32 h-32  bg-gradient-to-r from-amber-300 to-indigo-900 rounded-full opacity-40 blur-lg animate-pulse"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-indigo-400 rounded-full opacity-40 blur-xl animate-spin-slow"></div>
      {/* <div className="absolute bottom-20 left-10 w-24 h-24 bg-yellow rounded-full opacity-30 blur-xl animate-slideInLeft"></div> */}
      <section>
        <SlideTabsExample />
      </section>
      <section className="container mx-auto flex flex-col space-y-10 py-10">
        <ShuffleHeroSolution />
      </section>

      <section>
        <div className="lg:col-span-3 flex flex-wrap justify-center md:justify-evenly gap-4 p-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex flex-col size-40 md:size-60 justify-center items-center space-y-5 transition-transform duration-300 ease-in-out transform ${
                selectedSolution === solution.title ? "scale-105" : ""
              } cursor-pointer`}
              onClick={() => handleSolutionClick(solution.title)}
            >
              <div className="relative p-0.5 bg-gradient-to-r from-yellow to-indigo-950 rounded-lg overflow-hidden">
                <div className="absolute inset-1 conic-gradient-border rounded-lg animate-border-spin"></div>
                <div className="relative bg-navy rounded-lg">
                  <Image
                    src={solution.imageURL}
                    alt={solution.alt}
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <span className="relative w-fit tracking-wide text-white">
                {solution.title}
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-yellow via-indigo-900 to-navy"></span>
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* Render the solution content dynamically below the images */}
      <div
        ref={contentRef}
        className="container mx-auto grid lg:grid-cols-3 gap-4 p-10"
      >
        <div className="col-span-full">
          {selectedSolution && (
            <div className="transition-opacity duration-700 ease-in-out opacity-100 transform">
              {renderSolutionContent()}
            </div>
          )}
        </div>
      </div>
      <footer>
        <FooterCard />
      </footer>
    </main>
  );
};

export default Solutions;
