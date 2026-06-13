const { LootTable } = lootalot

var loot
var raritything
var raritydisplay
var rollcount = 1
var luckpoints = 0
var cost11 = 50
var desc11 = "Increases roll count by 1."

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
        if (loot[i].item == "Common") {
            luckpoints += loot[i].count
        } else if (loot[i].item == "Uncommon") {
            luckpoints += 3 * loot[i].count
        } else if (loot[i].item == "Rare") {
            luckpoints += 9 * loot[i].count
        } else if (loot[i].item == "Epic") {
            luckpoints += 27 * loot[i].count
        }
    }
    document.getElementById("raritydisplaytext").innerHTML = "You got: " + raritydisplay
    document.getElementById("luckpointcount").innerHTML = "Luck Points: " + luckpoints
}

function getUpgrade(x) {
    if (x == 11) {
        if (luckpoints >= cost11) {
            rollcount++
            luckpoints -= cost11
            cost11 *= 10
            document.getElementById("rollcountdisplay").innerHTML = "Roll count: " + rollcount
        }
    }
    document.getElementById("luckpointcount").innerHTML = "Luck Points: " + luckpoints
}

function setDesc(x) {
    document.getElementById("upgradedesc").innerHTML = x
}