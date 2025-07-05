ItemEvents.tooltip(event=>{
    let itemIdList = [
        "kubejs:lunar_shards_default",
        "kubejs:lunar_shards_harvest",
        "kubejs:lunar_shards_blue",
        "kubejs:lunar_shards_blood",
        "kubejs:lunar_stump",
        "kubejs:rough_rune_grind",
        "kubejs:rough_rune_grind_silhouette",
        "kubejs:rough_rune_grind_form",
        "kubejs:unfinished_rune_grind_0",
        "kubejs:unfinished_rune_grind_1",
        "kubejs:unfinished_rune_grind_2",
        "kubejs:unfinished_rune_grind_3",
        "kubejs:unfinished_rune_grind_4"
    ]

    itemIdList.forEach(itemId => {
        event.addAdvanced(itemId, (item, advanced, text)=>{
            text.remove(1);
            text.add(1, Text.translate("item.kubejs."+itemId.split(":")[1]+".desc"));
        })
    });
})
