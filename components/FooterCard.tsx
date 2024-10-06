import React from "react";
import Link from "next/link";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing social media icons
import Image from "next/image";

const FooterCard: React.FC = () => {
  return (
    <footer className="relative text-navy py-10 bg-white z-20">
      <div className="container mx-auto grid lg:grid-cols-5 gap-10 px-7">
        <div className="lg:col-span-2 flex flex-col items-center lg:items-start space-y-2.5 relative px-5 pb-10 border border-transparent rounded-lg bg-gradient-to-b from-navy via-indigo-900 to-gray-200 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy p-1 rounded-lg shadow-2xl"></div>
          {/* <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <span className="text-xl font-semibold text-blue-500">
              Strategic Stealth Machines
            </span> */}
          {/* <div className="flex items-center"> */}
          <Image
            src={"/logo.png"}
            alt={"Strategic Stealth Machines"}
            width={200}
            height={80}
            className="brightness-200"
          />
          {/* </div> */}
          <p className="relative z-10 text-center lg:text-left text-md leading-relaxed text-gray-300">
            Our AI solutions enhance the total reliability of the organizations
            in their processes. AI plays a crucial role in data-driven decisions
            for process optimizations.
          </p>
          <p className="relative z-10 text-center lg:text-left text-md leading-relaxed text-gray-300">
            AI Innovation transforms organizations to
          </p>
          <ul className="relative z-10 list-disc list-inside text-center lg:text-left text-md leading-relaxed text-gray-300">
            <li>Predict realistic results for their processes</li>
            <li>Enhance customer centric processes</li>
          </ul>
        </div>

        {/* Middle Section 1: Quick Links */}
        <div className="lg:col-span-1 flex flex-col items-center lg:items-start space-y-5 lg:pl-10">
          <h4 className="font-semibold text-lg text-blue-500">Quick Links</h4>
          <ul className="space-y-3 text-center lg:text-left">
            <li>
              <Link
                href="/"
                className="hover:underline hover:text-blue-500 transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/solutions"
                className="hover:underline hover:text-blue-500 transition-all"
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:underline hover:text-blue-500 transition-all"
              >
                Products
              </Link>
            </li>
            {/* <li>
              <Link
                href="/contact"
                className="hover:underline hover:text-blue-500 transition-all"
              >
                Contact
              </Link>
            </li> */}
          </ul>
        </div>

        {/* Middle Section 2: Get in Touch */}
        {/* <div className="lg:col-span-1 flex flex-col items-center lg:items-start space-y-5">
          <h4 className="font-semibold text-lg text-blue-500">Get in Touch</h4>
          <p className="text-center lg:text-left text-md leading-relaxed text-navy">
            XXX Street, YYY <br />
            ZZZ - 123456 <br />
            Phone: 0123 456 789
          </p>
        </div> */}

        {/* Right Section: Request Demo */}
        <div className="lg:col-span-1 flex flex-col items-center lg:items-start space-y-5">
          <h4 className="font-semibold text-lg text-blue-500">Request Demo</h4>
          <p className="text-navy">
            For product-related demo, send your request
          </p>
          <Link
            href="mailto:contact@sstealthmac.com"
            className="bg-yellow text-black font-semibold px-3 py-2 rounded-md shadow-md hover:scale-95 transform transition-transform duration-300"
          >
            contact@sstealthmac.com
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-md">
        <p className="text-navy">
          © Strategic Stealth Machines 2024 | All Rights Reserved
        </p>
        {/* <div className="flex justify-center space-x-3 mt-3">
          <Link
            href="/"
            className="hover:text-blue-500 transition-all transform hover:scale-110"
          >
            <FaFacebookF className="w-5 h-5" />
          </Link>
          <Link
            href="/"
            className="hover:text-blue-400 transition-all transform hover:scale-110"
          >
            <FaTwitter className="w-5 h-5" />
          </Link>
          <Link
            href="/"
            className="hover:text-blue-500 transition-all transform hover:scale-110"
          >
            <FaInstagram className="w-5 h-5" />
          </Link>
        </div> */}
      </div>
    </footer>
  );
};

export default FooterCard;
