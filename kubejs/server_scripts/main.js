/*
// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

ServerEvents.recipes(event => {
//    event.remove({output: 'create:brass_ingot'})
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
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "tag": "c:ingots/copper"
            },
            {
                "tag": "c:ingots/zinc"
            }
        ],
        "results": [
            {
                "count": 5,
                "item" : "create:brass_ingot"
            }
        ]
    })
})
 
*/