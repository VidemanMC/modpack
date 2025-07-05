StartupEvents.registry("item", e=> {
    e.create("lunar_shards_default")
    .tooltip("§7Магия этого осколка способна напитать луну §fчистым§7 светом.")
    .maxStackSize(16)
})

StartupEvents.registry("item", e=> {
    e.create("lunar_shards_harvest")
    //§8Магия этого осколка способна напитать луну плодородным светом.
    .maxStackSize(16)
})

StartupEvents.registry("item", e=> {
    e.create("lunar_shards_blue")
    .tooltip("§7Магия этого осколка способна напитать луну §9редкими§7 светами.")
    .maxStackSize(16)
})

StartupEvents.registry("item", e=> {
    e.create("lunar_shards_blood")
    .tooltip("§7Магия этого осколка способна напитать луну §4кровавым§7 светом.")
    .maxStackSize(16)
})

StartupEvents.registry("item", e=> {
    e.create("lunar_stump")
    .tooltip("§7Магия этого обломка способна §f§lусилить§7 свет лунный.")
    .maxStackSize(8)
})

/*StartupEvents.registry("enhancedcelestials:lunar/event", e=>{
    e.create("kubejs:test_moon")
})*/