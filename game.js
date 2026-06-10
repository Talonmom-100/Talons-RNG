const { LootTable } = lootalot

var loot
var raritything
var raritydisplay
var rollcount = 1

const rtable = new LootTable(
    [
        { item: "Common", w: 1000000000},
        { item: "Uncommon", w: 250000000}
    ]
)

function roll(x) {
    raritydisplay = ""
    loot = rtable.loot(x)
    console.table(loot)
    for (let i = 0; i < (x - 1); i++) {
        raritything = loot[i][0] + " x" + loot[i][1]
        if (i < 1) {
            raritydisplay = raritything
        } else {
            raritydisplay = raritydisplay + ", " + raritything
        }
    }
    document.getElementById("raritydisplaytext").innerHTML = "You got: " + raritydisplay
}