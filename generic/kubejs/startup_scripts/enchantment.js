StartupEvents.registry("enchantment", e => {
    //Создание "Ride on trident"
    e.create("trident_ride")
        .translationKey("item.kubejs.trident_ride")
        .maxLevel(1)
        .rarity('rare')
        //.conflictsWith('minecraft:fortune');
        .trident()
})


//// MoreJS - Custom Enchantments
//// Required mod: MoreJS (MJS)
//
//// Register custom enchantment at startup
//StartupEvents.registry('enchantment', event => {
//    // Create a "Vortex" enchantment that pulls in nearby items
//    event.create('vortex')
//      .displayName('Vortex')
//      .rarity('rare')
//      .minLevel(1)
//      .maxLevel(3)
//      .availableForEnchantedBooks()
//      .availableForItems(['minecraft:iron_pickaxe', 'minecraft:diamond_pickaxe', 'minecraft:netherite_pickaxe'])
//      .canApplyAtEnchantingTable()
//      .treasureOnly()
//      .conflictsWith('minecraft:fortune', 'minecraft:silk_touch');
//  });
//  
//  // Implement the enchantment effect
//  ServerEvents.tick(event => {
//    // For all players with the enchantment active
//    for (const player of event.server.players) {
//      // Check both hands for the enchantment
//      [player.mainHandItem, player.offHandItem].forEach(item => {
//        const vortexLevel = MJS.getEnchantmentLevel(item, 'kubejs:vortex');
//        if (vortexLevel > 0) {
//          applyVortexEffect(player, vortexLevel);
//        }
//      });
//    }
//  });
//  
//  function applyVortexEffect(player, level) {
//    // Get entities within range
//    const range = 3 + (level * 2); // 5, 7, or 9 blocks range
//    const entities = player.level.getEntitiesOfClass('minecraft:item', player.getBoundingBox().inflate(range));
//    
//    // Pull each item toward the player with strength based on level
//    entities.forEach(entity => {
//      const strength = 0.1 * level;
//      const dx = player.x - entity.x;
//      const dy = player.y + 0.5 - entity.y;
//      const dz = player.z - entity.z;
//      
//      // Calculate distance
//      const distance = Math.sqrt(dx*dx + dy*dy + dz*dz);
//      if (distance < 0.5) return; // Don't move items that are very close
//      
//      // Calculate pull direction
//      const factor = strength / distance;
//      const vx = dx * factor;
//      const vy = dy * factor;
//      const vz = dz * factor;
//      
//      // Apply motion
//      entity.setMotion(entity.motionX + vx, entity.motionY + vy, entity.motionZ + vz);
//      
//      // Visual effect if it's being pulled
//      if (level > 1 && Math.random() < 0.2) {
//        player.level.spawnParticle(
//          'minecraft:portal',
//          entity.x, entity.y, entity.z,
//          1, 0.5, 0.5, 0.5, 0.05
//        );
//      }
//    });
//  }
//  
//  // Register recipe for the enchanted book
//  ServerEvents.recipes(event => {
//    event.shaped(
//      Item.of('minecraft:enchanted_book').enchant('kubejs:vortex', 1),
//      [
//        'PPP',
//        'PBP',
//        'PPP'
//      ],
//      {
//        P: 'minecraft:ender_pearl',
//        B: 'minecraft:book'
//      }
//    ).id('kubejs:vortex_enchantment_book');
//  });
//  
//  // Add treasure loot table for the enchanted book
//  LootJS.modifiers(event => {
//    event.addLootTableModifier('minecraft:chests/end_city_treasure')
//      .addWeightedLoot([
//        Item.of('minecraft:enchanted_book').enchant('kubejs:vortex', 1).withChance(0.2),
//        Item.of('minecraft:enchanted_book').enchant('kubejs:vortex', 2).withChance(0.1),
//        Item.of('minecraft:enchanted_book').enchant('kubejs:vortex', 3).withChance(0.05)
//      ]);
//  });