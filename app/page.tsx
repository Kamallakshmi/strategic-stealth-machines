"use client";
import BubbleText from "@/components/BubbleText";
import FooterCard from "@/components/FooterCard";
import ProductCard from "@/components/ProductCard";
import { SlideTabsExample } from "@/components/SlideTab"; // Adjust the path as needed
import SolutionsCard from "@/components/SolutionsCard";
import WaterDropGrid from "@/components/WaterDropGrid"; // Import the WaterDropGrid component
import { products } from "@/contants/products";
import { solutions } from "@/contants/solutions";
import Link from "next/link";

const Home = () => {
  return (
    <main className="relative bg-navy animate-gradient-bg">
      {/* Background glassmorphism effect covering all sections except the footer */}
      <div className="absolute z-10 bg-gradient-to-br from-deepBlue-900 to-blue-900 opacity-60 backdrop-blur-lg rounded-2xl shadow-xl"></div>

      {/* Floating Icons or Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-amber-300 to-indigo-900 rounded-full opacity-40 blur-lg animate-pulse"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-indigo-400 rounded-full opacity-40 blur-xl animate-spin-slow"></div>

      {/* Navbar */}
      <section className="relative">
        <SlideTabsExample />
      </section>

      {/* Header Text and WaterDropGrid */}
      <section className="container mx-auto h-96 selection:first-letter:mx-auto flex flex-row items-center justify-center py-10 md:my-20">
        {/* Text Section */}
        <div className="relative flex flex-col text-white lg:w-2/3 p-5 text-center leading-loose text-balance">
          <h1 className="md:text-5xl text-4xl leading-normal text-blue-500">
            Strategic Stealth Machines
          </h1>
          <p className="md:text-2xl text-lg mt-2 text-center leading-loose">
            Accelerating Evolution of AI innovation
          </p>
          {/* <p className="text-lg mt-1 text-gray-100 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab
            quibusdam explicabo. Nihil, consectetur. Corporis itaque, quaerat,
            saepe ab laboriosam eius explicabo sunt ullam
          </p> */}
        </div>

        {/* WaterDropGrid Animation */}
        {/* <div className="absolute right-0 z-0">
          <WaterDropGrid />
        </div> */}
      </section>
      <Link
        href={"#solutions"}
        className="w-full flex items-center justify-center text-white"
      >
        <div className="field">
          <div className="scroll"></div>
        </div>
      </Link>

      {/* Solutions */}
      <section
        id="solutions"
        className="container mx-auto flex flex-col space-y-5 my-5 md:my-16 py-10"
      >
        <BubbleText text="Our Solutions" />
        <div className="md:px-10 text-white grid lg:grid-cols-7 ">
          <div className="mx-5 lg:col-span-7 flex flex-col justify-center items-center">
            <p className="mb-5 text-normal text-lg text-center leading-relaxed tracking-wide">
              Providing AI driven solutions for Manufacturing Process
              optimizations and equipment&apos;s Real Time maintenance, Product
              development, Testing, Maintenance and IOT Solutions for
              Intelligent Transportation System.
            </p>
            <Link
              href="/solutions"
              className="underline underline-offset-8 w-fit tracking-wide"
            >
              {/* You can add an animated arrow here if needed */}
              Learn More
            </Link>
          </div>
          <div className="lg:col-span-7 flex flex-wrap justify-center items-center h-full gap-20 p-10">
            {solutions.map((solution) => {
              return (
                <SolutionsCard
                  key={solution.imageURL}
                  imageURL={solution.imageURL}
                  alt={solution.alt}
                  href={solution.href}
                  title={solution.title}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="container mx-auto flex flex-col space-y-5 my-5 py-10">
        <BubbleText text="Our Products" />
        <div className="md:px-10 py-5 flex flex-wrap justify-center items-center h-full gap-20 p-10">
          <ProductCard
            imageURL={products[0].imageURL}
            alt={products[0].alt}
            href={products[0].href}
            title={products[0].title}
            content={products[0].content}
          />
          <ProductCard
            imageURL={products[1].imageURL}
            alt={products[1].alt}
            href={products[1].href}
            title={products[1].title}
            content={products[1].content}
          />
        </div>
      </section>

      <footer>
        <FooterCard />
      </footer>
    </main>
  );
};

export default Home;
