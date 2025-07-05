//изменение урона оружию (вроде работа на неофордж) https://discord.com/channels/303440391124942858/1342287295444946984
/* let $ItemAttributeModifierEvent = Java.loadClass("import net.minecraftforge.event.world.BlockEvent");
// I did expand this, just don't feel like renaming my variable :O
const paxelBonuses = {

    'minecraft:netherite_axe': 2,
    'minecraft:netherite_sword': 2,
    'minecraft:netherite_axe': 2,
    'mekanismtools:stone_paxel': -2,
    'mekanismtools:netherite_paxel': 2,
    'mekanismtools:osmium_paxel': -5,
    'mekanismtools:osmium_sword': -2,
    'mekanismtools:osmium_axe': -5,
    'mekanismtools:refined_obsidian_paxel': -6,
    'mekanismtools:refined_obsidian_sword': -4,
    'mekanismtools:refined_obsidian_axe': -6,
    'justdirethings:ferricore_sword': 5,
    'justdirethings:ferricore_axe': 5,
    'justdirethings:blazegold_sword': 6,
    'justdirethings:blazegold_axe': 6,
    // Celestigem Paxel

    'justdirethings:celestigem_paxel': 7,
    'justdirethings:celestigem_sword': 7,
    'justdirethings:celestigem_axe': 7,
    // Eclipse Paxel
    'justdirethings:eclipsealloy_paxel': 7,
    'justdirethings:eclipsealloy_sword': 7,
    'justdirethings:eclipsealloy_axe': 7

};

// Listen for the attribute modifier event to adjust attack damage
NativeEvents.onEvent($ItemAttributeModifierEvent, event => {
    let { itemStack } = event;
    // Check if the current item is one of our paxels
    let bonus = paxelBonuses[itemStack.id];
    if (bonus === undefined) return;
    
    // Create a unique modifier ID for this item
    let modifierId = itemStack.id + "_atk_mod";
    
    // Add the attack damage modifier
    // "minecraft:generic.attack_damage" is the attribute to modify.
    // Using "add_value" will add the bonus to the base attack damage.
    event.addModifier("minecraft:generic.attack_damage", { id: modifierId, amount: bonus, operation: 'add_value' }, 'mainhand');
});*/

//уменьшение макс. хп при смерти https://discord.com/channels/303440391124942858/1288255765446004847
// есть пример как провкрить наличие данных у играка, следовательно проверка первого захода игрока
// есть пример PlayerEvents.loggedIn и EntityEvents.death
// есть пример Math
// пример scheduleInTicks (порядок сообщений (1t - перед сообщение о смерти))
// пример PlayerEvents.respawned
// пример ItemEvents.foodEaten (поедание предметов даёт жизни)
// пример persistentData (простое хранилище данных) вики: https://kubejs.com/wiki/tips/persistent-data

/*
// initialize max health
PlayerEvents.loggedIn(event => {
    if (!event.player.persistentData.maxHealth) {
        event.player.persistentData.maxHealth = 20;
    }
    main(event.player);
});

// handle player death
EntityEvents.death(event => {
    if (event.entity.type !== 'minecraft:player') return;
    let player = event.entity;
    player.persistentData.maxHealth = Math.max(2, player.persistentData.maxHealth - 2);
    player.server.scheduleInTicks(1, () => player.tell("§c§lYou've lost a heart."));
});

PlayerEvents.respawned(event => main(event.player));

// handle food eat
ItemEvents.foodEaten(event => {
    if (['minecraft:enchanted_golden_apple', 'immersive_weathering:enchanted_golden_moss_clump'].includes(event.item.id)) {
        let player = event.player;
        if (player.persistentData.maxHealth < 20) {
            player.persistentData.maxHealth = Math.min(20, player.persistentData.maxHealth + 2);
            main(player);
            player.tell("§d§lYou gained a heart!");
        }
    }
});

// modify player health
function main(player) {
    player.modifyAttribute('minecraft:generic.max_health', 'life_system', player.persistentData.maxHealth - 20, 'addition');
    player.server.scheduleInTicks(1, () => player.health = Math.min(player.health, player.maxHealth));
}*/

//пример выдачи стартового кита

/*
PlayerEvents.loggedIn(event => {
  let pData = event.player.persistentData;
  if (!pData.firstJoin) {
    pData.firstJoin = true
    // Do stuff only on first join, here we give the player some diamonds and a sword
    event.player.give('29x diamond')
    event.player.give('minecraft:diamond_sword[damage=2]')
  }
})
*/