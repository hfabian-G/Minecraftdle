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
  'coal': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/coal.png',
  'flint': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/flint.png',
  'book': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/book.png',
  'redstone': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/redstone.png',
  'compass': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/compass_00.png',
  'wool': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/block/white_wool.png',
  'string': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/string.png',
  'feather': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/feather.png',
  'gold_ingot': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/gold_ingot.png',
  'paper': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/paper.png',
  'sugarcane': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/block/sugar_cane.png',
  
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
  'stone_axe': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/stone_axe.png',
  'wooden_axe': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/wooden_axe.png',
  'diamond_shovel': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/diamond_shovel.png',
  'iron_shovel': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/iron_shovel.png',
  'stone_shovel': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/stone_shovel.png',
  'wooden_shovel': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/wooden_shovel.png',
  'diamond_hoe': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/diamond_hoe.png',
  'iron_hoe': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/iron_hoe.png',
  'stone_hoe': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/stone_hoe.png',
  'wooden_hoe': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/wooden_hoe.png',
  
  // Blocks and Storage
  'bookshelf': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/block/bookshelf.png',
  'chest': 'https://mcdf.wiki.gg/images/3/36/Locked_Chest1.png',
  'crafting_table': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/block/crafting_table_front.png',
  'furnace': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/block/furnace_front.png',
  'shulker_box': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/block/shulker_box.png',
  
  // Additional items from recipes
  'torch': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/block/torch.png',
  'wooden_door': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/oak_door.png',
  'bed': 'https://cdn.apexminecrafthosting.com/img/uploads/2020/12/17184712/bed.png',
  'ladder': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/block/ladder.png',
  'bow': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/bow.png',
  'arrow': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/arrow.png',
  'shield': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/shield.pnghttps://www.models-resource.com/resources/big_icons/62/61099.png?updated=1678478510',
  'boat': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/oak_boat.png',
  'bucket': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/bucket.png',
  'fishing_rod': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/fishing_rod.png',
  'clock': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/clock_00.png',
  'map': 'https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/map.png'
};

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, '../public/items', filename + '.png');
  
  https.get(url, (response) => {
    if (response.statusCode === 200) {
      const file = fs.createWriteStream(filepath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Successfully downloaded ${filename}`);
      });

      file.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file if there was an error
        console.error(`Error writing file ${filename}: ${err.message}`);
      });
    } else {
      console.error(`Failed to download ${filename}: ${response.statusCode} - ${response.statusMessage}`);
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

// Download all items with a delay between each to avoid rate limiting
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function downloadAllItems() {
  for (const [name, url] of Object.entries(items)) {
    console.log(`Starting download of ${name}...`);
    downloadImage(url, name);
    await delay(100); // Wait 100ms between downloads
  }
}

downloadAllItems().catch(console.error); 