'use client';

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CraftingGrid from './CraftingGrid';
import ItemSelection from './ItemSelection';
import { submitRecipe } from '@/data/recipes';
import { ColorCodeArray } from '@/data/recipes';

const MinecraftWordle: React.FC = () => {
  const [grid, setGrid] = useState<(string | null)[]>(Array(9).fill(null));
  const [showSuccess, setShowSuccess] = useState(false);
  const [colorCodes, setColorCodes] = useState<ColorCodeArray>(Array(9).fill(-1))
  const [greenItemsList] = useState<string[]>([]);
  const [yellowItemsList] = useState<string[]>([]);
  const [redItemsList] = useState<string[]>([]);

  const handleReset = () => {
    setGrid(Array(9).fill(null));
    setColorCodes(Array(9).fill(-1));
  }

  const handleSubmit = () => {
    const result = submitRecipe(grid);
    if (result.isMatch) {
      setShowSuccess(true);
    }
    
    for(let i = 0; i < result.greenItems.length; i++){
      if(!greenItemsList.includes(result.greenItems[i])){
        greenItemsList.push(result.greenItems[i]);
      }
    }
    for(let i = 0; i < result.yellowItems.length; i++){
      if(!yellowItemsList.includes(result.yellowItems[i])){
        yellowItemsList.push(result.yellowItems[i]);
      }
    }
    for(let i = 0; i < result.redItems.length; i++){
      if(!redItemsList.includes(result.redItems[i])){
        redItemsList.push(result.redItems[i]);
      }
    }
    

    setColorCodes(result.colorCodes);
    
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div 
        className="min-h-screen text-white p-8 relative"
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
          <div className="relative mb-8">
            <div className="flex flex-col items-center gap-4 p-4">
              <h1 className="text-4xl font-bold text-white">Minecraftdle</h1>
              <p className="text-gray-300 text-center">
                Craft the recipe of the day! Place items in the crafting grid and click submit.
              </p>
            </div>
            <a 
              href="https://www.paypal.com/donate/?business=637V3U83UBWLL&no_recurring=1&item_name=A+dollar+or+two+makes+all+the+difference&currency_code=USD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-0 right-0 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Donate
            </a>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-8">
              <CraftingGrid grid={grid} setGrid={setGrid} colorCodes={colorCodes} />
              <ItemSelection greenItems={greenItemsList} yellowItems={yellowItemsList} redItems={redItemsList}/>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 justify-center">
                  <button 
                    onClick={handleSubmit}
                    className="px-10 py-2 bg-emerald-600 rounded hover:bg-emerald-700 shadow-lg shadow-black/50"
                  >
                    Submit
                  </button>
                  <button onClick={handleReset}
                    className="px-4 py-2 bg-stone-400 rounded hover:bg-stone-500 shadow-lg shadow-black/50"
                  >
                    Reset Crafting Grid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full mx-4 border-4 border-green-500">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-green-400 text-center">Success!</h2>
                <p className="text-white text-center text-lg">
                  You&apos;ve successfully crafted the recipe of the day!
                </p>
                <button 
                  className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
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