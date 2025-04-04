'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { checkRecipe } from '@/data/recipes';
import { useSelectedItem } from '@/context/SelectedItemContext';
import Image from 'next/image';
import { ColorCodeArray, ColorCode } from '@/data/recipes';


interface CraftingSlotProps {
  index: number;
  item: string | null;
  onDrop: (item: { id: string }, index: number) => void;
  onRemoveItem: (index: number) => void;
  onClick: (index: number) => void;
  colorCode: string;
}

const CraftingSlot: React.FC<CraftingSlotProps> = ({ index, item, onDrop, onRemoveItem, onClick, colorCode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { selectedItem } = useSelectedItem();
  const [{ isOver }, drop] = useDrop<{ id: string }, void, { isOver: boolean }>(() => ({
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
      onRemoveItem(index);
    } else if (selectedItem) {
      onClick(index);
    }
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`w-12 h-12 sm:w-16 sm:h-16 border-2 ${colorCode} bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden ${
        isOver ? 'border-yellow-500' : ''
      } ${
        !item && selectedItem ? 'cursor-pointer hover:border-green-500' : 
        item ? 'cursor-pointer hover:border-red-500' : ''
      }`}
    >
      {item && (
        <Image
          src={`/items/${item}.png`}
          alt={item}
          width={36}
          height={36}
          className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
          draggable={false}
        />
      )}
    </div>
  );
};

interface CraftingGridProps {
  grid: (string | null)[];
  setGrid: React.Dispatch<React.SetStateAction<(string | null)[]>>;
  colorCodes: ColorCodeArray;
  onRemoveItem: (index: number) => void;
}

const CraftingGrid: React.FC<CraftingGridProps> = ({ grid, setGrid, colorCodes, onRemoveItem }) => {
  const { selectedItem } = useSelectedItem();

  const handleDrop = (item: { id: string }, index: number) => {
    setGrid(prev => {
      const newGrid = [...prev];
      newGrid[index] = item.id;
      return newGrid;
    });
  };

  const handleClickToAdd = (index: number) => {
    if (selectedItem) {
      setGrid(prev => {
        const newGrid = [...prev];
        newGrid[index] = selectedItem.id;
        return newGrid;
      });
    }
  };

  const getBorderColor = (colorCode: ColorCode) => {
    if(colorCode == 0) return 'border-yellow-500';
    if(colorCode == 1) return 'border-green-500';
    if(colorCode == -2) return 'border-red-700';
    // Default/unset (-1)
    return 'border-gray-700';
  }

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-2xl shadow-black/50">
      <div className="grid grid-cols-3 gap-2 w-fit mx-auto"> {/* Use w-fit and mx-auto to center the grid */} 
        {grid.map((item, index) => (
          <CraftingSlot
            key={index}
            index={index}
            item={item}
            onDrop={handleDrop}
            onRemoveItem={onRemoveItem}
            onClick={handleClickToAdd}
            colorCode={getBorderColor(colorCodes[index])}
          />
        ))}
      </div>
      {/* Removed result box and arrow */}
    </div>
  );
};

export default CraftingGrid; 