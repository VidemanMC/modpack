Ponder.tags((event) => {
    /**
     * "kubejs:cat_name" -> the tag name
     * "kubejs:vide_block"        -> the icon
     * "Getting Started"        -> the title
     * "This is a description"  -> the description
     * [...items]               -> default items
     */
    event.createTag("kubejs:cat_name", "kubejs:vide_block", "Very vide tests!", "Videman inc. found ponders!", [
        // some default items
        "kubejs:vide_block",
        "kubejs:vide_ivem"
    ]);
});

// [0,0,0] on the bottom

Ponder.registry((event) => {
    /**
     * Create a new ponder entry with one scene for "kubejs:vide_block".
     */
    event.create("kubejs:vide_block")
    .scene("our_first_scene",
        "First example scene for videman",
        "kubejs:plants_ponder",
        (scene, util) => {
            // your scene code here
            scene.showStructure();
            /*
             * idle(ticks) or idleSeconds(seconds) is used to wait for a certain amount of time.
             * 20 ticks = 1 second
             */
    scene.idle(30);
            const creeperLink = scene.world.createEntity("creeper", [3.5, 1, 3.5]);
            scene
                .text(60, "Какой красивый", [3.0, 2.5, 3.5])
                /*
                 * Optional | Sets the color of the text.
                 * Possible values:
                 * - PonderPalette.WHITE, PonderPalette.BLACK
                 * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
                 * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
                 * - PonderPalette.INPUT, PonderPalette.OUTPUT
                 */
                .colored(PonderPalette.RED)
                .attachKeyFrame();
    scene.idle(100);
            scene
                .showControls(60, [3.5, 3, 3.5], "down")
                .rightClick()
                .withItem("flint_and_steel")
    });
});






// for 1.18 pls use: onEvent("ponder.registry", event => { ... })
Ponder.registry((event) => {
    event.create("minecraft:paper")
    .scene("our_first_scene", 
        "First example scene", 
        (scene, util) => {
        /**
         * Shows the whole structure.
         * Alternatively, `scene.showBasePlate()` can be used to show the base plate.
         * Useful for animating different parts of the structure.
         */
        scene.showStructure();
        
        /**
         * Encapsulate the structure bounds to given positions. This is useful if the custom structure has no proper bounds.
         * scene.showStructure() automatically encapsulates the bounds.
         */
        // scene.encapsulateBounds(blockPos)

        /**
         * idle(ticks) or idleSeconds(seconds) is used to wait for a certain amount of time.
         * 20 ticks = 1 second
         */
        scene.idle(10);

        /**
         * `.createEntity()` returns an entity link from Create which will be used
         * as reference in the future
         * [x, y, z] is the position but any KubeJS way to represent a position can be used.
         *
         * Don't modify the entity directly!
         */
        const creeperLink = scene.world.createEntity("creeper", [2.5, 1, 2.5]);

        /**
         * 50 -> the tick length of the instruction
         * [x, y, z] -> the position that the text should point at
         */
        scene
            .text(60, "Example text", [2.0, 2.5, 2.5])
            /**
             * Optional | Sets the color of the text.
             * Possible values:
             * - PonderPalette.WHITE, PonderPalette.BLACK
             * - PonderPalette.RED, PonderPalette.GREEN, PonderPalette.BLUE
             * - PonderPalette.SLOW, PonderPalette.MEDIUM, PonderPalette.FAST
             * - PonderPalette.INPUT, PonderPalette.OUTPUT
             */
            .colored(PonderPalette.RED)
            /**
             * Optional | Places the text closer to the target position.
             */
            .placeNearTarget()
            /**
             * Optional | Adds a keyframe to the scene.
             */
            .attachKeyFrame();

        /**
         * 120 -> the tick length of the instruction
         * [x, y, z] -> the position that the controls should point at
         * "down" -> the direction that is used by the controls for pointing
         */
        scene
            .showControls(60, [2.5, 3, 2.5], "down")
            /**
             * Uses mouse right click as icon.
             * Alternatively, `.leftClick()` can be used
             * or `.showing(icon)` for a custom icon.
             */
            .rightClick()
            /**
             * Defines the item that should be shown with the icon.
             */
            .withItem("shears")
            /**
             * Optional | Defines that controls are only shown when sneaking.
             * `.whileSneaking()` and `withCTRL()` can not be used simultaneously.
             */
            .whileSneaking()
            /**
             * Optional | Defines that controls are only shown when holding CTRL.
             * `.whileSneaking()` and `withCTRL()` can not be used simultaneously.
             */
            .whileCTRL();
    });
});
