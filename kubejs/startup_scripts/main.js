

// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

StartupEvents.registry('fluid', event => {
    event.create('molten_brass')
        .displayName('Molten Brass')
        .tint(Color.WHITE)
        .type(type => type
            .renderType(2)
            .stillTexture('kubejs:fluid/molten_brass_still')
            .flowingTexture('kubejs:fluid/molten_brass_flow')
            .fallDistanceModifier(2)
        )
})
