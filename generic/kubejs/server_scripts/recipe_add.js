ServerEvents.recipes(event => {
    /* осколок луны (обычная) */
    event.shaped(
      Item.of('kubejs:lunar_shards_default', 1),
      ["aba",
       "a a",
       "aaa"],
      {a: 'botania:livingrock',
       b: 'ars_nouveau:ritual_moonfall'})
    
    /* осколок луны (жёлтая) */
    event.shaped(
        Item.of('kubejs:lunar_shards_harvest', 1),
        ["aba",
         "aca",
         "aaa"],
        {a: 'botania:livingrock',
         b: 'ars_nouveau:ritual_moonfall',
         c: 'minecolonies:onion'})
    
    /* осколок луны (синяя) */
    event.shaped(
        Item.of('kubejs:lunar_shards_blue', 1),
        ["aba",
         "aca",
         "aaa"],
        {a: 'botania:livingrock',
         b: 'ars_nouveau:ritual_moonfall',
         c: 'minecraft:rabbit_foot'})
    
    /* осколок луны (кровавая) */
    event.shaped(
        Item.of('kubejs:lunar_shards_blood', 1),
        ["aba",
         "aca",
         "aaa"],
        {a: 'botania:livingrock',
         b: 'ars_nouveau:ritual_moonfall',
         c: 'alexscaves:occult_gem'})
    
    /* осколок луны (большая) */
    event.shaped(
      Item.of('kubejs:lunar_stump', 1),
      ["aba",
       "aca",
       "aaa"],
      {a: 'botania:livingrock',
       b: 'ars_nouveau:ritual_moonfall',
       c: 'ars_nouveau:glyph_aoe'})

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
    
    /* Медное улучение */
    event.shapeless(
      Item.of("ironchest:wood_to_copper_chest_upgrade", 1),
      ["1x ironchest:copper_chest"]
    )

    /* Железное улучение */
    event.shapeless(
      Item.of("ironchest:wood_to_iron_chest_upgrade", 1),
      ["1x ironchest:iron_chest"]
    )

    /* Золотое улучение */
    event.shapeless(
      Item.of("ironchest:iron_to_gold_chest_upgrade", 1),
      ["1x ironchest:gold_chest"]
    )

    /* Алмазное улучение */
    event.shapeless(
      Item.of("ironchest:gold_to_diamond_chest_upgrade", 1),
      ["1x ironchest:diamond_chest"]
    )

    /* Кристальное улучение */
    event.shapeless(
      Item.of("ironchest:diamond_to_crystal_chest_upgrade", 1),
      ["1x ironchest:crystal_chest"]
    )

    /* Обсидиановое улучение */
    event.shapeless(
      Item.of("ironchest:diamond_to_obsidian_chest_upgrade", 1),
      ["1x ironchest:obsidian_chest"]
    )

    /*
    event.shapeless(
      Item.of(),
      []
    ) 
    */
    
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
    
    /* 'netherexp:quartz_crystal' */
    event.shapeless(
      Item.of('netherexp:quartz_crystal', 1),
      ['9x minecraft:quartz_block'])
    
    /* Блок древесного угля */
    event.shapeless(
      Item.of("kubejs:charcoal_block", 1),
      ['9x minecraft:charcoal']
    )

    /* Угль */
    event.shapeless(
      Item.of("minecraft:coal", 1),
      ['1x minecraft:charcoal']
    )

    /* Блок угля */
    event.shapeless(
      Item.of("minecraft:coal_block", 1),
      ['1x kubejs:charcoal_block']
    )

    /* НОРГ 0/3 */
       event.recipes.botania.runic_altar("kubejs:rough_rune_grind_0",
        ["kubejs:rune_mountain",
         "kubejs:rune_mountain",
         "kubejs:rune_mountain",
         "kubejs:rune_mountain",
         "kubejs:rune_mountain",
         "kubejs:rune_mountain",
         "kubejs:rune_mountain",
         "kubejs:rune_mountain",
         "create:super_glue"], 252000)
    
    /* НОРГ 1/3 */
    event.recipes.create.sandpaper_polishing("kubejs:rough_rune_grind_silhouette","kubejs:rough_rune_grind")
    /* НОРГ 2/3 */
    event.recipes.create.sandpaper_polishing("kubejs:rough_rune_grind_form","kubejs:rough_rune_grind_silhouette")
    /* НЗРГ 0/4 */
    event.recipes.create.sandpaper_polishing("kubejs:unfinished_rune_grind_0","kubejs:rough_rune_grind_form")
    /* НЗРГ 1/4 */
    event.recipes.botania.mana_infusion("kubejs:unfinished_rune_grind_1", "kubejs:unfinished_rune_grind_0", 252000)
    /* НЗРГ 2/4 */
    event.recipes.shaped(
      Item.of('kubejs:unfinished_rune_grind_2', 1),
        [" a ",
         "aba",
         " a "],
        {a: 'minecraft:nether_star',
         b: 'kubejs:unfinished_rune_grind_1'})
    /* НЗРГ 3/4 */
    event.recipes.ars_nouveau.enchanting_apparatus(
      ["kubejs:unfinished_rune_grind_2",
        "kubejs:unfinished_rune_grind_2",
        "kubejs:unfinished_rune_grind_2",
        "kubejs:unfinished_rune_grind_2",
        "kubejs:unfinished_rune_grind_2",
        "kubejs:unfinished_rune_grind_2",
        "kubejs:unfinished_rune_grind_2",
        "kubejs:unfinished_rune_grind_2"], // input items
      ["botania:manasteel_ingot"], // reagent
      "kubejs:unfinished_rune_grind_3", // output
      50000 // source cost
      // true // keep nbt of reagent, think like a smithing recipe
    )

    /* Обломки РГ */
    event.recipes.create.crushing(
      ['kubejs:fragments_rune_grind'],
      "kubejs:unfinished_rune_grind_3",
      45000)
    
    /* НЗРГ 4/4 */
    event.recipes.create.mixing(
      ["kubejs:unfinished_rune_grind_4"],
      ['kubejs:fragments_rune_grind',
        'kubejs:fragments_rune_grind',
        'kubejs:fragments_rune_grind',
        'kubejs:fragments_rune_grind',
        'kubejs:fragments_rune_grind',
        'kubejs:fragments_rune_grind',
        'kubejs:fragments_rune_grind',
        'kubejs:fragments_rune_grind',
        'kubejs:fragments_rune_grind',
        "kubejs:unfinished_rune_grind_3"
      ], 45000, "superheated"
    )

    /* Почти завершённая руна Гринда */
    event.recipes.minecraft.crafting_shaped(
      "kubejs:almost_completed_rune_grind",
      [" a ",
        "aba",
        " a "
      ],
      {a: 'botania:terrasteel_ingot',
        b: "kubejs:unfinished_rune_grind_4"
      }
    )

    /* Руна Гринда */
    event.recipes.botania.mana_infusion(
      "kubejs:rune_grind",
      "kubejs:almost_completed_rune_grind",
      304000
    )

    /* Кожа */
    event.smelting('minecraft:leather', 'kubejs:rotten_skin').cookingTime(300)
    event.smoking('minecraft:leather', 'kubejs:rotten_skin').cookingTime(150)
    event.campfireCooking('minecraft:leather', 'kubejs:rotten_skin', 0.0, 900)
  })
