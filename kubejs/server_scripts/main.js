// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {
    event.remove({output: 'create:brass_ingot'})
    event.shapeless('create:brass_ingot',[
        'create:brass_nugget',
        'create:brass_nugget',
        'create:brass_nugget',
        'create:brass_nugget',
        'create:brass_nugget',
        'create:brass_nugget',
        'create:brass_nugget',
        'create:brass_nugget',
        'create:brass_nugget',
    ])
    event.shapeless(Item.of('create:brass_ingot',9),[
        'create:brass_block'
    ])
    event.create.filling('create:brass_ingot',[
        'create:zinc_ingot',
        Fluid.of('kubejs:molten_brass',1000),
    ])
    event.createMixing(Fluid.of('kubejs:molten_brass',1000),[
        'minecraft:iron_nugget',
        'minecraft:copper_nugget',
        Fluid.of('minecraft:water',200),
    ])
})  