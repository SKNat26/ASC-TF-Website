//all the strings
let string_EL = document.getElementById("string_EL");
let string_A = document.getElementById("string_A");
let string_D = document.getElementById("string_D");
let string_G = document.getElementById("string_G");
let string_B = document.getElementById("string_B");
let string_EH = document.getElementById("string_EH");

//each audio for each string since each has a different note
let EL = document.getElementById("EL");
let A = document.getElementById("A");
let D = document.getElementById("D");
let G = document.getElementById("G");
let B = document.getElementById("B");
let EH = document.getElementById("EH");

//event listener for each string so that the guitar simulates an actual guitar
string_EL.addEventListener("mouseover", function() {
    EL.play();
});

string_A.addEventListener("mouseover", function() {
    A.play();
});

string_D.addEventListener("mouseover", function() {
    D.play();
});

string_G.addEventListener("mouseover", function() {
    G.play();
});

string_B.addEventListener("mouseover", function() {
    B.play();
});

string_EH.addEventListener("mouseover", function() {
    EH.play();
});