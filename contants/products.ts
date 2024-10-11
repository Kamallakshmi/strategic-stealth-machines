export const products: ProductType[] = [
  {
    imageURL: "/B2B.png",
    alt: "B2B",
    href: "/products",
    title: "B2B",
    content: "Customized solutions for every applications / processes",
  },
  {
    imageURL: "/b2c.jpg",
    alt: "B2C",
    href: "/products",
    title: "B2C",
    content: "Customized solutions for your personal use",
  },
];

export type ProductType = {
  imageURL: string;
  alt: string;
  href: string;
  title: string;
  content: string;
};
