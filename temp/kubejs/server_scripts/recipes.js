ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:rotten_skin', 1),
        [
          "aaa",
          "aba",
          "aaa"
        ],
        {
          a: 'minecraft:rotten_flesh',
          b: 'minecraft:stick'
        }
      )
    
    event.shaped(
        Item.of('ironchest:iron_to_gold_chest_upgrade', 1),
        [
          "aaa",
          "aba",
          "aaa"
        ],
        {
          a: 'minecraft:gold_ingot',
          b: 'divinerpg:arlemite_ingot'
        }
      )
    
    event.shaped(
        Item.of('ironchest:iron_to_gold_chest_upgrade', 1),
        [
          "aaa",
          "aba",
          "aaa"
        ],
        {
          a: 'divinerpg:realmite_ingot',
          b: 'divinerpg:arlemite_ingot'
        }
      )

    event.shaped(
        Item.of('ironchest:copper_to_iron_chest_upgrade', 1),
        [
          "aca",
          "cbc",
          "aca"
        ],
        {
          a: 'divinerpg:arlemite_ingot',
          b: 'minecraft:copper_ingot',
          c: 'minecraft:glass'
        }
      )

    event.shaped(
        Item.of('ironchest:copper_to_iron_chest_upgrade', 1),
        [
          "aca",
          "cbc",
          "aca"
        ],
        {
          a: 'divinerpg:rupee_ingot',
          b: 'minecraft:copper_ingot',
          c: 'minecraft:glass'
        }
      )
    
    event.shaped(
        Item.of('ironchest:iron_to_gold_chest_upgrade', 1),
        [
          "aaa",
          "aba",
          "aaa"
        ],
        {
          a: 'divinerpg:realmite_ingot',
          b: 'minecraft:iron_ingot'
        }
      )

    event.shaped(
        Item.of('ironchest:iron_to_gold_chest_upgrade', 1),
        [
          "aaa",
          "aba",
          "aaa"
        ],
        {
          a: 'divinerpg:realmite_ingot',
          b: 'divinerpg:rupee_ingot'
        }
      )

    event.shaped(
        Item.of('ironchest:wood_to_iron_chest_upgrade', 1),
        [
          "aaa",
          "aba",
          "aaa"
        ],
        {
          a: 'divinerpg:arlemite_ingot',
          b: 'minecraft:oak_planks'
        }
      )

    event.shaped(
        Item.of('ironchest:wood_to_iron_chest_upgrade', 1),
        [
          "aaa",
          "aba",
          "aaa"
        ],
        {
          a: 'divinerpg:rupee_ingot',
          b: 'minecraft:oak_planks'
        }
      )

    event.shaped(
        Item.of('ironchest:iron_chest', 1),
        [
          "aca",
          "cbc",
          "aca"
        ],
        {
          a: 'divinerpg:arlemite_ingot',
          b: 'ironchest:copper_chest',
          c: 'minecraft:glass'
        }
      )

    event.shaped(
        Item.of('ironchest:iron_chest', 1),
        [
          "aca",
          "cbc",
          "aca"
        ],
        {
          a: 'divinerpg:rupee_ingot',
          b: 'ironchest:copper_chest',
          c: 'minecraft:glass'
        }
      )

    event.shaped(
        Item.of('ironchest:gold_chest', 1),
        [
          "aaa",
          "aba",
          "aaa"
        ],
        {
          a: 'divinerpg:realmite_ingot',
          b: 'ironchest:iron_chest'
        }
      )
    
    event.shaped(
        Item.of('ironchest:gold_chest', 1),
        [
          "aaa",
          "aba",
          "aaa"
        ],
        {
          a: 'divinerpg:realmite_ingot',
          b: 'ironchest:iron_chest'
        }
      )

    event.shaped(
        Item.of('ironchest:iron_to_gold_chest_upgrade', 1),
        [
          "aaa",
          "aba",
          "aaa"
        ],
        {
          a: 'minecraft:gold_ingot',
          b: 'divinerpg:rupee_ingot'
        }
      )

    event.shaped(
        Item.of('ironchest:iron_chest', 1),
        [
          "aaa",
          "aba",
          "aaa"
        ],
        {
          a: 'divinerpg:arlemite_ingot',
          b: 'minecraft:chest'
        }
      )

    event.shaped(
        Item.of('ironchest:iron_chest', 1),
        [
          "aaa",
          "aba",
          "aaa"
        ],
        {
          a: 'divinerpg:rupee_ingot',
          b: 'minecraft:chest'
        }
      )
    
    event.smelting('minecraft:leather', 'kubejs:rotten_skin').cookingTime(300)
    event.smoking('minecraft:leather', 'kubejs:rotten_skin').cookingTime(150)
    event.campfireCooking('minecraft:leather', 'kubejs:rotten_skin', 0.0, 900)
  })

/* remowes */

/*ServerEvents.recipes(event => {
  event.remove({id: "botania:pure_daisy/livingrock" })
 })*/