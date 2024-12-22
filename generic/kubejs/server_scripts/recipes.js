/*∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎ */
/* ADDS                          */
/*∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎ */
 ServerEvents.recipes(event => {
  /* Сгнившая кожа */
  event.shaped(
      Item.of('kubejs:rotten_skin', 1),
      ["aaa",
       "aba",
       "aaa"],
      {a: 'minecraft:rotten_flesh',
       b: 'minecraft:stick'})
  
  /* медь в железо */
  event.shaped(
      Item.of('ironchest:copper_to_iron_chest_upgrade', 1),
      ["aca",
       "cbc",
       "aca"],
      {a: 'divinerpg:arlemite_ingot',
       b: 'minecraft:copper_ingot',
       c: 'minecraft:glass'})

  /* медь в железо */
  event.shaped(
      Item.of('ironchest:copper_to_iron_chest_upgrade', 1),
      ["aca",
       "cbc",
       "aca"],
      {a: 'divinerpg:rupee_ingot',
       b: 'minecraft:copper_ingot',
       c: 'minecraft:glass'})

  /* дерево в железо */
  event.shaped(
      Item.of('ironchest:wood_to_iron_chest_upgrade', 1),
      ["aaa",
       "aba",
       "aaa"],
      {a: 'divinerpg:arlemite_ingot',
       b: 'minecraft:oak_planks'})

  /* дерево в железо */
  event.shaped(
      Item.of('ironchest:wood_to_iron_chest_upgrade', 1),
      ["aaa",
       "aba",
       "aaa"],
      {a: 'divinerpg:rupee_ingot',
       b: 'minecraft:oak_planks'})
  
  /* Железный сундук */
  event.shaped(
      Item.of('ironchest:iron_chest', 1),
      ["aca",
       "cbc",
       "aca"],
      {a: 'divinerpg:arlemite_ingot',
       b: 'ironchest:copper_chest',
       c: 'minecraft:glass'})

  /* Железный сундук */
  event.shaped(
      Item.of('ironchest:iron_chest', 1),
      ["aca",
       "cbc",
       "aca"],
      {a: 'divinerpg:rupee_ingot',
       b: 'ironchest:copper_chest',
       c: 'minecraft:glass'})
  
  /* Железный сундук */
  event.shaped(
      Item.of('ironchest:iron_chest', 1),
      ["aaa",
       "aba",
       "aaa"],
      {a: 'divinerpg:arlemite_ingot',
       b: 'minecraft:chest'})

  /* Железный сундук */
  event.shaped(
      Item.of('ironchest:iron_chest', 1),
      ["aaa",
       "aba",
       "aaa"],
      {a: 'divinerpg:rupee_ingot',
       b: 'minecraft:chest'})

  /* железо в золото */
  event.shaped(
      Item.of('ironchest:iron_to_gold_chest_upgrade', 1),
      ["aaa",
       "aba",
       "aaa"],
      {a: 'minecraft:gold_ingot',
       b: 'divinerpg:arlemite_ingot'})
  
  /* железо в золото */
  event.shaped(
      Item.of('ironchest:iron_to_gold_chest_upgrade', 1),
      ["aaa",
       "aba",
       "aaa"],
      {a: 'divinerpg:realmite_ingot',
       b: 'divinerpg:arlemite_ingot'})

 
  /* железо в золото */
  event.shaped(
      Item.of('ironchest:iron_to_gold_chest_upgrade', 1),
      ["aaa",
       "aba",
       "aaa"],
      {a: 'divinerpg:realmite_ingot',
       b: 'minecraft:iron_ingot'})

  /* железо в золото */
  event.shaped(
      Item.of('ironchest:iron_to_gold_chest_upgrade', 1),
      ["aaa",
       "aba",
       "aaa"],
      {a: 'divinerpg:realmite_ingot',
       b: 'divinerpg:rupee_ingot'})

  /* железо в золото */
  event.shaped(
      Item.of('ironchest:iron_to_gold_chest_upgrade', 1),
      ["aaa",
       "aba",
       "aaa"],
      {a: 'minecraft:gold_ingot',
       b: 'divinerpg:rupee_ingot'})

  /* Золотой сундук */
  event.shaped(
      Item.of('ironchest:gold_chest', 1),
      ["aaa",
       "aba",
       "aaa"],
      {a: 'divinerpg:realmite_ingot',
       b: 'ironchest:iron_chest'})
  
  /* Золотой сундук */
  event.shaped(
      Item.of('ironchest:gold_chest', 1),
      ["aaa",
       "aba",
       "aaa"],
      {a: 'divinerpg:realmite_ingot',
       b: 'ironchest:iron_chest'})
  
  /* Двойная руна земли */
  event.shapeless(
    Item.of('kubejs:rune_earth_double', 1),
    ['2x botania:rune_earth'])

  /* Двойная руна огня */
  event.shapeless(
    Item.of('kubejs:rune_fire_double', 1),
    ['2x botania:rune_fire'])

  /* Двойная руна воды */
  event.shapeless(
    Item.of('kubejs:rune_water_double', 1),
    ['2x botania:rune_water'])

  /* Двойная руна воздуха */
  event.shapeless(
    Item.of('kubejs:rune_air_double', 1),
    ['2x botania:rune_air'])

  /* Двойная руна осени */
  event.shapeless(
    Item.of('kubejs:rune_autumn_double', 1),
    ['2x botania:rune_autumn'])

  /* Двойная руна весны */
  event.shapeless(
    Item.of('kubejs:rune_spring_double', 1),
    ['2x botania:rune_spring'])

  /* Двойная руна лета */
  event.shapeless(
    Item.of('kubejs:rune_summer_double', 1),
    ['2x botania:rune_summer'])

  /* Двойная руна зимы */
  event.shapeless(
    Item.of('kubejs:rune_winter_double', 1),
    ['2x botania:rune_winter'])

  /* Двойная руна зависти */
  event.shapeless(
    Item.of('kubejs:rune_envy_double', 1),
    ['2x botania:rune_envy'])

  /* Двойная руна обжорства */
  event.shapeless(
    Item.of('kubejs:rune_gluttony_double', 1),
    ['2x botania:rune_gluttony'])

  /* Двойная руна жадности */
  event.shapeless(
    Item.of('kubejs:rune_greed_double', 1),
    ['2x botania:rune_greed'])

  /* Двойная руна похоти */
  event.shapeless(
    Item.of('kubejs:rune_lust_double', 1),
    ['2x botania:rune_lust'])

  /* Двойная руна лени */
  event.shapeless(
    Item.of('kubejs:rune_sloth_double', 1),
    ['2x botania:rune_sloth'])

  /* Двойная руна генева */
  event.shapeless(
    Item.of('kubejs:rune_wrath_double', 1),
    ['2x botania:rune_wrath'])

  /* Двойная руна гордости */
  event.shapeless(
    Item.of('kubejs:rune_pride_double', 1),
    ['2x botania:rune_pride'])

  /* Стопка рун 1 тира */
  event.shapeless(
    Item.of('kubejs:rune_1tire_pile', 1),
    ['kubejs:rune_earth_double',
     'kubejs:rune_fire_double',
     'kubejs:rune_water_double',
     'kubejs:rune_air_double'])

  /* Стопка рун 2 тира */
  event.shapeless(
    Item.of('kubejs:rune_2tire_pile', 1),
    ['kubejs:rune_autumn_double',
     'kubejs:rune_spring_double',
     'kubejs:rune_summer_double',
     'kubejs:rune_winter_double'])

  /* Стопка рун 3 тира */
  event.shapeless(
    Item.of('kubejs:rune_3tire_pile', 1),
    ['kubejs:rune_envy_double',
     'kubejs:rune_gluttony_double',
     'kubejs:rune_greed_double',
     'kubejs:rune_lust_double',
     'kubejs:rune_sloth_double',
     'kubejs:rune_wrath_double',
     'kubejs:rune_pride_double'])

  /* Насыпь рун 1 тира */
  event.shapeless(
    Item.of('kubejs:rune_1mound_pile', 1),
    ['9x kubejs:rune_1tire_pile'])

  /* Насыпь рун 2 тира */
  event.shapeless(
    Item.of('kubejs:rune_2mound_pile', 1),
    ['9x kubejs:rune_2tire_pile'])

  /* Насыпь рун 3 тира */
  event.shapeless(
    Item.of('kubejs:rune_3mound_pile', 1),
    ['9x kubejs:rune_3tire_pile'])

  /* Гора рун */
  event.shapeless(
    Item.of('kubejs:rune_mountain', 1),
    ['3x kubejs:rune_1mound_pile',
     '3x kubejs:rune_2mound_pile',
     '3x kubejs:rune_3mound_pile'])
  
     /* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7 */
     event.recipes.botania.runic_altar("kubejs:rough_rune_grind_silhouette",
      ["kubejs:rune_mountain",
       "kubejs:rune_mountain",
       "kubejs:rune_mountain",
       "kubejs:rune_mountain",
       "kubejs:rune_mountain",
       "kubejs:rune_mountain",
       "kubejs:rune_mountain",
       "kubejs:rune_mountain",
       "create:super_glue"], 252000)

  /* Кожа */
  event.smelting('minecraft:leather', 'kubejs:rotten_skin').cookingTime(300)
  event.smoking('minecraft:leather', 'kubejs:rotten_skin').cookingTime(150)
  event.campfireCooking('minecraft:leather', 'kubejs:rotten_skin', 0.0, 900)
})

/*∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎ */
/* CHANGES                       */
/*∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎ */
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


/*∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎ */
/* remowes                       */
/*∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎∎ */
 ServerEvents.recipes(event => {
  event.remove({id: "botania:cosmetic_witch_pin"})
 })
 