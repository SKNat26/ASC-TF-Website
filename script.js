let cards = document.getElementsByClassName("card");
let hiddentexts = document.getElementsByClassName("side_2");

let cards_and_hiddentexts = [];

for(let i = 0; i<cards.length; i++) {
    cards_and_hiddentexts.push({
        key: cards[i],
        value: hiddentexts[i]
    })
}

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