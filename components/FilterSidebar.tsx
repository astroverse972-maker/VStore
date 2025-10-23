
import React, { useState } from 'react';

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void;
  categories: string[];
  sizes: string[];
  colors: string[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange, categories, sizes, colors }) => {
  const [priceRange, setPriceRange] = useState(500);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  // Simple handlers for checkbox groups
  const handleCheckboxChange = <T,>(
    value: T, 
    selection: T[], 
    setter: React.Dispatch<React.SetStateAction<T[]>>
  ) => {
    const newSelection = selection.includes(value)
      ? selection.filter(item => item !== value)
      : [...selection, value];
    setter(newSelection);
    // This is where you would call onFilterChange in a real app
  };

  return (
    <aside className="w-full lg:w-64 xl:w-72 space-y-8">
      {/* Category Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3 border-b pb-2">Category</h3>
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat} className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"/>
              <span className="text-sm capitalize">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3 border-b pb-2">Price</h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm">
            <span>$0</span>
            <span>${priceRange}</span>
          </div>
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3 border-b pb-2">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map(size => (
            <button
              key={size}
              className={`px-3 py-1 border rounded-md text-sm transition-colors ${selectedSizes.includes(size) ? 'bg-primary text-white border-primary' : 'bg-white hover:border-primary'}`}
              onClick={() => handleCheckboxChange(size, selectedSizes, setSelectedSizes)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3 border-b pb-2">Color</h3>
        <div className="flex flex-wrap gap-3">
          {colors.map(color => (
            <button
              key={color}
              className={`h-8 w-8 rounded-full border-2 transition-transform transform hover:scale-110 ${selectedColors.includes(color) ? 'border-accent' : 'border-transparent'}`}
              onClick={() => handleCheckboxChange(color, selectedColors, setSelectedColors)}
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
