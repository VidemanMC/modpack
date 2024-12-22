/*ItemEvents.firstRightClicked(event => {
    if(event.item.id == "kubejs:soul_lock"){
        let newCow = event.player.block.createEntity("minecart:cow")
        event.server.tell("\"got it\"")
        newCow.spawn()
        event.item.shrink(1)
    }
})*/

/*ItemEvents.firstRightClicked(event => {
    if(event.item.id == "kubejs:soul_lock"){
        let newItem = event.player.getOffHandItem
        newItem.enchantStack("tombstone:soulbound", 1)
        event.server.tell("end")
        event.server.tell(newItem)
        event.item.shrink(1)
        event.entity.setOffHandItem(newItem)

    }
}) old */

/* ItemEvents.firstRightClicked("kubejs:soul_lock", event => {
    const newItem = event.player.getOffHandItem.copy
    //requires: tombstone
    newItem.enchant("tombstone:soulbound", 1)

    event.server.tell(newItem)
    event.item.shrink(1)
    event.player.setOffHandItem(newItem)
    event.server.tell("end")
})*/

EntityEvents.spawned('minecraft:trident', e => e.entity.owner.startRiding(e.entity))

/*event.server.tell("\"got it\"")
event.server.tell(String.toString(event.player.getItemInHand))
event.server.tell(event.item)
event.item.shrink(1)*/

ItemEvents.firstRightClicked("kubejs:soul_lock", e => {
    e.item.enchant("minecraft:fire_aspect", 1)
    e.server.tell("end")
})