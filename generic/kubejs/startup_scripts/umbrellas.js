StartupEvents.registry('item', event => {
    //const vamprapi = Java.loadClass('de.teamlapen.vampirism.items.UmbrellaItem')
    event.create('umbrella_videman')
    .displayName('Зонт имени Videman')
    .translationKey(`item.kubejs.umbrella_videman`)
})