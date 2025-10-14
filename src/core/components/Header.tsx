"use client";

import React from "react";
import Image from "next/image";

const headerBarNames = ["About", "Home", "Projects"];

const Header = () => {
  return (
    <header className="sticky top-0 z-10 dark:bg-black/40 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Image
              className="dark:invert"
              src={"/vercel.svg"}
              alt="Reflections"
              width={80}
              height={30}
              priority
            />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Reflections
            </h1> 
          </div>
          <nav className="flex-1 flex justify-center md:flex space-x-8">
            {headerBarNames.map((value, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 dark:text-white font-bold px-4 py-2 hover:underline btn-hover-animate"
              >
                {value}
              </a>
            ))}
          </nav>
          {/* Space for future content */}
          <button
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-white btn-hover-animate"
            onClick={() => alert("Avatar clicked!!")}
          ></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
