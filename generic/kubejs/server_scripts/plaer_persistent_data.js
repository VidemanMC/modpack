PlayerEvents.loggedIn(event => {
    function addPersistentData(name,type,default_value){
        let pData = event.player.persistentData;
        //if (!pData.firstJoin) {
        //  pData.firstJoin = true}
        if (type == "boolean"){
            if (!pData.getBoolean(name))
                {pData.putBoolean(name, default_value);}
        }
    }

    addPersistentData("first_join","boolean",true);
    addPersistentData("trident_blesing","boolean",false);
})