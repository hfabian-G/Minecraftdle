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
  messageCorrectPlacements: string;
  messageItemsPresent: string;
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
    // Wooden Axe
    pattern: [
      'planks', 'planks', null,
      'planks', 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'wooden_axe',
      name: 'Wooden Axe',
      count: 1
    }
  },
  {
    // Stone Axe
    pattern: [
      'cobblestone', 'cobblestone', null,
      'cobblestone', 'stick', null,
      null, 'stick', null
    ],
    result: {
      id: 'stone_axe',
      name: 'Stone Axe',
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

function afixRecipeToGrid(recipe: (string|null)[], grid: (string|null)[]): (string|null)[] {
  let afixOffset: number = 0;
  let pivotItem: string|null = "";
  let pivotItemOffset: number = 0;
  let returnArray: (string|null)[] = Array(9).fill(null);
  
  for(let i = 0; i < grid.length; i++){
    if(recipe[i] != null){
      pivotItemOffset = i;
    }
    if(grid[i] != null){
      afixOffset = i;
      console.log(afixOffset)
      afixOffset = afixOffset - pivotItemOffset;
      console.log(afixOffset)
      pivotItem = grid[i];
      break;
    }
  }
  let pivotItemHit: boolean = false;
  for(let i = 0; i < recipe.length; i++){
    if((recipe[i] == pivotItem || pivotItemHit) && recipe[i] != null){
      pivotItemHit = true;
      if(i + afixOffset >= recipe.length){
        return Array(9).fill("hey");
      } else {
        returnArray[i + afixOffset] = recipe[i];

      }
    }
  }
  return returnArray;
}

export function getRecipeOfTheDay(): Recipe {
  //const centralTime = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });
  //const today = new Date(centralTime).setHours(18, 0, 0, 0);
  const today = new Date();
  const seed = (today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()) % recipes.length;
  // Use the date as seed for pseudo-random selection
  
  const recipeOfTheDay = recipes[seed];

  /**
  for (let i = 0; i < recipes.length; i++){
    if(recipes[i].result.id == "iron_axe") return recipes[i];
  }
  */
  
  
    
  /**
  for (let i = 0; i < recipes.length; i++){
    if(recipes[i].result.id == "wooden_door") return recipes[i];
  }
  */
  

  return recipeOfTheDay;
}

export function submitRecipe(grid: (string | null)[]): RecipeFeedback {
  const recipeOfTheDay = getRecipeOfTheDay();
  console.log(recipeOfTheDay.result.id);
  const afixedGrid = afixTopLeft([...grid]);
  const afixedRecipeOfTheDay = afixTopLeft([...recipeOfTheDay.pattern]);
  const afixedRecipeOfTheDayVertical = afixTopLeft([...mirrorAcrossXAxis([...recipeOfTheDay.pattern])]);
  if(checkRecipe([...grid]) == getRecipeOfTheDay().result){
    return {
      isMatch: true,
      correctPlacements: 9,
      messageCorrectPlacements: "Perfect! You found today's recipe!",
      messageItemsPresent: ""
    };
  }


  let recipeOfTheDayAfixedToGrid = afixRecipeToGrid([...afixedRecipeOfTheDay], [...grid]);
  let recipeOfTheDayAfixedToGridVertical = afixRecipeToGrid([...afixedRecipeOfTheDayVertical], [...grid]);
  console.log(recipeOfTheDayAfixedToGrid);
  console.log(recipeOfTheDayAfixedToGridVertical);


  const itemsInGridAndRecipe: string[] = [];
  afixedGrid.forEach((item) => {
    if (item != null &&!itemsInGridAndRecipe.includes(item) && afixedRecipeOfTheDay.includes(item)){
      itemsInGridAndRecipe.push(item);
    }
  });

  let correctPlacementsRegular = 0;
  let correctPlacementsVertical = 0;
  grid.forEach((item, index) => {
    if (item === recipeOfTheDayAfixedToGrid[index] && item != null) {
      correctPlacementsRegular++;
    }
    if (item === recipeOfTheDayAfixedToGridVertical[index] && item != null) {
      correctPlacementsVertical++;
    }
  });
  let correctPlacements = 0;
  const isAllNulls = (arr: any[]): boolean => arr.every(item => item === null);
  
    correctPlacements = Math.max(correctPlacementsRegular, correctPlacementsVertical);
  
  
  // Format the items for display
  const formattedItems = itemsInGridAndRecipe.map((item, index) => {
    let formattedItem = item.replace(/_/g, ' ');
    // Capitalize first letter
    formattedItem = formattedItem.charAt(0).toUpperCase() + formattedItem.slice(1);
    
    // Add (s) if not already plural
    if (!formattedItem.endsWith('s')) {
      formattedItem += '(s)';
    }
    
    // Add 'and' for the last item if there's more than one
    if (index === itemsInGridAndRecipe.length - 1 && index !== 0) {
      formattedItem = 'and ' + formattedItem;
    }
    
    return formattedItem;
  });

  
  // Provide encouraging feedback based on correct placements
  let messageCorrectPlacements = "";
  let messageItemsPresent = "";
  if (correctPlacements > 0) {
    messageItemsPresent = `The Recipe of the Day contains ${formattedItems.join(", ")}`;
    messageCorrectPlacements = `You have ${correctPlacements} item${correctPlacements > 1 ? 's' : ''} in the right spot! Keep trying!`;
  } else if (formattedItems.length > 0) {
    messageItemsPresent = `The Recipe of the Day contains ${formattedItems.join(", ")}`;
  } else {
    messageCorrectPlacements = "No matches, keep trying!";
  }

  

  return {
    isMatch: false,
    correctPlacements,
    messageCorrectPlacements,
    messageItemsPresent
  };
}

function mirrorAcrossXAxis(pattern: (string | null)[]): (string | null)[] {
  let holdingvar: string | null
  holdingvar = pattern[0];
  pattern[0] = pattern[2];
  pattern[2] = holdingvar;
  holdingvar = pattern[3];
  pattern[3] = pattern[5];
  pattern[5] = holdingvar;
  holdingvar = pattern[6];
  pattern[6] = pattern[8];
  pattern[8] = holdingvar;
  return pattern;
}

export function checkRecipe(grid: (string | null)[]): Recipe['result'] | null {
  const afixedGrid = afixTopLeft([...grid]);
  for (const recipe of recipes) {
    const afixedRecipe = afixTopLeft([...recipe.pattern]);
    const afixedRecipeVertical = afixTopLeft([...mirrorAcrossXAxis([...recipe.pattern])]);
    const itemsInGridAndRecipe = afixedGrid.filter((item, index) => 
      item === afixedRecipe[index]
    ).length;
    const itemsInGridAndMirroredRecipe = afixedGrid.filter((item,index) => 
      item === afixedRecipeVertical[index]
    ).length;
    const itemsInGridAndRecipeMax = Math.max(itemsInGridAndRecipe, itemsInGridAndMirroredRecipe);
    if (itemsInGridAndRecipeMax === afixedRecipe.length) {
      return recipe.result;
    }
  }
  return null;
} 