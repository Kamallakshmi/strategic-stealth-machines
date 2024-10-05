"use client";
import { motion } from "framer-motion";
import { Key, useEffect, useRef, useState } from "react";

const ShuffleHeroSolution: React.FC = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-blue-400 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl text-white font-semibold">
          Our Solutions
        </h3>
        <h5 className="text-1xl md:text-2xl my-1 text-white md:my-2font-semibold">
          We create experiences through renderings
        </h5>
        <p className="text-base md:text-lg text-slate-400 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Nam nobis in error repellat
          voluptatibus ad.
        </p>
      </div>
      <div className="relative z-0">
        <ShuffleGrid />
      </div>
    </section>
  );
};

const shuffle = (array: { id: number; src: string }[]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1717386255773-a456c611dc4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1682144741954-3a9dcea81dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1545259742-b4fd8fea67e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://plus.unsplash.com/premium_photo-1682144517853-a42d68bc5196?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1577962144759-8dec6b55c952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://plus.unsplash.com/premium_photo-1688678097958-0620a452f0e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1603695576504-b2b22b530965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 11,
    src: "https://plus.unsplash.com/premium_photo-1664302004020-a69eec567967?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8&auto=format&fit=crop&w=684&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
  },
  {
    id: 13,
    src: "https://plus.unsplash.com/premium_photo-1701113010522-5d7e58d333ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1697665896501-80dda6979405?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1676288176869-b2e1c6bea1a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 16,
    src: "https://plus.unsplash.com/premium_photo-1717007464479-8587495838f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map(
    (sq: { id: Key | null | undefined; src: string }) => (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full h-full"
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "cover",
        }}
      ></motion.div>
    )
  );
};

const ShuffleGrid: React.FC = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState<JSX.Element[]>(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current!);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="z-50 grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHeroSolution;
