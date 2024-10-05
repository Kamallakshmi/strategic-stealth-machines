import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // For Next.js
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Position {
  left: number;
  width: number;
  opacity: number;
}

export const SlideTabsExample = () => {
  return (
    <div className="relative bg-white z-50 backdrop-blur-lg backdrop-brightness-125  border border-white/45 py-5">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const pathname = usePathname();

  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

  return (
    <nav className="relative flex items-center w-full h-16 justify-between px-5">
      {/* Company logo */}
      <div className="flex items-center">
        <Image
          src={"/logo.png"}
          alt={"Strategic Stealth Machines"}
          width={200}
          height={80}
        />
      </div>

      {/* Hamburger icon for small screens */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-navy text-2xl focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Tabs for medium and large screens */}
      <div className="hidden lg:flex items-center space-x-6">
        <ul
          onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
          className="relative mx-auto flex w-fit rounded-full border-2 border-navy bg-navy text-white"
        >
          <Tab setPosition={setPosition} href="/">
            <span
              className={cn({
                "bg-white text-navy px-3 rounded-full py-1.5": pathname === "/",
              })}
            >
              Home
            </span>
          </Tab>
          <Tab setPosition={setPosition} href="/solutions">
            <span
              className={cn({
                "bg-white text-navy px-3 rounded-full py-1.5":
                  pathname.startsWith("/solutions"),
              })}
            >
              Solutions
            </span>
          </Tab>
          <Tab setPosition={setPosition} href="/products">
            <span
              className={cn({
                "bg-white text-navy px-3 rounded-full py-1.5":
                  pathname.startsWith("/products"),
              })}
            >
              Products
            </span>
          </Tab>
          <Tab setPosition={setPosition} href="/contact">
            <span
              className={cn({
                "bg-white text-navy px-3 rounded-full py-1.5":
                  pathname.startsWith("/contact"),
              })}
            >
              Contact
            </span>
          </Tab>
          <Cursor position={position} />
        </ul>
      </div>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white py-5 shadow-lg">
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="text-navy hover:bg-navy hover:text-white block px-5 py-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/solutions"
                className="text-navy hover:bg-navy hover:text-white block px-5 py-2"
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-navy hover:bg-navy hover:text-white block px-5 py-2"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-navy hover:bg-navy hover:text-white block px-5 py-2"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  href: string;
}

const Tab = ({ children, setPosition, href }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-white text-xl md:px-5 md:py-3"
    >
      <Link
        href={href}
        className="w-full h-full flex items-center justify-center"
      >
        {children}
      </Link>
    </li>
  );
};

interface CursorProps {
  position: Position;
}

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-full rounded-full bg-gradient-to-r from-scintillatingNavy via-scintillatingNavy to-navy"
    />
  );
};
