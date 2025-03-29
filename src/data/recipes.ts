interface Recipe {
  pattern: (string | null)[];
  result: {
    id: string;
    name: string;
    count: number;
  };
}

interface RecipeFeedback {
  isMatch: boolean;
  correctPlacements: number;
  message: string;
}

export const recipes: Recipe[] = [
  {
    // Diamond Pickaxe
    pattern: [
      'diamond', 'diamond', 'diamond',
      null, 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'diamond_pickaxe',
      name: 'Diamond Pickaxe',
      count: 1
    }
  },
  {
    // Iron Pickaxe
    pattern: [
      'iron_ingot', 'iron_ingot', 'iron_ingot',
      null, 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'iron_pickaxe',
      name: 'Iron Pickaxe',
      count: 1
    }
  },
  {
    // Stone Pickaxe
    pattern: [
      'cobblestone', 'cobblestone', 'cobblestone',
      null, 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'stone_pickaxe',
      name: 'Stone Pickaxe',
      count: 1
    }
  },
  {
    // Wooden Pickaxe
    pattern: [
      'planks', 'planks', 'planks',
      null, 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'wooden_pickaxe',
      name: 'Wooden Pickaxe',
      count: 1
    }
  },
  {
    // Diamond Sword
    pattern: [
      null, 'diamond', null,
      null, 'diamond', null,
      null, 'stick', null
    ],
    result: {
      id: 'diamond_sword',
      name: 'Diamond Sword',
      count: 1
    }
  },
  {
    // Iron Sword
    pattern: [
      null, 'iron_ingot', null,
      null, 'iron_ingot', null,
      null, 'stick', null
    ],
    result: {
      id: 'iron_sword',
      name: 'Iron Sword',
      count: 1
    }
  },
  {
    // Stone Sword
    pattern: [
      null, 'cobblestone', null,
      null, 'cobblestone', null,
      null, 'stick', null
    ],
    result: {
      id: 'stone_sword',
      name: 'Stone Sword',
      count: 1
    }
  },
  {
    // Wooden Sword
    pattern: [
      null, 'planks', null,
      null, 'planks', null,
      null, 'stick', null
    ],
    result: {
      id: 'wooden_sword',
      name: 'Wooden Sword',
      count: 1
    }
  },
  {
    // Diamond Axe
    pattern: [
      'diamond', 'diamond', null,
      'diamond', 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'diamond_axe',
      name: 'Diamond Axe',
      count: 1
    }
  },
  {
    // Iron Axe
    pattern: [
      'iron_ingot', 'iron_ingot', null,
      'iron_ingot', 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'iron_axe',
      name: 'Iron Axe',
      count: 1
    }
  },
  {
    // Sticks (yields 4)
    pattern: [
      'planks', null, null,
      'planks', null, null,
      null, null, null
    ],
    result: {
      id: 'stick',
      name: 'Stick',
      count: 4
    }
  },
  {
    // Wooden Planks (yields 4)
    pattern: [
      'log', null, null,
      null, null, null,
      null, null, null
    ],
    result: {
      id: 'planks',
      name: 'Wooden Planks',
      count: 4
    }
  },
  {
    // Crafting Table
    pattern: [
      'planks', 'planks', null,
      'planks', 'planks', null,
      null, null, null
    ],
    result: {
      id: 'crafting_table',
      name: 'Crafting Table',
      count: 1
    }
  },
  {
    // Chest
    pattern: [
      'planks', 'planks', 'planks',
      'planks', null, 'planks',
      'planks', 'planks', 'planks'
    ],
    result: {
      id: 'chest',
      name: 'Chest',
      count: 1
    }
  },
  {
    // Furnace
    pattern: [
      'cobblestone', 'cobblestone', 'cobblestone',
      'cobblestone', null, 'cobblestone',
      'cobblestone', 'cobblestone', 'cobblestone'
    ],
    result: {
      id: 'furnace',
      name: 'Furnace',
      count: 1
    }
  },
  {
    // Wooden Door
    pattern: [
      'planks', 'planks', null,
      'planks', 'planks', null,
      'planks', 'planks', null
    ],
    result: {
      id: 'wooden_door',
      name: 'Wooden Door',
      count: 3
    }
  },
  {
    // Bed
    pattern: [
      'wool', 'wool', 'wool',
      'planks', 'planks', 'planks',
      null, null, null
    ],
    result: {
      id: 'bed',
      name: 'Bed',
      count: 1
    }
  },
  {
    // Torch (yields 4)
    pattern: [
      'coal', null, null,
      'stick', null, null,
      null, null, null
    ],
    result: {
      id: 'torch',
      name: 'Torch',
      count: 4
    }
  },
  {
    // Ladder (yields 3)
    pattern: [
      'stick', null, 'stick',
      'stick', 'stick', 'stick',
      'stick', null, 'stick'
    ],
    result: {
      id: 'ladder',
      name: 'Ladder',
      count: 3
    }
  },
  {
    // Bow
    pattern: [
      null, 'stick', 'string',
      'stick', null, 'string',
      null, 'stick', 'string'
    ],
    result: {
      id: 'bow',
      name: 'Bow',
      count: 1
    }
  },
  {
    // Arrow (yields 4)
    pattern: [
      'flint', null, null,
      'stick', null, null,
      'feather', null, null
    ],
    result: {
      id: 'arrow',
      name: 'Arrow',
      count: 4
    }
  },
  {
    // Shield
    pattern: [
      'planks', 'iron_ingot', 'planks',
      'planks', 'planks', 'planks',
      null, 'planks', null
    ],
    result: {
      id: 'shield',
      name: 'Shield',
      count: 1
    }
  },
  {
    // Boat
    pattern: [
      'planks', null, 'planks',
      'planks', 'planks', 'planks',
      null, null, null
    ],
    result: {
      id: 'boat',
      name: 'Boat',
      count: 1
    }
  },
  {
    // Bookshelf
    pattern: [
      'planks', 'planks', 'planks',
      'book', 'book', 'book',
      'planks', 'planks', 'planks'
    ],
    result: {
      id: 'bookshelf',
      name: 'Bookshelf',
      count: 1
    }
  },
  {
    // Bucket
    pattern: [
      'iron_ingot', null, 'iron_ingot',
      null, 'iron_ingot', null,
      null, null, null
    ],
    result: {
      id: 'bucket',
      name: 'Bucket',
      count: 1
    }
  },
  {
    // Fishing Rod
    pattern: [
      null, null, 'stick',
      null, 'stick', 'string',
      'stick', null, 'string'
    ],
    result: {
      id: 'fishing_rod',
      name: 'Fishing Rod',
      count: 1
    }
  },
  {
    // Clock
    pattern: [
      null, 'gold_ingot', null,
      'gold_ingot', 'redstone', 'gold_ingot',
      null, 'gold_ingot', null
    ],
    result: {
      id: 'clock',
      name: 'Clock',
      count: 1
    }
  },
  {
    // Compass
    pattern: [
      null, 'iron_ingot', null,
      'iron_ingot', 'redstone', 'iron_ingot',
      null, 'iron_ingot', null
    ],
    result: {
      id: 'compass',
      name: 'Compass',
      count: 1
    }
  },
  {
    // Map
    pattern: [
      'paper', 'paper', 'paper',
      'paper', 'compass', 'paper',
      'paper', 'paper', 'paper'
    ],
    result: {
      id: 'map',
      name: 'Map',
      count: 1
    }
  },
  {
    // Paper (yields 3)
    pattern: [
      'sugarcane', 'sugarcane', 'sugarcane',
      null, null, null,
      null, null, null
    ],
    result: {
      id: 'paper',
      name: 'Paper',
      count: 3
    }
  },
  {
    // Diamond Shovel
    pattern: [
      null, 'diamond', null,
      null, 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'diamond_shovel',
      name: 'Diamond Shovel',
      count: 1
    }
  },
  {
    // Iron Shovel
    pattern: [
      null, 'iron_ingot', null,
      null, 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'iron_shovel',
      name: 'Iron Shovel',
      count: 1
    }
  },
  {
    // Wooden Shovel
    pattern: [
      null, 'planks', null,
      null, 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'wooden_shovel',
      name: 'Wooden Shovel',
      count: 1
    }
  },
  {
    // Stone Shovel
    pattern: [
      null, 'cobblestone', null,
      null, 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'stone_shovel',
      name: 'Stone Shovel',
      count: 1
    }
  },
  {
    // Diamond Hoe
    pattern: [
      'diamond', 'diamond', null,
      null, 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'diamond_hoe',
      name: 'Diamond Hoe',
      count: 1
    }
  },
  {
    // Stone Hoe
    pattern: [
      'cobblestone', 'cobblestone', null,
      null, 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'stone_hoe',
      name: 'Stone Hoe',
      count: 1
    }
  },
  {
    // Iron Hoe
    pattern: [
      'iron_ingot', 'iron_ingot', null,
      null, 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'iron_hoe',
      name: 'Iron Hoe',
      count: 1
    }
  },
  {
    // Wooden Hoe
    pattern: [
      'planks', 'planks', null,
      null, 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'wooden_hoe',
      name: 'Wooden Hoe',
      count: 1
    }
  }
];


