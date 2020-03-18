// Be a Brit
var colurs = {
    colurnames: ["Salmon", "CadetBlue", "Olive", "Chocolate", "DodgerBlue", "Maroon", "BurlyWood", "Chartreuse", "Tomato", "SteelBlue"],
    colurphrase1: ["Are you a bear?", "Have you ever gone to space?", "Do you like Italy?", "Are you from Switzerland?", "Are you a Giants fan?", "Did you watch Superbowl 53?", "Do ya need anything from me?", "Care to have a drink?", "Are you a European?", "Have you ever been to Detroit?"],
    colourphraseError: ["Please select one"],
    colurphrase2a: ["Please don't eat me!", "I wanna go there too when I grow up!", "Same! I do BECAUSE PIZZA.", "I'm from there, too.", "Dodgers are better, you Giant.", "The final score was Maroon: 5, Rams: 3.", "*Grunts*", "Let me get that for you. Today's special is especially aromatic.", "Some of your kind used to think me poisonous.", "Did you see South Detroit? It's my hometown."],
    colurphrase2b: ["Thank the fish gods.", "I wanna go to space when I grow up!", "But what about PIZZA?", "I'm 65% cacao, by the way.", "Go Dodgers!", "The final score was Maroon: 5, Rams: 3.", "Then leave.", "That's okay. We have specialty preztels, too.", "I am tasty in a salad.", "You should go, it's my favorite city."]
};
var colurcycle = 0;
//Click!
console.log("step0");
var item = document.getElementById("item");
var itemtxt = document.getElementById("txt");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var itemcycle = 1;
var itemclicker = function () {
    console.log("step1");
    if (itemcycle === 1) {
        itemtxt.textContent = 
        colurs.colurphrase1[colurcycle];
        itemcycle = itemcycle + 1;
        button1.style.backgroundColor = "Black";
        button2.style.backgroundColor = "Black";
        console.log("step2");
    }
    else if (itemcycle === 3) {
        itemtxt.textContent = colurs.colurnames[colurcycle];
        itemcycle = 1;
        }
};
item.addEventListener("click", itemclicker);
//The question of Booleans
var button1click = function() {
    if (itemcycle === 2) {
        itemtxt.textContent =
        colurs.colurphrase2a[colurcycle];
        itemcycle = itemcycle + 1;
            button1.style.backgroundColor = "white";
        button2.style.backgroundColor = "white";
    }
    
};
var button2click = function() {
    if (itemcycle === 2) {
        itemtxt.textContent =
        colurs.colurphrase2b[colurcycle];
        itemcycle = itemcycle + 1;
        button1.style.backgroundColor = "white";
        button2.style.backgroundColor = "white";
    }
    
};

button1.addEventListener("click", button1click);
button2.addEventListener("click", button2click);
//The Big Cycle 
var arrows = document.getElementsByClassName("arrow")
var arrowf = document.getElementById("arrowf");
var arrowfclick = function() {
    console.log("step10");
    if (colurcycle < 9) { 
        colurcycle = colurcycle + 1;
    }
    else if (colurcycle === 9) {
        colurcycle = 0;
    }
    item.style.backgroundColor = colurs.colurnames[colurcycle];
    itemtxt.textContent = colurs.colurnames[colurcycle];
    itemcycle = 1;
    button1.style.backgroundColor = "white";
    button2.style.backgroundColor = "white";
};
arrowf.addEventListener("click", arrowfclick);
//The other arrow
var arrowb = document.getElementById("arrowb");
var arrowbclick = function() {
    console.log("step11");
    if (colurcycle > 0) { 
        colurcycle = colurcycle - 1;
    }
    else if (colurcycle === 0) {
        colurcycle = 9;
    }
    item.style.backgroundColor = colurs.colurnames[colurcycle];
    itemtxt.textContent = colurs.colurnames[colurcycle];
    itemcycle = 1;
    button1.style.backgroundColor = "white";
    button2.style.backgroundColor = "white";
};
arrowb.addEventListener("click", arrowbclick);
