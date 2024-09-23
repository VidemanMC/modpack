StartupEvents.registry('creative_mode_tab', event => {
	event.create('videman_the_missing_part').icon(() => 'kubejs:vide_block').content(() => [
        'kubejs:rotten_skin',
		'kubejs:vide_block',
        'kubejs:vide_item'
	])
})