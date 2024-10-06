// import { ProductType } from "@/contants/products";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const ProductCard = (props: ProductType) => {
//   const { imageURL, alt, content, href, title } = props;
//   return (
//     <div className="text-white flex lg:flex-row flex-col items-center">
//       <Image src={imageURL} alt={alt} width={300} height={300} />
//       <div className="flex flex-col justify-center lg:items-start items-center pl-10 pr-16">
//         <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
//         <p className="mb-5 text-balance lg:text-left text-center leading-relaxed tracking-wide">
//           {content}
//         </p>
//         <Link
//           href="/products"
//           className="underline underline-offset-8 w-fit tracking-wide lg:self-end"
//         >
//           Learn More
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import { ProductType } from "@/contants/products";
import TiltImage from "@/components/TiltImage"; // Import the TiltImage component
import Link from "next/link";
import React from "react";

const ProductCard: React.FC<ProductType> = (props) => {
  const { imageURL, alt, content, href, title } = props;

  return (
    <div
      className="text-white flex w-full lg:flex-row flex-col lg:justify-start
    justify-center items-center"
    >
      {/* Pass size instead of width and height */}
      <div className="mb-5 md:w-1/3 w-full">
        <TiltImage src={imageURL} alt={alt} size={400} />
      </div>

      <div className="flex flex-col md:w-2/3 w-full justify-center lg:items-start items-center  md:px-10">
        <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
        <p className="mb-5 text-balance lg:text-left text-center leading-relaxed tracking-wide">
          {content}
        </p>
        <Link
          href={href}
          className="underline underline-offset-8 w-fit mb-5 tracking-wide lg:self-end"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
