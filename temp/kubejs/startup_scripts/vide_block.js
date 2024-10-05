StartupEvents.registry('block', event => {
    /*
    .soundType
    .property

    .mapColor(???)

    .tagItem('namespace:tag_name')
    .tagBoth('namespace:tag_name')

    .hardness(float)
    .resistance(float)
    .unbreakable()

    .requiresTool(boolean)
    .renderType('solid'|'cutout'|'translucent')
    .color(tintindex, color)

    .textureAll('texturepath')
        Textures all 6 sides of the block to the same texture.
        The path must look like kubejs:block/texture_name (which would be included under kubejs/assets/kubejs/textures/block/texture_name.png).
        Defaults to kubejs:block/<block_name>

    .texture('side', 'texturepath')
        Texture one side by itself. Valid sides are up, down, north, south, east, and west.
    
    .model('modelpath')
        Specify a custom model. 
        The path must look like kubejs:block/texture_name (which would be included under kubejs/assets/kubejs/models/block/texture_name.png).
        Defaults to kubejs:block/<block_name>.

    .noItem()
        Removes the associated item. Minecraft does this by default for a few blocks, like nether portal blocks. Use this if the player should never be able to hold or place the block.
    
    .box(x0, y0, z0, x1, y1, z1, boolean)
    .box(x0, y0, z0, x1, y1, z1) // defaults to true
        Sets a custom hitbox for the block, affecting collision. You can use this multiple times to define a complex shape composed of multiple boxes.
        Each box is a rectangular prism with corners at (x0,y0,z0) and (x1,y1,z1)
        You will probably want to set up a custom block model that matches the shape you define here.
        The final boolean determines the coordinate scale of the box. Passing in true will use the numbers 0-16, while passing in false will use coordinates ranging from 0.0 to 1.0

    .notSolid()
        Tells the renderer that the block isn't solid

    .waterlogged()
    .noDrops()
    .slipperiness(float)

    .randomTick(consumer<randomTickEvent>)
        A function to run when the block recieves a random tick.
    
    .item(consumer<itemBuilder>)
        Modify certain properties of the block's item (see link)
    
    setLootTableJson(json)
        Pass in a custom loot table JSON directly
    setBlockstateJson(json)
        Pass in a custom blockstate JSON directly
    setModelJson(json)
        Pass in a custom model JSON directly
    noValidSpawns(boolean)
        If true, the block is not counted as a valid spawnpoint for entities
    suffocating(boolean)
        Whether the block will suffocate entities that have their head inside it
    viewBlocking(boolean)
        Whether the block counts as blocking a player's view.
    redstoneConductor(boolean)
        Sets whether the block will conduct redstone. True by default.
    transparent(boolean)
        Sets whether the block is transparent or not
    defaultCutout()
        batches a bunch of methods to make blocks such as glass
    defaultTranslucent()
        similar to defaultCutout() but using translucent layer instead

    */
    event.create("vide_block")
    .displayName("Vide block")
    .glassSoundType()
    .unbreakable()
    .lightLevel(10)
    .fullBlock(true)
    .opaque(true)
    .fullBlock(true)
    .tagBlock('minecraft:mineable/pickaxe')
    .requiresTool(true)
    .texture('up', 'kubejs:block/vide_block_up_down')
    .texture('down', 'kubejs:block/vide_block_up_down')
    .noCollision()
    .speedFactor(10.0)
})