import React from "react";
import { Typography } from "@material-tailwind/react";

const NavList: React.FC = () => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
        // Optional: Add empty handlers or spread operator
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder={undefined}
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder={undefined}
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Solutions
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder={undefined}
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Products
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder={undefined}
      >
        <a
          href="#"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Contact
        </a>
      </Typography>
    </ul>
  );
};

export default NavList;
