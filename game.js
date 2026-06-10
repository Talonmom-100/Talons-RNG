const { LootTable } = lootalot

var loot
var raritything
var raritydisplay

const rtable = new LootTable(
    [
        { item: "Common", w: 1000000000},
        { item: "Uncommon", w: 250000000}
    ]
)

function roll(x) {
    loot = rtable.loot(x)
    console.table(loot)
}