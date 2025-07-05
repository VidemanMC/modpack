ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments } = event
  
  event.register(Commands.literal('fly') // The name of the command
    .requires(s => s.hasPermission(2)) // Check if the player has operator privileges
    .then(Commands
      .argument('target_1', Arguments.PLAYER.create(event))
      .argument('target1', Arguments.INTEGER.create(event))
      .executes(c => fly(Arguments.PLAYER.getResult(c, 'target_1'),Arguments.INTEGER.getResult(c, 'target1'))) // Toggle flight for the player included in the `target` argument
    )
  )
  
  // Helper function
  let fly = (player, player1) => {
    console.log(player)
    console.log(player1)
    
    return 1
  }
})

/*ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
  
    event.register(
      Commands.literal('rtp')
        .requires(s => s.hasPermission(2))
        .then(
          Commands.argument('target', Arguments.PLAYER.create(event),
           "min_max_x", Arguments.INTEGER,
           "mi_max_y", Arguments.INTEGER,
           "min_max_z", Arguments.INTEGER,) // Add argument
            .executes(c => rtp(Arguments.PLAYER.getResult(c, "target"),
            Arguments.INTEGER.getResult(c, "min_max_x"),
            Arguments.INTEGER.getResult(c, "min_max_y"),
            Arguments.INTEGER.getResult(c, "min_max_z"))
  )));

    const rtp = (player, x,y,z) => {
      const entity = Arguments.PLAYER.getResult(c, "target")
      if (entity) {
        const x = Arguments.INTEGER.getResult(c, "min_max_x");
        const y = Arguments.INTEGER.getResult(c, "min_max_y");
        const z = Arguments.INTEGER.getResult(c, "min_max_z");
        console.log(x,y,z)
        return 1;
      }
      return 0;
    };
});*/

/*
    event.register(
      Commands.literal('rtp')
        .requires(s => s.hasPermission(2))
        .then(
          Commands.argument('target', Arguments.PLAYER.create(event),
           "min_max_x", Arguments.INTEGER,
           "mi_max_y", Arguments.INTEGER,
           "min_max_z", Arguments.INTEGER,) // Add argument
            .executes(c => rtp(Arguments.PLAYER
              .getResult(
                c, 'target')
              .getResult(
                c, "min_max_x",)
              .getResult(
                c, "min_max_y",)
              .getResult(
                c, "min_max_z")))
        )
    );
*/