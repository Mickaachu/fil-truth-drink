import React, { useState } from "react";

type Category = "spicy" | "partners" | "friends" | "cousins";

interface CategorySelectorProps {
  categories: Category[];
  onSelect: (category: Category) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, onSelect }) => {
  const [selected, setSelected] = useState<Category | null>(null);

  const handleSelect = (category: Category) => {
    setSelected(category);
    onSelect(category);
  };

  return (
    <div className="flex gap-4">
      {categories.map((category) => (
        <label
          key={category}
          className={`px-4 py-2 rounded-md border transition 
            ${
              selected === category
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
            }
            cursor-pointer`}
        >
          <input
            type="radio"
            name="category"
            value={category}
            checked={selected === category}
            onChange={() => handleSelect(category)}
            className="hidden"
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default CategorySelector;
