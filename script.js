//get arrays of all cards and the invisible text
let cards = document.getElementsByClassName("card");
let hiddentexts = document.getElementsByClassName("side_2");

//an array that will link each card with its text
let cards_and_hiddentexts = [];

//for loop to populate the array
for(let i = 0; i<cards.length; i++) {
    cards_and_hiddentexts.push({
        key: cards[i],
        value: hiddentexts[i]
    })
}

//for loop that makes the inivisble text visible when mouse goes over
for(let i = 0; i<cards_and_hiddentexts.length; i++) {
    let card = cards_and_hiddentexts[i].key;
    let hiddentext = cards_and_hiddentexts[i].value;
    card.onmouseover = function() {
        hiddentext.style.display = "block";
        card.style.width = "80%"
    }
    card.onmouseleave = function() {
        hiddentext.style.display = "none";
        card.style.width = "50%"
    }
}