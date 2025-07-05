PlayerEvents.tick((event) => {
    const { player } = event;
    let range = 5;

    if (player.block.id === "createteleporters:quantum_fluid") {
      //Math.random() -> нормализированое число | range - максимум
      //let old_player_pos = [player.x,player.y,player.z]
      //let player_pos = old_player_pos

      //player_pos.forEach(element => {
        //element += Math.random()*range
      //});

      player.x += Math.random()*range
      player.y += Math.random()*range
      player.z += Math.random()*range

      //if(player.block.id === "minecraft:air" 
        //&&( player_pos[0]!=old_player_pos[0] 
        //|| player_pos[1]!=old_player_pos[1] 
        //|| player_pos[2]!=old_player_pos[2])){
        //  player.x = player_pos[0]
        //  player.y = player_pos[1]
        //  player.z = player_pos[2]
        //}
    }
  });