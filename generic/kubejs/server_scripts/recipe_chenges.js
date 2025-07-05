ServerEvents.recipes(event => {
    /* слиток террастали */
    event.remove({id: "botania:terra_plate/terrasteel_ingot" })
    event.recipes.botania.terra_plate(
        "botania:terrasteel_ingot",
        ["botania:mana_pearl", "botania:mana_diamond", "botania:manasteel_ingot", 'kubejs:rune_grind'],
        500000)
  
    /* wiher aconite */
    event.remove({id: "mythicbotany:wiher_aconite_petal_apothecary" })
    event.recipes.botania.petal_apothecary(
      "mythicbotany:wither_aconite",
      ["#botania:seed_apothecary_reagent", "minecraft:wither_rose", "botania:rune_pride", "#botania:petals/black", "#botania:petals/black", 'kubejs:rune_grind'])
      
    /* руна воздуха */
    event.remove({id: "botania:runic_altar/air" })
    event.recipes.botania.runic_altar(
      "botania:rune_air",
      ["#botania:mana_dusts", "#botania:manasteel_ingots", "#minecraft:wool_carpets", "minecraft:feather", "minecraft:string"], 7800)
    
    /* руна воды */
    event.remove({id: "botania:runic_altar/water" })
    event.recipes.botania.runic_altar(
      "botania:rune_water",
      ["#botania:mana_dusts", "#botania:manasteel_ingots", "minecraft:bone_meal", "minecraft:sugar_cane", "minecraft:fishing_rod"], 7800)
  
    /* руна земли */
    event.remove({id: "botania:runic_altar/earth" })
    event.recipes.botania.runic_altar(
      "botania:rune_earth",
      ["#botania:mana_dusts", "#botania:manasteel_ingots", "minecraft:stone", "minecraft:coal_block", ["minecraft:brown_mushroom", "minecraft:red_mushroom"]], 7800)
  
    /* руна огня */
    event.remove({id: "botania:runic_altar/fire" })
    event.recipes.botania.runic_altar(
      "botania:rune_fire",
      ["#botania:mana_dusts", "#botania:manasteel_ingots", "minecraft:nether_brick", "minecraft:gunpowder", "minecraft:nether_wart"], 7800)
    
      /* руна осени */
    event.remove({id: "botania:runic_altar/autumn" })
    event.recipes.botania.runic_altar(
      "botania:rune_autumn",
      ["botania:rune_fire", "botania:rune_air", "#minecraft:leaves", "#minecraft:leaves", "#minecraft:leaves", "minecraft:spider_eye"], 48000)
    
    /* руна весны */
    event.remove({id: "botania:runic_altar/spring" })
    event.recipes.botania.runic_altar(
      "botania:rune_spring",
      ["botania:rune_water", "botania:rune_fire", "#minecraft:saplings", "#minecraft:saplings", "#minecraft:saplings", "minecraft:wheat"], 48000)
  
    /* руна лета */
    event.remove({id: "botania:runic_altar/summer" })
    event.recipes.botania.runic_altar(
      "botania:rune_summer",
      ["botania:rune_earth", "botania:rune_air", "#minecraft:sand", "#minecraft:sand", "minecraft:slime_ball", "minecraft:melon_slice"], 48000)
  
    /* руна зимы */
    event.remove({id: "botania:runic_altar/winter" })
    event.recipes.botania.runic_altar(
      "botania:rune_winter",
      ["botania:rune_water", "botania:rune_earth", "minecraft:snow_block", "minecraft:snow_block", "minecraft:wool", "minecraft:cake"], 48000)
  
  
    /* руна envy */
    event.remove({id: "botania:runic_altar/envy" })
    event.recipes.botania.runic_altar(
      "botania:rune_envy",
      ["#botania:mana_diamond_gems", "#botania:mana_diamond_gems", "botania:rune_winter", "botania:rune_water"], 192000)
  
    /* руна gluttony */
    event.remove({id: "botania:runic_altar/gluttony" })
    event.recipes.botania.runic_altar(
      "botania:rune_gluttony",
      ["#botania:mana_diamond_gems", "#botania:mana_diamond_gems", "botania:rune_winter", "botania:rune_fire", "minecraft:nether_wart"], 192000)
  
    /* руна жадности */
    event.remove({id: "botania:runic_altar/greed" })
    event.recipes.botania.runic_altar(
      "botania:rune_greed",
      ["#botania:mana_diamond_gems", "#botania:mana_diamond_gems", "botania:rune_spring", "botania:rune_water"], 192000)
  
    /* руна lust */
    event.remove({id: "botania:runic_altar/lust" })
    event.recipes.botania.runic_altar(
      "botania:rune_lust",
      ["#botania:mana_diamond_gems", "#botania:mana_diamond_gems", "botania:rune_summer", "botania:rune_air"], 192000)
  
    /* руна гордости */
    event.remove({id: "botania:runic_altar/pride" })
    event.recipes.botania.runic_altar(
      "botania:rune_pride",
      ["#botania:mana_diamond_gems", "#botania:mana_diamond_gems", "botania:rune_summer", "botania:rune_fire"], 192000)
  
    /* руна sloth */
    event.remove({id: "botania:runic_altar/sloth" })
    event.recipes.botania.runic_altar(
      "botania:rune_sloth",
      ["#botania:mana_diamond_gems", "#botania:mana_diamond_gems", "botania:rune_autumn", "botania:rune_air"], 192000)
  
  
    /* руна wrath */
    event.remove({id: "botania:runic_altar/wrath" })
    event.recipes.botania.runic_altar(
      "botania:rune_wrath",
      ["#botania:mana_diamond_gems", "#botania:mana_diamond_gems", "botania:rune_winter", "botania:rune_earth"], 192000)
   })