"use client";
import { solutions } from "@/contants/solutions";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ShuffleHeroSolution from "@/components/ShuffleHeroSolution"; // Adjust the path based on your file structure
import FooterCard from "@/components/FooterCard";
import { SlideTabsExample } from "@/components/SlideTab";

const Solutions = () => {
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
        {/* <div className="lg:col-span-3 grid md:grid-cols-3 grid-flow-row gap-7 p-10 w-full"> */}
        <div className="lg:col-span-3 flex flex-wrap justify-center items-center h-full gap-20 p-10">
          {solutions.map((solution, index) => {
            if (solution.title === "AI Solutions")
              return (
                <Dialog key={index}>
                  <DialogTrigger>
                    <div
                      key={index}
                      className={`flex flex-col h-fit justify-center items-center space-y-5 transition-transform duration-300 ease-in-out transform cursor-pointer`}
                    >
                      <div className="relative p-0.5 bg-gradient-to-r from-yellow to-indigo-950 rounded-lg overflow-hidden">
                        <div className="absolute inset-1 conic-gradient-border rounded-lg animate-border-spin"></div>
                        <div className="relative bg-navy rounded-lg">
                          <Image
                            src={solution.imageURL}
                            alt={solution.alt}
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg size-40 md:size-60 object-cover"
                          />
                        </div>
                      </div>
                      <span className="relative text-center tracking-wide text-white">
                        {solution.title}
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-yellow via-indigo-900 to-navy"></span>
                      </span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl overflow-y-auto max-h-screen">
                    <DialogHeader>
                      <DialogTitle className="text-4xl font-bold text-blue-500">
                        AI Solutions
                      </DialogTitle>
                      <DialogDescription className="mt-4 text-base">
                        Optimize industrial operations with our AI solutions
                        designed for predictive maintenance, process
                        optimization, and quality control.
                      </DialogDescription>
                    </DialogHeader>
                    <main className="py-10 px-8 bg-gray-100">
                      <section className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Predictive Analytics
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          Use AI to predict equipment failures and reduce
                          downtime.
                        </p>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Smart Manufacturing
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          Leverage AI to monitor and adjust production in
                          real-time for efficiency and cost savings.
                        </p>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          AI Research Services
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          Push the boundaries of AI innovation with our AI
                          Research services, designed to apply cutting-edge AI
                          technologies to real-world problems.
                        </p>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Building AI Agents for Specific Tasks
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          We specialize in developing AI Agents for specialized
                          tasks, designed to automate and improve business
                          operations.
                        </p>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          <li>Customer Service Agents</li>
                          <li>Inventory Management Agents</li>
                          <li>AI Sales Assistants</li>
                        </ul>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          AI Digital Twin Solutions
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          Our Digital Twin solutions allow you to create
                          real-time, virtual replicas of physical assets such as
                          processes, equipment, and entire plants.
                        </p>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          What is a Digital Twin?
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          A Digital Twin is a dynamic virtual model of a
                          physical object, process, or system that is
                          continuously updated with real-time data from sensors
                          and IoT devices.
                        </p>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Digital Twins for Processes
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          Gain a comprehensive view of your production or
                          manufacturing processes by implementing Digital Twins
                          for Processes.
                        </p>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          <li>Real-Time Monitoring and Control</li>
                          <li>Process Optimization</li>
                          <li>Predictive Analytics</li>
                        </ul>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Digital Twins for Equipment
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          Digital Twins for Equipment replicate the performance
                          of individual machines and equipment, offering deep
                          insights into machine health and maintenance.
                        </p>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          <li>Predictive Maintenance</li>
                          <li>Fault Detection and Diagnosis</li>
                          <li>Performance Benchmarking</li>
                        </ul>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Digital Twins for Plants
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          At the plant level, Digital Twins for Plants create a
                          virtual model of the entire facility, integrating data
                          from all processes, equipment, and systems into a
                          single, unified platform.
                        </p>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          <li>Holistic Plant Management</li>
                          <li>Simulation and Scenario Planning</li>
                          <li>Sustainability and Energy Optimization</li>
                          <li>Emergency Preparedness</li>
                        </ul>
                      </section>
                    </main>
                  </DialogContent>
                </Dialog>
              );
            if (solution.title === "AI Research")
              return (
                <Dialog key={index}>
                  <DialogTrigger>
                    <div
                      key={index}
                      className={`flex flex-col h-fit justify-center items-center space-y-5 transition-transform duration-300 ease-in-out transform cursor-pointer`}
                    >
                      <div className="relative p-0.5 bg-gradient-to-r from-yellow to-indigo-950 rounded-lg overflow-hidden">
                        <div className="absolute inset-1 conic-gradient-border rounded-lg animate-border-spin"></div>
                        <div className="relative bg-navy rounded-lg">
                          <Image
                            src={solution.imageURL}
                            alt={solution.alt}
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg size-40 md:size-60 object-cover"
                          />
                        </div>
                      </div>
                      <span className="relative text-center tracking-wide text-white">
                        {solution.title}
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-yellow via-indigo-900 to-navy"></span>
                      </span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl overflow-y-auto max-h-screen">
                    <DialogHeader>
                      <DialogTitle className="text-4xl font-bold text-blue-500">
                        AI Research
                      </DialogTitle>
                    </DialogHeader>
                    <main className="px-8 bg-gray-100">
                      <section className="max-w-7xl mx-auto ">
                        <p className="py-10 text-lg leading-loose">
                          Our futuristic AI research aims to create the next
                          generation of intelligent systems that will drive
                          human progress. By focusing on areas like AGI, Quantum
                          AI, and Brain-Computer Interfaces, we are not only
                          solving today&apos;s challenges but also paving the
                          way for a future where AI enhances every aspect of
                          human life. We work closely with global partners,
                          industries, and governments to ensure that our AI
                          innovations are ethical, scalable, and ready to make a
                          positive impact on society.
                        </p>
                      </section>
                    </main>
                  </DialogContent>
                </Dialog>
              );
            if (solution.title === "IOT and Industrial Automation")
              return (
                <Dialog key={index}>
                  <DialogTrigger>
                    <div
                      key={index}
                      className={`flex flex-col h-fit justify-center items-center space-y-5 transition-transform duration-300 ease-in-out transform cursor-pointer`}
                    >
                      <div className="relative p-0.5 bg-gradient-to-r from-yellow to-indigo-950 rounded-lg overflow-hidden">
                        <div className="absolute inset-1 conic-gradient-border rounded-lg animate-border-spin"></div>
                        <div className="relative bg-navy rounded-lg">
                          <Image
                            src={solution.imageURL}
                            alt={solution.alt}
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg size-40 md:size-60 object-cover"
                          />
                        </div>
                      </div>
                      <span className="relative text-center tracking-wide text-white">
                        {solution.title}
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-yellow via-indigo-900 to-navy"></span>
                      </span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl overflow-y-auto max-h-screen">
                    <DialogHeader>
                      <DialogTitle className="text-4xl font-bold text-blue-500">
                        IOT and Industrial Automation
                      </DialogTitle>
                      <DialogDescription className="mt-4 text-base">
                        Our Industrial Automation solutions help industries
                        transform their operations by integrating cutting-edge
                        technologies like AI, robotics, and IoT to automate
                        processes, enhance efficiency, and drive innovation.
                      </DialogDescription>
                    </DialogHeader>
                    <main className="py-10 px-8 bg-gray-100">
                      <section className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900">
                          PLC and SCADA Systems
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          Control machinery and processes with our advanced PLC
                          systems, which allow for the seamless execution of
                          industrial tasks, monitoring, and control of machinery
                          in real time.
                        </p>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          <li>Programmable Logic Controllers (PLC)</li>
                          <li>
                            Supervisory Control and Data Acquisition (SCADA)
                          </li>
                        </ul>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Process Automation
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          Automate manufacturing processes from raw material
                          handling to packaging with intelligent sensors,
                          actuators, and AI algorithms that control and optimize
                          every step.
                        </p>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          <li>End-to-End Process Automation</li>
                          <li>Batch Processing</li>
                        </ul>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Smart Warehousing & Logistics Automation
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          Automate warehousing processes with Autonomous Guided
                          Vehicles (AGVs) and Automated Storage and Retrieval
                          Systems (ASRS) that manage inventory, move products,
                          and fulfill orders efficiently.
                        </p>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          <li>Autonomous Guided Vehicles (AGVs)</li>
                          <li>
                            Automated Storage and Retrieval Systems (ASRS)
                          </li>
                          <li>Intelligent Logistics</li>
                        </ul>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Energy Management Automation
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          Improve energy efficiency and reduce operational costs
                          with Energy Management Systems (EMS) that optimize
                          power usage, minimize waste, and automatically adjust
                          energy consumption based on real-time demand.
                        </p>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          <li>Energy Management Systems (EMS)</li>
                          <li>Sustainability Integration</li>
                        </ul>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Intelligent Transport Systems (ITS)
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          Our Intelligent Transport System (ITS) solutions are
                          designed to make transportation safer, more efficient,
                          and more reliable.
                        </p>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          <li>
                            Automatic Vehicle Location (AVL) and Fleet
                            Management Systems
                          </li>
                          <ul className="mt-1 list-disc list-inside text-gray-700">
                            <li>
                              Monitor real-time vehicle locations with GPS
                              tracking
                            </li>
                            <li>
                              Get actionable insights into vehicle status,
                              driver behavior, and overall fleet efficiency
                            </li>
                            <li>Enable predictive maintenance</li>
                          </ul>
                          <li>Advanced Traveler Information Systems (ATIS)</li>
                          <ul className="mt-1 list-disc list-inside text-gray-700">
                            <li>Live traffic updates</li>
                            <li>
                              Route planning with estimated times of arrival
                              (ETA)
                            </li>
                            <li>
                              Delay alerts, weather conditions, and alternate
                              route suggestions
                            </li>
                          </ul>
                        </ul>
                      </section>
                    </main>
                  </DialogContent>
                </Dialog>
              );
            if (solution.title === "Automotive and Aerospace / Drone")
              return (
                <Dialog key={index}>
                  <DialogTrigger>
                    <div
                      key={index}
                      className={`flex flex-col h-fit justify-center items-center space-y-5 transition-transform duration-300 ease-in-out transform cursor-pointer`}
                    >
                      <div className="relative p-0.5 bg-gradient-to-r from-yellow to-indigo-950 rounded-lg overflow-hidden">
                        <div className="absolute inset-1 conic-gradient-border rounded-lg animate-border-spin"></div>
                        <div className="relative bg-navy rounded-lg">
                          <Image
                            src={solution.imageURL}
                            alt={solution.alt}
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg size-40 md:size-60 object-cover"
                          />
                        </div>
                      </div>
                      <span className="relative text-center tracking-wide text-white">
                        {solution.title}
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-yellow via-indigo-900 to-navy"></span>
                      </span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl overflow-y-auto max-h-screen">
                    <DialogHeader>
                      <DialogTitle className="text-4xl font-bold text-blue-500">
                        Automotive Services
                      </DialogTitle>
                      <DialogDescription className="mt-4 text-base">
                        Our Automotive Services combine advanced engineering,
                        cutting-edge AI, and innovative design to provide
                        comprehensive solutions for the automotive industry.
                        From concept to production, we offer a range of services
                        that enhance vehicle performance, safety, and user
                        experience.
                      </DialogDescription>
                    </DialogHeader>
                    <main className="py-10 px-8 bg-gray-100">
                      <section className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Vehicle Design and Simulation
                        </h2>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          <li>End-to-End Design</li>
                          <li>Performance Simulation</li>
                        </ul>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Autonomous Vehicle Development
                        </h2>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          <li>
                            AI-Powered ADAS (Advanced Driver Assistance Systems)
                          </li>
                          <li>Autonomous Driving Systems</li>
                        </ul>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Connected Vehicle Solutions
                        </h2>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          <li>V2X Communication</li>
                          <li>Infotainment Systems</li>
                        </ul>
                      </section>
                      <hr className="my-12" />

                      <section className="max-w-7xl mx-auto">
                        <h1 className="text-4xl font-bold text-gray-900">
                          Unmanned Aerial Systems (UAS) / Drones
                        </h1>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Custom Drone Design
                        </h2>
                        <p className="mt-4 text-lg text-gray-700">
                          We offer end-to-end drone design services, creating
                          bespoke Unmanned Aerial Systems (UAS) for various
                          applications, including surveillance, delivery,
                          mapping, and industrial inspections.
                        </p>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Drone Automation and AI
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          Our AI-powered drones are designed to operate
                          autonomously, using real-time data processing and
                          advanced decision-making algorithms.
                        </p>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Flight Control Systems
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          We develop and implement sophisticated flight control
                          systems for drones, ensuring stable and reliable
                          operations under various conditions.
                        </p>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h2 className="text-2xl font-bold text-gray-900">
                          Swarm Drone Technology
                        </h2>
                        <p className="mt-2 text-lg text-gray-700">
                          Our research includes swarm drone technology, enabling
                          multiple drones to operate in coordination,
                        </p>
                      </section>
                    </main>
                  </DialogContent>
                </Dialog>
              );
            if (solution.title === "Custom IT Solutions")
              return (
                <Dialog key={index}>
                  <DialogTrigger>
                    <div
                      key={index}
                      className={`flex flex-col h-fit justify-center items-center space-y-5 transition-transform duration-300 ease-in-out transform cursor-pointer`}
                    >
                      <div className="relative p-0.5 bg-gradient-to-r from-yellow to-indigo-950 rounded-lg overflow-hidden">
                        <div className="absolute inset-1 conic-gradient-border rounded-lg animate-border-spin"></div>
                        <div className="relative bg-navy rounded-lg">
                          <Image
                            src={solution.imageURL}
                            alt={solution.alt}
                            width={300}
                            height={300}
                            className="rounded-lg shadow-lg size-40 md:size-60 object-cover"
                          />
                        </div>
                      </div>
                      <span className="relative text-center tracking-wide text-white">
                        {solution.title}
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-yellow via-indigo-900 to-navy"></span>
                      </span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl overflow-y-auto max-h-screen">
                    <DialogHeader>
                      <DialogTitle className="text-4xl font-bold text-blue-500">
                        Custom IT Solutions
                      </DialogTitle>
                    </DialogHeader>
                    <main className="py-10 px-8 bg-gray-100">
                      <section className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900">
                          Passenger Booking Solutions
                        </h2>
                        <p className="mt-4 text-lg text-gray-700">
                          Our Passenger Booking Solutions streamline the entire
                          travel experience by integrating advanced
                          technologies.
                        </p>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          <li>Real-Time Booking</li>
                          <li>Payment Gateway Integration</li>
                          <li>Booking Management</li>
                        </ul>
                      </section>

                      <section className="max-w-7xl mx-auto mt-12">
                        <h1 className="text-4xl font-bold text-gray-900">
                          E-commerce Solutions
                        </h1>
                        <p className="mt-4 text-lg text-gray-700">
                          Our E-commerce Solutions are designed to help you
                          scale your online business and deliver a seamless
                          shopping experience.
                        </p>
                        <ul className="mt-2 list-disc list-inside text-gray-700">
                          <li>Custom Online Stores</li>
                          <li>AI-powered Personalization</li>
                          <li>Omni-Channel Integration</li>
                        </ul>
                      </section>
                    </main>
                  </DialogContent>
                </Dialog>
              );
          })}
        </div>
      </section>
      <footer>
        <FooterCard />
      </footer>
    </main>
  );
};

export default Solutions;
