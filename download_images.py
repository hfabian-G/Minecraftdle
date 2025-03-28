import os
import requests

def download_image(item_id):
    # Create the URL for the Minecraft assets
    url = f"https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.19.3/assets/minecraft/textures/item/{item_id}.png"
    
    # Create the output directory if it doesn't exist
    os.makedirs('public/items', exist_ok=True)
    
    # Download the image
    response = requests.get(url)
    if response.status_code == 200:
        with open(f'public/items/{item_id}.png', 'wb') as f:
            f.write(response.content)
        print(f"Downloaded {item_id}")
    else:
        print(f"Failed to download {item_id}")

# List of all items that need images
items = [
    # Base items
    'planks', 'stick', 'cobblestone', 'iron_ingot', 'diamond', 'log',
    'coal', 'flint', 'book', 'redstone', 'compass', 'wool', 'string',
    'feather', 'gold_ingot', 'paper', 'sugarcane',
    
    # Tools and weapons
    'diamond_pickaxe', 'iron_pickaxe', 'stone_pickaxe', 'wooden_pickaxe',
    'diamond_sword', 'iron_sword', 'stone_sword', 'wooden_sword',
    'diamond_axe', 'iron_axe', 'stone_axe', 'wooden_axe',
    'diamond_shovel', 'iron_shovel', 'stone_shovel', 'wooden_shovel',
    'diamond_hoe', 'iron_hoe', 'stone_hoe', 'wooden_hoe',
    
    # Blocks
    'bookshelf', 'chest', 'crafting_table', 'furnace',
    
    # Storage
    'chest', 'barrel', 'shulker_box'
]

# Download all images
for item in items:
    download_image(item) 