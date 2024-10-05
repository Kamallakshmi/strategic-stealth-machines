export const products: ProductType[] = [
  {
    imageURL: "/B2B.png",
    alt: "B2B",
    href: "/products",
    title: "B2B",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab quibusdam explicabo. Nihil, consectetur. Corporis itaque, quaerat, saepe ab laboriosam eius explicabo sunt ullam accusantium est quas aperiam enim! Illo?",
  },
  {
    imageURL: "/B2C.png",
    alt: "B2C",
    href: "/products",
    title: "B2C",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab quibusdam explicabo. Nihil, consectetur. Corporis itaque, quaerat, saepe ab laboriosam eius explicabo sunt ullam accusantium est quas aperiam enim! Illo?",
  },
];

export type ProductType = {
  imageURL: string;
  alt: string;
  href: string;
  title: string;
  content: string;
};
