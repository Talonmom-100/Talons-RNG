const { LootTable } = lootalot

var loot
var raritything
var raritydisplay
var rollcount = 1

const rtable = new LootTable(
    [
        { item: "Common", w: 1000000000},
        { item: "Uncommon", w: 250000000},
        { item: "Rare", w: 62500000},
        { item: "Epic", w: 15625000}
    ]
)

function roll(x) {
    loot = rtable.loot(x)
    for (let i = 0; i < loot.length; i++) {
        raritything = loot[i].item + " x" + loot[i].count
        if (i < 1) {
            raritydisplay = raritything
        } else {
            raritydisplay = raritydisplay + ", " + raritything
        }
    }
    document.getElementById("raritydisplaytext").innerHTML = "You got: " + raritydisplay
}