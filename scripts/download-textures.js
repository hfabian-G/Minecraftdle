const https = require('https');
const fs = require('fs');
const path = require('path');

const items = {
  // Base items
  'planks': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/block/oak_planks.png',
  'stick': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/stick.png',
  'cobblestone': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/block/cobblestone.png',
  'iron_ingot': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/iron_ingot.png',
  'diamond': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/diamond.png',
  'log': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/block/oak_log.png',
  
  // Tools and Weapons
  'diamond_pickaxe': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/diamond_pickaxe.png',
  'iron_pickaxe': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/iron_pickaxe.png',
  'stone_pickaxe': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/stone_pickaxe.png',
  'wooden_pickaxe': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/wooden_pickaxe.png',
  'diamond_sword': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/diamond_sword.png',
  'iron_sword': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/iron_sword.png',
  'stone_sword': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/stone_sword.png',
  'wooden_sword': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/wooden_sword.png',
  'diamond_axe': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/diamond_axe.png',
  'iron_axe': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/iron_axe.png',
  
  // Blocks and Storage
  'crafting_table': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/block/crafting_table_front.png',
  'chest': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/entity/chest/normal.png',
  'furnace': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/block/furnace_front.png'
};

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, '../public/items', filename + '.png');
  
  https.get(url, (response) => {
    if (response.statusCode === 200) {
      const file = fs.createWriteStream(filepath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
      });
    } else {
      console.error(`Failed to download ${filename}: ${response.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
};

// Create items directory if it doesn't exist
const itemsDir = path.join(__dirname, '../public/items');
if (!fs.existsSync(itemsDir)) {
  fs.mkdirSync(itemsDir, { recursive: true });
}

// Download all items
Object.entries(items).forEach(([name, url]) => {
  downloadImage(url, name);
}); 