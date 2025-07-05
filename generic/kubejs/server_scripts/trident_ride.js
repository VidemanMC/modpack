EntityEvents.spawned('minecraft:trident', e => {
    //e.server.runCommand("/tell @a "+String(e.entity.persistentData.get()))
    e.entity.getNbt().Trident.tag.Enchantments.forEach(enchantment => {
        if (enchantment.id === "kubejs:trident_ride"){
            e.entity.owner.startRiding(e.entity);
        }
    });
})