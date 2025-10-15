"use client";

import React from "react";
import Image from "next/image";

const headerBarNames = [{titleSection: "About", link: ""}, {titleSection: "Home", link: ""}, {titleSection: "Projects", link: "#projects-section"}];

const Header = () => {
  return (
    <header className="mx-auto sticky top-0 z-10 dark:bg-black/40 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image
              className="dark:invert w-10 h-10 rounded-full"
              src={"/path_journey.png"}
              alt="Reflections"
              width={80}
              height={30}
              priority
            />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              My Road
            </h1> 
          </div>
          {}
          <nav className="flex-1 flex justify-center md:flex space-x-8">
            {headerBarNames.map((value, index) => (
              <a
                key={index}
                href={value.link}
                className="text-gray-700 hover:bg-black/80 dark:text-white font-bold px-4 py-2 hover:underline rounded-2xl btn-hover-animate"
              >
                {value.titleSection}
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