function afixTopLeft(pattern: (string | null)[]): (string | null)[] {
  let isFound: boolean = false;
  let offset: number = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] != null && !isFound) {
      isFound = true;
      offset = i;
    }
    if (i == 0 && isFound) break;
    if (pattern[i] != null && isFound) {
      pattern[i - offset] = pattern[i];
      if (offset > 0) {
        pattern[i] = null;
      }
    }
  }
  return pattern;
}

function patternsMatch(pattern1: (string | null)[], pattern2: (string | null)[]): boolean{
  return pattern1.every((item, index) => {
    return item === pattern2[index];
  });
}

export function getRecipeOfTheDay(): Recipe {
  //const centralTime = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });
  //const today = new Date(centralTime).setHours(18, 0, 0, 0);
  const today = new Date();
  const seed = (today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()) % recipes.length;
  // Use the date as seed for pseudo-random selection
  
  const recipeOfTheDay = recipes[seed];
  console.log(recipeOfTheDay.pattern);
  return recipeOfTheDay;
}

export function submitRecipe(grid: (string | null)[]): RecipeFeedback {
  const recipeOfTheDay = getRecipeOfTheDay();
  const afixedGrid = afixTopLeft([...grid]);
  const afixedRecipeOfTheDay = afixTopLeft([...recipeOfTheDay.pattern]);

  // Count correct placements
  let correctPlacements = 0;
  const itemsInGridAndRecipe: string[] = [];
  afixedGrid.forEach((item, index) => {
    if (item != null &&!itemsInGridAndRecipe.includes(item) && afixedRecipeOfTheDay.includes(item)){
      itemsInGridAndRecipe.push(item);
    }
    if (item === afixedRecipeOfTheDay[index] && item != null) {
      correctPlacements++;
    }
  });
  
  
  itemsInGridAndRecipe.forEach((item, index) => {
    itemsInGridAndRecipe[index] = item + '(s)';
    if (index == itemsInGridAndRecipe.length - 1 && index != 0) {
      itemsInGridAndRecipe[index] = 'and ' + itemsInGridAndRecipe[index];
    }
  });


  if (patternsMatch(afixedGrid, afixedRecipeOfTheDay)) {
    return {
      isMatch: true,
      correctPlacements,
      message: "Perfect! You found today's recipe!"
    };
  }

  // Provide encouraging feedback based on correct placements
  let message = "";
  if (correctPlacements > 0) {
    message = `You have ${correctPlacements} item${correctPlacements > 1 ? 's' : ''} in the right spot! Keep trying!`;
    message += `\nThe Recipe of the Day contains ${itemsInGridAndRecipe.join(", ")}`;
  } else {
    message = "\nNo matches, keep trying!";
  }

  return {
    isMatch: false,
    correctPlacements,
    message
  };
}

export function checkRecipe(grid: (string | null)[]): Recipe['result'] | null {
  for (const recipe of recipes) {
    const itemsInGridAndRecipe = grid.filter((item, index) => 
      item === recipe.pattern[index]
    ).length;
    if (itemsInGridAndRecipe === recipe.pattern.length) {
      return recipe.result;
    }
  }
  return null;
} 