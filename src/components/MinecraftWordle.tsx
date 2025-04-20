'use client';

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CraftingGrid from './CraftingGrid';
import ItemSelection from './ItemSelection';
import { submitRecipe, Recipe } from '@/data/recipes';
import { ColorCodeArray } from '@/data/recipes';
import Image from 'next/image';

type ItemColorState = 'green' | 'yellow' | 'red' | null;

const MinecraftWordle: React.FC = () => {
  const [grid, setGrid] = useState<(string | null)[]>(Array(9).fill(null));
  const [showSuccess, setShowSuccess] = useState(false);
  const [colorCodes, setColorCodes] = useState<ColorCodeArray>(Array(9).fill(-1));
  const [itemColorStates, setItemColorStates] = useState<Record<string, ItemColorState>>({});
  const [resultItem, setResultItem] = useState<Recipe['result'] | null>(null);

  const handleReset = () => {
    setGrid(Array(9).fill(null));
    setColorCodes(Array(9).fill(-1));
    setShowSuccess(false);
    setResultItem(null);
  }

  // New handler for removing an item from a specific grid index
  const handleRemoveItemFromGrid = (index: number) => {
    // Update grid state
    setGrid(prevGrid => {
      const newGrid = [...prevGrid];
      newGrid[index] = null;
      return newGrid;
    });
    // Update color codes state for that specific index
    setColorCodes(prevCodes => {
      const newCodes = [...prevCodes];
      newCodes[index] = -1; // Reset to default color code value
      return newCodes;
    });
  }

  const handleSubmit = () => {
    const result = submitRecipe(grid);
    setColorCodes(result.colorCodes);
    setResultItem(result.isMatch && result.resultItem ? result.resultItem : null);
    setShowSuccess(result.isMatch && !!result.resultItem);

    setItemColorStates(prevStates => {
      const newStates = { ...prevStates };

      const updateState = (item: string, newColor: ItemColorState) => {
        if (!item || !newColor) return;
        const currentColor = newStates[item];
        if (newColor === 'green') {
          newStates[item] = 'green';
        } else if (newColor === 'yellow' && currentColor !== 'green') {
          newStates[item] = 'yellow';
        } else if (newColor === 'red' && currentColor !== 'green' && currentColor !== 'yellow') {
          newStates[item] = 'red';
        }
      };

      result.greenItems.forEach(item => updateState(item, 'green'));
      result.yellowItems.forEach(item => updateState(item, 'yellow'));
      result.redItems.forEach(item => updateState(item, 'red'));

      return newStates;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div 
        className="min-h-screen text-white p-8 relative overflow-x-hidden"
        style={{
          backgroundImage: 'url("/minecraftbackground.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Title and Description Block */}
          <div className="mb-4 sm:mb-8">
            <div className="flex flex-col items-center gap-2 sm:gap-4 p-2 sm:p-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Minecraftdle</h1>
              <p className="text-gray-300 text-center text-sm sm:text-base">
                Craft the Minecraft recipe of the day! Place items in the crafting grid and click submit. Click items in the crafting grid to remove them.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-8">
              <CraftingGrid 
                grid={grid} 
                setGrid={setGrid}
                colorCodes={colorCodes} 
                onRemoveItem={handleRemoveItemFromGrid}
              />
              <ItemSelection itemColorStates={itemColorStates} />
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 justify-center">
                  <button 
                    onClick={handleSubmit}
                    className="px-6 sm:px-10 py-1.5 sm:py-2 bg-emerald-600 rounded hover:bg-emerald-700 shadow-lg shadow-black/50"
                  >
                    Submit
                  </button>
                  <button onClick={handleReset}
                    className="px-4 py-1.5 sm:py-2 bg-stone-400 rounded hover:bg-stone-500 shadow-lg shadow-black/50"
                  >
                    Reset Crafting Grid
                  </button>
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="https://www.paypal.com/donate/?business=637V3U83UBWLL&no_recurring=1&currency_code=USD" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-1 sm:py-2 px-2 sm:px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                  >
                    Buy me a coffee!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccess && resultItem && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 p-4 sm:p-8 rounded-lg shadow-xl w-full max-w-md mx-4 border-4 border-green-500">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-green-400 text-center">Success!</h2>
                <p className="text-white text-center text-base sm:text-lg">
                  You crafted the recipe of the day:
                </p>
                <div className="flex flex-col items-center gap-2 mt-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-gray-600 bg-gray-700 rounded-lg flex items-center justify-center">
                    <Image
                      src={`/items/${resultItem.id}.png`}
                      alt={resultItem.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                    />
                  </div>
                  <p className="text-white font-semibold text-lg">{resultItem.name}</p>
                  {resultItem.count > 1 && (
                    <p className="text-gray-400 text-sm">x{resultItem.count}</p>
                  )}
                </div>
                <button 
                  className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 shadow-lg"
                  onClick={() => setShowSuccess(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DndProvider>
  );
};

export default MinecraftWordle; 