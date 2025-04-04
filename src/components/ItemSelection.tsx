'use client';

import React, { useRef, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { useSelectedItem } from '@/context/SelectedItemContext';
import Image from 'next/image';

// Define the color state type (could also be imported if defined globally)
type ItemColorState = 'green' | 'yellow' | 'red' | null;

interface ItemProps {
  id: string;
  name: string;
  colorState: ItemColorState; // Use the single color state
}

interface DragItem {
  id: string;
  name: string;
}

interface ItemSelectionProps {
  itemColorStates: Record<string, ItemColorState>; // Expect the states object
}

const Item: React.FC<ItemProps> = ({ id, name, colorState }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { selectedItem, setSelectedItem } = useSelectedItem();
  const isSelected = selectedItem?.id === id;

  const getBorderColor = () => {
    if (colorState === 'red') return 'border-red-700';
    if (colorState === 'green') return 'border-green-500';
    if (colorState === 'yellow') return 'border-yellow-500';
    if (isSelected) return 'border-blue-500';
    return 'border-gray-700'; // Default border
  };

  const [{ isDragging }, drag] = useDrag<DragItem, void, { isDragging: boolean }>(() => ({
    type: 'item',
    item: { id, name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    if (ref.current) {
      drag(ref.current);
    }
  }, [drag]);

  const handleClick = () => {
    if (isSelected) {
      setSelectedItem(null);
    } else {
      setSelectedItem({ id, name });
    }
  };

  const getHoverClass = () => {
    // Disable hover effect if item has a fixed color state (green, yellow, red)
    if (colorState) {
      return '';
    }
    return 'hover:border-blue-500'; // Default hover effect
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`w-12 h-12 sm:w-16 sm:h-16 border-2 ${getBorderColor()} ${
        isSelected ? 'bg-gray-700' : 'bg-gray-800'
      } rounded-lg flex items-center justify-center cursor-pointer ${getHoverClass()} overflow-hidden ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <Image
        src={`/items/${id}.png`}
        alt={name}
        width={36}
        height={36}
        className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
        draggable={false}
      />
    </div>
  );
};

const ItemSelection: React.FC<ItemSelectionProps> = ({ itemColorStates }) => {
  // Define items list directly here or import from elsewhere if needed
  const items = [
    { id: 'planks', name: 'Wooden Planks' },
    { id: 'stick', name: 'Stick' },
    { id: 'cobblestone', name: 'Cobblestone' },
    { id: 'iron_ingot', name: 'Iron Ingot' },
    { id: 'diamond', name: 'Diamond' },
    { id: 'log', name: 'Oak Log' },
    { id: 'coal', name: 'Coal' },
    { id: 'flint', name: 'Flint' },
    { id: 'book', name: 'Book' },
    { id: 'redstone', name: 'Redstone' },
    { id: 'compass', name: 'Compass' },
    { id: 'wool', name: 'Wool' },
    { id: 'string', name: 'String' },
    { id: 'feather', name: 'Feather' },
    { id: 'gold_ingot', name: 'Gold Ingot' },
    { id: 'paper', name: 'Paper' },
    { id: 'sugarcane', name: 'Sugar Cane' }
  ];

  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-2xl shadow-black/50">
      <h2 className="text-white text-xl mb-4">Available Items</h2>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {items.map((item) => (
          <Item 
            key={item.id} 
            {...item} 
            // Pass the specific color state for this item, or null if not set
            colorState={itemColorStates[item.id] || null} 
          />
        ))}
      </div>
    </div>
  );
};

export default ItemSelection; 