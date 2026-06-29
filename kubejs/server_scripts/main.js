
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
    event.recipes.create.mixing(Fluid.of('kubejs:liquid_brass',1000),[Item.of('minecraft:copper_ingot',3),Item.of('create:iron_sheet',3),Fluid.of('minecraft:lava',200)],1)
    event.recipes.create.mixing(Fluid.of('kubejs:molten_brass',1000),[Fluid.of('kubejs:liquid_brass',1000),Fluid.of('minecraft:lava',500)],2)
    event.recipes.create.filling(Item.of("create:brass_ingot",1),['create:zinc_ingot',Fluid.of('kubejs:molten_brass',500)])
    event.recipes.create.crushing(Item.of('kubejs:andesite_powder',5),'minecraft:andesite')
    event.recipes.create.compacting(Item.of('minecraft:tuff',2),[Item.of('kubejs:andesite_powder',10),Item.of('minecraft:diorite',2)])
    event.shapeless(Item.of('minecraft:diorite',2),[Item.of('minecraft:cobblestone',2), Item.of('minecraft:iron_nugget')])
})
 
