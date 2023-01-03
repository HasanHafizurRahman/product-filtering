import React from "react";
import Products from "./Products";
const Filter = ({ category }) => {
  return (
    <div class="flex justify-center gap-3 border-b border-gray-700 py-2 my-3">
      <div class="text-white font-bold py-2 px-4 mr-2 bg-gray-700 hover:bg-gray-800 rounded-full cursor-pointer">
        All
      </div>
      {category.map((item) => (
        <div class="text-white font-bold py-2 px-4 mr-2 bg-gray-700 hover:bg-gray-800 rounded-full cursor-pointer">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Filter;
