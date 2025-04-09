"use client";

import React, { useState } from "react";
import neu from "@/assets/categoryicons/new.png";
import beliebtesten from "@/assets/categoryicons/beliebtesten.png";
import families from "@/assets/categoryicons/families.png";
import liebhaber from "@/assets/categoryicons/liebhaber.png";
import mitlift from "@/assets/categoryicons/mitlift.png";
import seeblick from "@/assets/categoryicons/seeblick.png";
import Image, { StaticImageData } from "next/image";

interface Category {
  id: string;
  name: string;
  icon: string | StaticImageData;
  count: number;
}

interface CategoryFilteringProps {
  onCategorySelect?: (category: string) => void;
}

const CategoryFiltering: React.FC<CategoryFilteringProps> = ({
  onCategorySelect,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories: Category[] = [
    {
      id: "new",
      name: "Neu",
      icon: neu,
      count: 70,
    },
    {
      id: "popular",
      name: "Beliebtesten",
      icon: beliebtesten,
      count: 164,
    },

    {
      id: "families",
      name: "Für Hunde liebhaber",
      icon: liebhaber,
      count: 75,
    },
    {
      id: "lift",
      name: "Für Familien",
      icon: families,
      count: 11,
    },

    {
      id: "seaview",
      name: "Mit Lift",
      icon: mitlift,
      count: 11,
    },
    {
      id: "seaview",
      name: "Seeblick",
      icon: seeblick,
      count: 11,
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? "" : categoryId);
    console.log("Selected category:", categoryId);
    onCategorySelect?.(categoryId === selectedCategory ? "" : categoryId);
  };

  return (
    <div className="relative w-full py-6">
      <div className="flex flex-nowrap gap-8 overflow-x-auto pb-4 hide-scrollbar">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center gap-4">
            <button
              onClick={() => handleCategoryClick(category.id)}
              className="relative group mt-10"
            >
              <div className="w-[90px] h-[90px] rounded-full flex items-center justify-center transition-all border-2 border-primary hover:bg-primary text-white">
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={100}
                  height={100}
                  className="w-10 h-10"
                />
              </div>
              <div className="absolute bg-[#7FE7F3] text-gray-700 font-outfit font-semibold -top-2 -right-2 z-20 rounded-full w-8 h-8 px-1 py-1.5 text-sm">
                {category.count}
              </div>
            </button>
            <span className="font-outfit text-lg text-center whitespace-nowrap">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFiltering;
