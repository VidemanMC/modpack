StartupEvents.registry('item', event => {
    event.create('rotten_skin')
    .displayName('Сгнившая кожа')
    .food(food => {
      food
        .hunger(2)
        .saturation(2) // This value does not directly translate to saturation points gained
        // The real value can be assumed to be:
        // min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
        .alwaysEdible() // Like golden apples
        .meat() // Dogs are willing to eat it
        .eaten(ctx => {
          // runs code upon consumption
          ctx.player.tell(Text.white('Тьфу, какая гадость, зчем я это сделал(а)!'))
          // If you want to modify this code then you need to restart the game.
          // However, if you make this code call a global startup function
          // and place the function *outside* of an event handler
          // then you may use the command:
          // /kubejs reload startup_scripts
          // to reload the function instantly.
          // See example below
        })
    })
})