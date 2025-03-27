'use client';

import React, { useRef, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { useSelectedItem } from '@/context/SelectedItemContext';

interface ItemProps {
  id: string;
  name: string;
}

interface DragItem {
  id: string;
  name: string;
}

const Item: React.FC<ItemProps> = ({ id, name }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { selectedItem, setSelectedItem } = useSelectedItem();
  const isSelected = selectedItem?.id === id;

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

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`w-16 h-16 border-2 ${
        isSelected 
          ? 'border-yellow-500 bg-gray-700' 
          : 'border-gray-700 bg-gray-800'
      } rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <img
        src={`/items/${id}.png`}
        alt={name}
        className="w-12 h-12 object-contain"
        draggable={false}
      />
    </div>
  );
};

const ItemSelection: React.FC = () => {
  const items = [
    { id: 'planks', name: 'Wooden Planks' },
    { id: 'stick', name: 'Stick' },
    { id: 'cobblestone', name: 'Cobblestone' },
    { id: 'iron_ingot', name: 'Iron Ingot' },
    { id: 'diamond', name: 'Diamond' },
    { id: 'log', name: 'Oak Log' },
  ];

  return (
    <div className="bg-gray-900 p-4 rounded-xl">
      <h2 className="text-white text-xl mb-4">Available Items</h2>
      <div className="grid grid-cols-6 gap-2">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ItemSelection; 