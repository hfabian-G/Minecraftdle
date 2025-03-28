'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { checkRecipe } from '@/data/recipes';
import { useSelectedItem } from '@/context/SelectedItemContext';

interface CraftingSlotProps {
  index: number;
  item: string | null;
  onDrop: (item: any, index: number) => void;
  onRemove: (index: number) => void;
  onClick: (index: number) => void;
}

const CraftingSlot: React.FC<CraftingSlotProps> = ({ index, item, onDrop, onRemove, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { selectedItem } = useSelectedItem();
  const [{ isOver }, drop] = useDrop<any, void, { isOver: boolean }>(() => ({
    accept: 'item',
    drop: (droppedItem) => onDrop(droppedItem, index),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  useEffect(() => {
    if (ref.current) {
      drop(ref.current);
    }
  }, [drop]);

  const handleClick = () => {
    if (item) {
      onRemove(index);
    } else if (selectedItem) {
      onClick(index);
    }
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`w-20 h-20 border-2 border-gray-700 bg-gray-800 rounded-lg flex items-center justify-center ${
        isOver ? 'border-yellow-500' : ''
      } ${
        !item && selectedItem ? 'cursor-pointer hover:border-green-500' : 
        item ? 'cursor-pointer hover:border-red-500' : ''
      }`}
    >
      {item && (
        <img
          src={`/items/${item}.png`}
          alt={item}
          className="w-16 h-16 object-contain"
          draggable={false}
        />
      )}
    </div>
  );
};

interface CraftingGridProps {
  grid: (string | null)[];
  setGrid: React.Dispatch<React.SetStateAction<(string | null)[]>>;
}

const CraftingGrid: React.FC<CraftingGridProps> = ({ grid, setGrid }) => {
  const [craftingResult, setCraftingResult] = useState<{id: string; name: string; count: number} | null>(null);
  const { selectedItem } = useSelectedItem();

  const handleDrop = (item: any, index: number) => {
    setGrid(prev => {
      const newGrid = [...prev];
      newGrid[index] = item.id;
      return newGrid;
    });
  };

  const handleRemove = (index: number) => {
    setGrid(prev => {
      const newGrid = [...prev];
      newGrid[index] = null;
      return newGrid;
    });
  };

  const handleClick = (index: number) => {
    if (selectedItem) {
      setGrid(prev => {
        const newGrid = [...prev];
        newGrid[index] = selectedItem.id;
        return newGrid;
      });
    }
  };

  // Check recipe whenever grid changes
  useEffect(() => {
    const result = checkRecipe(grid);
    setCraftingResult(result);
  }, [grid]);

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-2xl shadow-black/50">
      <div className="flex items-center gap-8">
        <div>
          <div className="grid grid-cols-3 gap-2">
            {grid.map((item, index) => (
              <CraftingSlot
                key={index}
                index={index}
                item={item}
                onDrop={handleDrop}
                onRemove={handleRemove}
                onClick={handleClick}
              />
            ))}
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className={`relative group w-20 h-20 border-2 ${craftingResult ? 'border-green-500 bg-gray-800' : 'border-gray-700 bg-gray-900'} rounded-lg flex items-center justify-center`}>
            {craftingResult && (
              <div className="relative">
                <img
                  src={`/items/${craftingResult.id}.png`}
                  alt={craftingResult.name}
                  className="w-16 h-16 object-contain"
                  draggable={false}
                />
                {craftingResult.count > 1 && (
                  <span className="absolute bottom-0 right-0 bg-gray-900 text-white text-xs px-1 rounded">
                    {craftingResult.count}
                  </span>
                )}
              </div>
            )}
            <div className="absolute -top-2 -right-85 bg-gray-800 text-white text-xs p-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              If nothing shows up when you enter a valid recipe, either.. 
              <br/><br/>
              1)  Minecraftdle doesn't have that recipe or<br/>
              2)  There is a symmetric construction that you should try <br/>
              i.e axes should be crafted with the blade on the left side.
        
            </div>
          </div>
          {craftingResult && (
            <p className="text-gray-300 text-sm mt-2">{craftingResult.name}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CraftingGrid; 