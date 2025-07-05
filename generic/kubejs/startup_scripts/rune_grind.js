StartupEvents.registry('item', event => {
    event.create('rough_rune_grind')
    .displayName('Неограненная руна Гринда')
    //&8прогресс: 0/3
    
    event.create('rough_rune_grind_silhouette')
    .displayName('Неограненная руна Гринда')
    //&8прогресс: 1/3
    
    event.create('rough_rune_grind_form')
    .displayName('Неограненная руна Гринда')
    //&8прогресс: 2/3
    
    event.create('fragments_rune_grind')
    .displayName('Осколки руны Гринда')
    
    event.create('unfinished_rune_grind_0')
    .displayName('Незавершенная руна Гринда')
    //&8прогресс: 0/4
    .texture("kubejs:item/unfinished_rune_grind")

    event.create('unfinished_rune_grind_1')
    .displayName('Незавершенная руна Гринда')
    //&8прогресс: 1/4
    .texture("kubejs:item/unfinished_rune_grind_1")

    event.create('unfinished_rune_grind_2')
    .displayName('Незавершенная руна Гринда')
    //&8прогресс: 2/4
    .texture("kubejs:item/unfinished_rune_grind_2")

    event.create('unfinished_rune_grind_3')
    .displayName('Незавершенная руна Гринда')
    //&8прогресс: 3/4
    .texture("kubejs:item/unfinished_rune_grind")
    .glow(true)

    event.create('unfinished_rune_grind_4')
    .displayName('Незавершенная руна Гринда')
    //&8прогресс: [4/4]
    .texture("kubejs:item/unfinished_rune_grind_4")
    .glow(true)

    event.create('almost_completed_rune_grind')
    .displayName('Почти завершённая руна Гринда')
    .texture("kubejs:item/almost_completed_rune_grind")
    .glow(true)
    
    event.create('rune_grind')
    .displayName('Руна Гринда')

    event.create('rune_grind_double')
    .displayName('Двойная руна Гринда')
    /* after countless hours and items, you make this abomination, аnd still don't quite understand what for. */
})

StartupEvents.registry("block", event => {
    event.create("block_of_flam")
    .displayName("Block of flam")
    .textureAll('kubejs:block/block_of_flam')
    .glassSoundType()
    .fullBlock(true)
    .opaque(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .requiresTool(true)
})
