export const solutions: SolutionType[] = [
  {
    imageURL: "/manufacture.jpg",
    alt: "Manufacturing Solutions",
    href: "/solutions",
    title: "Manufacturing",
  },
  {
    imageURL: "/automotive.jpg",
    alt: "Automotive Solutions",
    href: "/solutions",
    title: "Automotive",
  },
  {
    imageURL: "/iot.jpg",
    alt: "IOT Solutions",
    href: "/solutions",
    title: "IOT Solutions",
  },
];

export type SolutionType = {
  imageURL: string;
  alt: string;
  href: string;
  title: string;
};
