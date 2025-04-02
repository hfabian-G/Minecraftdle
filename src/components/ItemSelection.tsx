'use client';

import React, { useRef, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { useSelectedItem } from '@/context/SelectedItemContext';
import Image from 'next/image';

interface ItemProps {
  id: string;
  name: string;
  greenItems?: string[];
  yellowItems?: string[];
  redItems?: string[];
}

interface DragItem {
  id: string;
  name: string;
}

interface ItemSelectionProps {
  greenItems?: string[];
  yellowItems?: string[];
  redItems?: string[];
}

const Item: React.FC<ItemProps> = ({ id, name, greenItems, yellowItems, redItems }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { selectedItem, setSelectedItem } = useSelectedItem();
  const isSelected = selectedItem?.id === id;

  const getBorderColor = () => {
    console.log('Item:', id, 'RedItems:', redItems);
    if (redItems?.includes(id)) {
      console.log('Found red item:', id);
      return 'border-red-700';
    }
    if (greenItems?.includes(id)) return 'border-green-500';
    if (yellowItems?.includes(id)) return 'border-yellow-500';
    if (isSelected) return 'border-blue-500';
    return 'border-gray-700';
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
    if (redItems?.includes(id) || greenItems?.includes(id) || yellowItems?.includes(id)) {
      return '';
    }
    return 'hover:border-blue-500';
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`w-16 h-16 border-2 ${getBorderColor()} ${
        isSelected ? 'bg-gray-700' : 'bg-gray-800'
      } rounded-lg flex items-center justify-center cursor-pointer ${getHoverClass()} overflow-hidden ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <Image
        src={`/items/${id}.png`}
        alt={name}
        width={48}
        height={48}
        className="object-contain"
        draggable={false}
      />
    </div>
  );
};

const ItemSelection: React.FC<ItemSelectionProps> = ({ greenItems, yellowItems, redItems }) => {
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
      <div className="grid grid-cols-6 gap-2">
        {items.map((item) => (
          <Item 
            key={item.id} 
            {...item} 
            greenItems={greenItems}
            yellowItems={yellowItems}
            redItems={redItems}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemSelection; 