import React from "react";

const Header = () => {
  return (
    <header class="bg-gray-800 py-4 mb-3 px-5 flex justify-between items-center">
      <div class="flex items-center">
        <a
          href="#"
          class="text-white hover:text-yellow-600 font-bold text-2xl mr-4"
        >
          My E-Shop
        </a>
        <nav class="hidden md:flex">
          <a
            href="#"
            class="text-white hover:text-yellow-500 font-bold py-2 px-4 mr-4"
          >
            Home
          </a>
          <a
            href="#"
            class="text-white hover:text-yellow-500 font-bold py-2 px-4 mr-4"
          >
            Shop
          </a>
          <a
            href="#"
            class="text-white hover:text-yellow-500 font-bold py-2 px-4 mr-4"
          >
            About
          </a>
          <a
            href="#"
            class="text-white hover:text-yellow-500 font-bold py-2 px-4 mr-4"
          >
            Contact
          </a>
        </nav>
      </div>
      <div>
        <a
          href="#"
          class="text-white hover:text-yellow-500 font-bold py-2 px-4 mr-4"
        >
          Sign In
        </a>
        <a
          href="#"
          class="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-2 px-4 rounded-full"
        >
          Cart
        </a>
      </div>
    </header>
  );
};

export default Header;
