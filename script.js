// Be a Brit
var colurs = {
    colurnames: ["Salmon", "CadetBlue", "Olive", "Chocolate"],
    colurphrase1: ["Are you a bear?", "Do you work for NASA?", "I like Italy.", "I'm from Switzerland."],
    colurphrase2a: ["Please don't eat me!", "I wanna go to space when I grow up!", "BECAUSE PIZZA.", "Which way is it to room 4B?"],
    colurphrase2b: []
};
var colurcycle = 0;
//Click!   
var item = document.getElementById("item");
var itemtxt = document.getElementById("txt");
var itemcycle = 1;
var itemclicker = function () {
    if (itemcycle === 1) {
        itemtxt.textContent = colurs.colurphrase1[colurcycle];
        itemcycle = itemcycle + 1;
    }
    else if (itemcycle === 2) {
        itemtxt.textContent = colurs.colurphrase2a[colurcycle];
        itemcycle = 0;
        }
    else {
        itemtxt.textContent = colurs.colurnames[colurcycle];
        itemcycle = itemcycle + 1;
    }
};
item.addEventListener("click", itemclicker);
//The Big Cycle
var arrows = document.getElementsByClassName("arrow")
var arrowf = document.getElementById("arrowf");
var arrowfclick = function() {
    if (colurcycle < 3) { 
        colurcycle = colurcycle + 1;
    }
    else if (colurcycle === 3) {
        colurcycle = 0;
    }
    item.style.backgroundColor = colurs.colurnames[colurcycle];
    itemtxt.textContent = colurs.colurnames[colurcycle];
    itemcycle = 1;
};
arrowf.addEventListener("click", arrowfclick);
//The other arrow
var arrowb = document.getElementById("arrowb");
var arrowbclick = function() {
    if (colurcycle > 0) { 
        colurcycle = colurcycle - 1;
    }
    else if (colurcycle === 0) {
        colurcycle = 3;
    }
    item.style.backgroundColor = colurs.colurnames[colurcycle];
    itemtxt.textContent = colurs.colurnames[colurcycle];
    itemcycle = 1;
};
arrowb.addEventListener("click", arrowbclick);