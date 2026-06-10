const { LootTable } = lootalot

const loot
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
    for (let i = 0; i < (x - 1); i++) {
        raritything = loot[0][i]
        raritydisplay = raritydisplay + raritything
    }
}