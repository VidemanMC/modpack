Find out more info on the website: https://kubejs.com/

Directory information:

assets - Acts as a resource pack, you can put any client resources in here, like textures, models, etc. Example: assets/kubejs/textures/item/test_item.png
data - Acts as a datapack, you can put any server resources in here, like loot tables, functions, etc. Example: data/kubejs/loot_tables/blocks/test_block.json

startup_scripts - Scripts that get loaded once during game startup - Used for adding items and other things that can only happen while the game is loading (Can be reloaded with /kubejs reload_startup_scripts, but it may not work!)
server_scripts - Scripts that get loaded every time server resources reload - Used for modifying recipes, tags, loot tables, and handling server events (Can be reloaded with /reload)
client_scripts - Scripts that get loaded every time client resources reload - Used for JEI events, tooltips and other client side things (Can be reloaded with F3+T)

config - KubeJS config storage. This is also the only directory that scripts can access other than world directory
exported - Data dumps like texture atlases end up here

You can find type-specific logs in logs/kubejs/ directory






















Adds support for Botania recipes, and custom brewing of Flasks, Incenses and Tainted Pendant.

Both Forge and Fabric are supported (Please check in Files tab since Recent Files will only show the latest entry).

For KJS6, you need to adapt code below to fit KJS6's style.

Examples:

In startup_script:

onEvent("botania.brews.registry", event => {
    event.create("torrent")
        /**
         * The cost of mana per brew.
         * For Tainted Blood Pendant, it is cost / duration / effectLevel * 2.5 per tick.
         */
        .cost(5000)
        /**
         * The effect you want to specify for the Brew,
         * can be specified for multiple times for applying
         * multiple effects at once.
         * The parameters come the same as /effect,
         * except for duration is in ticks, not seconds.
         */
        .effect("minecraft:water_breathing", 4800 * 20)
        .effect("botania:allure", 300 * 20, 0, false, false)
        /**
         * Set to deny incense for this brew.
         */
        .noIncense()
        /**
         * Set to deny pendant infusing for this brew.
         */
        .noPendant()
})
 
In server_scripts:

onEvent("recipes", event => {
    event.remove({ output: "botania:livingrock" })

    event.recipes.botania.mana_infusion("minecraft:acacia_boat", "minecraft:acacia_door", 200, "minecraft:acacia_log")
   
    event.recipes.botania.elven_trade(["minecraft:acacia_boat"], "minecraft:diamond")
    event.recipes.botania.elven_trade(["minecraft:acacia_boat", "minecraft:acacia_button"], ["minecraft:diamond_block", "minecraft:gold_ingot"])
   
    event.recipes.botania.pure_daisy("minecraft:acacia_button", "minecraft:acacia_leaves")
    event.recipes.botania.pure_daisy("minecraft:acacia_button", "minecraft:stone", 1)

    event.recipes.botania.brew("kubejs:torrent", ["minecraft:acacia_boat"])

    event.recipes.botania.petal_apothecary("minecraft:acacia_boat", ["minecraft:acacia_button"])

    event.recipes.botania.runic_altar("minecraft:acacia_boat", ["minecraft:acacia_button", "minecraft:acacia_door"], 5000)

    event.recipes.botania.terra_plate("minecraft:acacia_boat", ["minecraft:acacia_button", "minecraft:acacia_door"], 5000000)

    event.recipes.botania.orechid("minecraft:acacia_button", "minecraft:acacia_fence", 1)

    event.recipes.botania.orechid_ignem("minecraft:acacia_leaves", "minecraft:acacia_fence_gate", 1)

    event.recipes.botania.marimorphosis("minecraft:acacia_door", "minecraft:acacia_fence_gate", 1, ["plains"], 10)
})
