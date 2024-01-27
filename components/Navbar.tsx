import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[60] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20 logo">
      <div className="flex flex-row gap-3 items-center">
      <a href="https://exquisite-medovik-177427.netlify.app/">
        <div className="relative horse">
          { <Image
            src="/horse.png"
            alt="logo"
            width={60}
            height={60}
            unoptimized={true}
            
          /> }
        </div>
        </a>
        <a href="https://exquisite-medovik-177427.netlify.app/">
          <h1 className="text-white text-[25px] font-semibold mobile-title font-mono">
            Mythical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              AI{" "}
            </span>
          </h1>
        </a>
      </div>

      <div className="flex-col md:flex-row md:flex gap-5 button">
            <Link
              href="/contact-me"
              className="rounded-[15px] group relative px-2 py-1 text-lg text-white max-w-[200px] pb-2 button-primary"
            >
              <span className="text-sm font-mono">Custom AI Solutions</span>
            </Link>
      </div>
    </div>
  );
};

export default Navbar;
