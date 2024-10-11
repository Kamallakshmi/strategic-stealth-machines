// import { SolutionType } from "@/contants/solutions";
// import Image from "next/image";
// import Link from "next/link";

// const SolutionsCard = (props: SolutionType) => {
//   const { imageURL, alt, href, title } = props;
//   return (
//     <div className="flex flex-col justify-center items-center space-y-5">
//       <Image src={imageURL} alt={alt} width={300} height={300} />
//       <Link
//         href={href}
//         className="underline underline-offset-8 w-fit tracking-wide"
//       >
//         {title}
//       </Link>
//     </div>
//   );
// };

// export default SolutionsCard;

import { SolutionType } from "@/contants/solutions";
import TiltImage from "@/components/TiltImage"; // Import the TiltImage component
import Link from "next/link";

const SolutionsCard: React.FC<SolutionType> = (props) => {
  const { imageURL, alt, href, title } = props;

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="h-auto">
        <TiltImage
          src={imageURL}
          alt={alt}
          size={300} // Pass the size you want for TiltImage
        />
      </div>
      <Link
        href={href}
        className="underline underline-offset-8 w-fit tracking-wide"
      >
        {title}
      </Link>
    </div>
  );
};

export default SolutionsCard;
