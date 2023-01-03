import React from "react";

const Cards = ({ data }) => {
  return (
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((card) => (
        <div class="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img class="w-full h-60" src={card.img} />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{card.title}</div>
            <p class="text-gray-700 text-base">
              Price: <span class="font-bold">${card.price}</span>
            </p>
            <p class="text-gray-700 text-base">
              <span class="font-bold"> description:</span>
              <span className="tranquet">{card.description}</span>
            </p>
            <button class="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-2 px-3 mt-2 rounded-full">
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
