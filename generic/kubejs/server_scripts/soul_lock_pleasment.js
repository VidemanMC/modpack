PlayerEvents.inventoryChanged(e => {
  e.entity.getNbt().Inventory.forEach(item => {
    if (item.id === "minecraft:enchanted_book"){
      item.tag.StoredEnchantments.forEach(enchantment => {
        if (enchantment.id === "tombstone:soulbound"){
          console.log("!!");
          item.nbt.merge({Count: (item.getNbt().Count-1)})
        }
      })
    }
  });
})

PlayerEvents.inventoryChanged(event => {
    let player = event.entity;

    JsonIO.write(`kubejs/exported/player/${player.username}.json`, {
        //player: player.username,
        items: player.inventory.getAllItems()
        //maxHealth: player.getMaxHealth(),
        //health: player.getHealth(),
        //lostHealth: (player.getMaxHealth() - player.getHealth()),
        //effects: player.getPotionEffects(),
        //tags: player.getTags(),
        //armor: player.armorSlots.map((item) => item.id),
      });
    
    /*let obj = JsonIO.read(`kubejs/exported/player/${player.username}.json`);
    var count = 0;
    for (var i in Object.keys(obj.items)) {
      if ((obj.items[Object.keys(obj.items)[i]].hasOwnProperty('item')) & 
          (obj.items[Object.keys(obj.items)[i]].hasOwnProperty('nbt')) ) {
        count++;
    }}

    player.tell(count)*/
  
      //player.tell(JsonIO.read(`kubejs/exported/player/${player.username}.json`))
})
