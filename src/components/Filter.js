import React, { useState } from "react";
import Products from "./Products";
const Filter = ({ category, setAllData, data }) => {
  let [cName, setCName] = useState("");
  const handleCategoryName = (name) => {
    setCName(name);
    let filteredData = data.filter((item) => item.category === name);

    if (filteredData.length) {
      setAllData(filteredData);
    } else {
      setAllData(data);
    }
  };
  return (
    <div class="flex justify-center gap-3 border-b border-gray-700 py-2 my-3">
      <div
        onClick={() => handleCategoryName("")}
        class="text-white font-bold py-2 px-4 mr-2 bg-gray-700 hover:bg-gray-800 rounded-full cursor-pointer"
      >
        All
      </div>
      {category.map((item, i) => (
        <div
          key={i}
          onClick={() => handleCategoryName(item)}
          class="text-white font-bold py-2 px-4 mr-2 bg-gray-700 hover:bg-gray-800 rounded-full cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Filter;
