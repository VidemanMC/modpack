BlockEvents.leftClicked("minecraft:chipped_anvil", e => {
    let state = e.block.blockState
    
    if (e.player.xpLevel >= 5 && e.entity.mainHandItem.id === "minecraft:iron_block") { //e.entity.level >= 5 &&
        e.player.xpLevel -= 2.5;
        e.entity.mainHandItem.shrink(1);
        e.block.set("damaged_anvil");
        e.block.blockState = state
    }
})
BlockEvents.leftClicked("minecraft:damaged_anvil", e => {
    let state = e.block.blockState
    
    if (e.player.xpLevel >= 5 && e.entity.mainHandItem.id === "minecraft:iron_block") { //e.player.xpLevel >= 5 && 
        e.player.xpLevel -= 2.5;
        e.entity.mainHandItem.shrink(1);
        e.block.set("anvil");
        e.block.blockState = state
    }
})