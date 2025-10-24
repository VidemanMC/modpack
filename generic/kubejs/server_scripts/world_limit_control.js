ServerEvents.tick(e => {
    global.time += 1
    //global.time = 0
})

ServerEvents.tick(e => {
    let border = global.world_limit;
    e.server.getData()
    if(global.time%20 == 0){
    //e.server.tell(global.time); 
    //CommandSilent
    e.server.runCommandSilent("worldborder set "+(border+(global.time*0.05)*global.speed)+" 1");
    e.server.runCommand("worldborder get");
    //e.server.tell("!");
    }
})