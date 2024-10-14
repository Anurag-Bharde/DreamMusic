import React from 'react';
import data from './Data/NavMenu';

const CategoryItem = ({ category }) => {
  // Get the category data from the imported data based on the passed category prop
  const categoryData = data[category];

  if (!categoryData) {
    return <p>Category not found!</p>; // Fallback if the category doesn't exist
  }

  return (
    <div className="mt-6 ml-7">
      {/* Category title */}
      <h2 className="text-[#cfc5c5] uppercase tracking-wider text-xs ">
        {categoryData.title}
      </h2>
      {/* Render the list of items */}
      <ul>
        {categoryData.items.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 py-1.5 text-gray-200 hover:text-red-500 transition duration-300 cursor-pointer"
          >
            {/* Placeholder for icon */}
            <img src={item.icon} className="w-5 h-5"></img>
            <span>{item.sign}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryItem;
