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
      <section className="container mx-auto selection:first-letter:mx-auto flex flex-row items-center justify-between py-10 md:my-20">
        {/* Text Section */}
        <div className="relative z-10  flex flex-col text-white md:w-2/3 p-5 text-balance">
          <h1 className="text-6xl font-bold leading-tight text-blue-500">
            Strategic Machines
          </h1>
          <p className="text-2xl mt-2">
            Delivering Trusted AI Business Solutions for Conversational Commerce
          </p>
          <p className="text-xl mt-1 text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab
            quibusdam explicabo. Nihil, consectetur. Corporis itaque, quaerat,
            saepe ab laboriosam eius explicabo sunt ullam accusantium est quas
            aperiam enim! Illo?
          </p>
        </div>

        {/* WaterDropGrid Animation */}
        <div className="absolute right-0 z-0">
          <WaterDropGrid />
        </div>
      </section>

      {/* Solutions */}
      <section className="container mx-auto flex flex-col space-y-5 my-5 md:my-16 py-10">
        <BubbleText text="Our Solutions" />
        <div className="text-white grid lg:grid-cols-7 ">
          <div className="lg:col-span-7 flex flex-col justify-center items-center p-10">
            <p className="mb-5 text-balance text-lg text-center leading-relaxed tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab
              quibusdam explicabo. Nihil, consectetur. Corporis itaque, quaerat,
              saepe ab laboriosam eius explicabo sunt ullam accusantium est quas
              aperiam enim! Illo?
            </p>
            <Link
              href="/solutions"
              className="underline underline-offset-8 w-fit tracking-wide"
            >
              {/* You can add an animated arrow here if needed */}
              Learn More
            </Link>
          </div>
          <div className="lg:col-span-7 grid lg:grid-cols-3 gap-4 p-10 place-content-center">
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
        <div className="px-7 py-5 flex flex-wrap justify-center gap-4">
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
