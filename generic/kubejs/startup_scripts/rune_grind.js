StartupEvents.registry('item', event => {
    event.create('rough_rune_grind')
    .displayName('Неограненная руна Гринда')
    
    event.create('rough_rune_grind_silhouette')
    .displayName('Неограненная руна Гринда')
    
    event.create('rough_rune_grind_form')
    .displayName('Неограненная руна Гринда')
    
    event.create('fragments_rune_grind')
    .displayName('Ссколки руны Гринда')
    
    event.create('unfinished_rune_grind')
    .displayName('Незавершенная руна Гринда')
    
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
