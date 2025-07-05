
ItemEvents.firstRightClicked('kubejs:trident_blesing', e =>{
    if(player.persistentData.getBoolean("trident_blesing")){
        player.persistentData.putBoolean("trident_blesing", false);
        e.server.runCommand("/tell @a F");
    } else {
        player.persistentData.putBoolean("trident_blesing", true);
        e.server.runCommand("/tell @a T");
    }
})

// soul_lock
ItemEvents.firstRightClicked("kubejs:soul_lock", e => {
    // slot -106 is second hand
    if (e.entity.getItemBySlot(-106) == Item.of("kubejs:soul_lock")){
        e.item.shrink(1);
        e.item.enchant("tombstone:soulbound", 1)
        //e.entity.runCommand("/enchant @s tombstone:soulbound 1");
    }
    //e.item.enchant("tombstone:soulbound", 1)
    e.server.tell("end");
})

// Lunar shards
ItemEvents.firstRightClicked("kubejs:lunar_shards_default", e=> {
    e.item.shrink(1);
    e.server.runCommand("/enhancedcelestials setLunarEvent enhancedcelestials:default");
})

ItemEvents.firstRightClicked("kubejs:lunar_shards_harvest", e=> {
    e.item.shrink(1);
    e.server.runCommand("/enhancedcelestials setLunarEvent enhancedcelestials:harvest_moon");
})

ItemEvents.firstRightClicked("kubejs:lunar_shards_blue", e=> {
    e.item.shrink(1);
    e.server.runCommand("/enhancedcelestials setLunarEvent enhancedcelestials:blue_moon");
})

ItemEvents.firstRightClicked("kubejs:lunar_shards_blood", e=> {
    e.item.shrink(1);;
    e.server.runCommand("/enhancedcelestials setLunarEvent enhancedcelestials:blood_moon");
})

ItemEvents.firstRightClicked("kubejs:lunar_stump", e=> {
    e.item.shrink(1);
    e.server.runCommand("/enhancedcelestials setLunarEvent #enhancedcelestials:super_moon");
})