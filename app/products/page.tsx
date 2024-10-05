"use client";

import { useState, useRef } from "react";
import { products } from "@/contants/products"; // Assuming you have a products.ts file
import Image from "next/image";
import ShuffleHeroProduct from "@/components/ShuffleHeroProduct"; // Adjust the path based on your file structure
import FooterCard from "@/components/FooterCard";
import { SlideTabsExample } from "@/components/SlideTab";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>("B2B");
  const contentRef = useRef<HTMLDivElement | null>(null);

  const renderProductContent = () => {
    switch (selectedProduct) {
      case "B2B":
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

      case "B2C":
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

      // Add more cases for other products as necessary
      default:
        return null;
    }
  };

  const handleProductClick = (productTitle: string) => {
    if (selectedProduct === productTitle) {
      setSelectedProduct(productTitle);
    } else {
      setSelectedProduct(productTitle);
    }
  };

  return (
    <main className="relative bg-navy animate-gradient-bg">
      <div className="absolute z-10 bg-gradient-to-br from-deepBlue-900 to-blue-900 opacity-60 backdrop-blur-lg rounded-2xl shadow-xl"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-amber-300 to-indigo-900 rounded-full opacity-40 blur-lg animate-pulse"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-indigo-400 rounded-full opacity-40 blur-xl animate-spin-slow"></div>
      <nav>
        <SlideTabsExample />
      </nav>
      <section className="container mx-auto flex flex-col space-y-10 py-10">
        <ShuffleHeroProduct />
      </section>

      <section>
        <div className="lg:col-span-4 flex flex-wrap justify-center md:justify-evenly gap-4 p-10">
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex flex-col size-40 md:size-80 justify-center items-center space-y-5 transition-transform duration-300 ease-in-out transform ${
                selectedProduct === product.title ? "scale-105" : ""
              } cursor-pointer`}
              onClick={() => handleProductClick(product.title)}
            >
              <div className="relative p-0.5 bg-gradient-to-r from-yellow to-indigo-950 rounded-lg overflow-hidden">
                <div className="absolute inset-1 conic-gradient-border rounded-lg animate-border-spin"></div>
                <div className="relative bg-navy rounded-lg flex justify-center items-center">
                  {/* Set fixed width and height for the images */}
                  <Image
                    src={product.imageURL}
                    alt={product.alt}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              </div>
              <span className="relative w-fit tracking-wide text-white">
                {product.title}
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-yellow via-indigo-900 to-navy"></span>
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* Render product content dynamically below the images */}
      <div
        ref={contentRef}
        className="container mx-auto grid lg:grid-cols-3 gap-4 p-10"
      >
        <div className="col-span-full">
          {selectedProduct && (
            <div className="transition-opacity duration-700 ease-in-out opacity-100 transform">
              {renderProductContent()}
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

export default Products;
