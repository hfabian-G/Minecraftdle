'use client';

import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CraftingGrid from './CraftingGrid';
import ItemSelection from './ItemSelection';
import { submitRecipe } from '@/data/recipes';

const MinecraftWordle: React.FC = () => {
  const [grid, setGrid] = useState<(string | null)[]>(Array(9).fill(null));
  const [showSuccess, setShowSuccess] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackMessage1, setFeedbackMessage1] = useState<string | null>(null);
  const [feedbackMessage2, setFeedbackMessage2] = useState<string | null>(null);

const handleReset = () => {
  setGrid(Array(9).fill(null));
}

  const handleSubmit = () => {
    const result = submitRecipe(grid);
    if (result.isMatch) {
      setShowSuccess(true);
    }
    const message1 = result.message.split("\n")[0];
    const message2 = result.message.split("\n")[1];
    setFeedback(result.message);
    setFeedbackMessage1(message1);
    setFeedbackMessage2(message2);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-800 text-white p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Minecraftdle</h1>
        <h2 className="text-2xl font-bold text-center mb-8">Try to craft the Recipe of the Day!</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            <CraftingGrid grid={grid} setGrid={setGrid} />
            <ItemSelection />
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
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
              {feedback && (
                <p className="text-center text-yellow-400">
                  {feedbackMessage2}
                </p>
                
              )}
              
              {feedback && (
                <p className="text-center text-green-400">
                  {feedbackMessage1}
                </p>

              )}
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Success!</h2>
              <p>You found today's recipe!</p>
              <button 
                className="mt-4 px-4 py-2 bg-green-500 rounded hover:bg-green-600"
                onClick={() => setShowSuccess(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </DndProvider>
  );
};

export default MinecraftWordle; 