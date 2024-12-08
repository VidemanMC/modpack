StartupEvents.registry('item', event => {
    event.create('soul_lock')
    .displayName('soul lock')
})

/*StartupEvents.registry("block", event => {

    const anim = RawAnimation.begin().thenLoop("idel");

    event.create("soul_lock_block", "animatable")
        .box(1, 1, 1, 15, 15, 15, true)

        .animatableBlockEntity(blockEntity => {
            blockEntity.addController(state => state.setAndContinue(anim))
        })

        .defaultGeoModel()
})*/

StartupEvents.registry('block', event => {
    event.create('soul_lock_block')
    .displayName("soul_lock_block")
    .blockEntity(entityInfo => {
        entityInfo.inventory(1, 3)
        entityInfo.rightClickOpensInventory()
        entityInfo.clientTick(1, 0, entity => {
            entity.level.addParticle('minecraft:campfire_cosy_smoke', true, entity.x + 0.5, entity.y + 1.05, entity.z + 0.5, 0, 0.3, 0)
        })
        entityInfo.serverTick(1, 0, entity => {
            entity.inventory.insertItem('minecraft:apple', false)
        })
    })
})

