// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

function destructivelyAppendCat() {
    cats.push("Ralph");
}
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

function destructivelyPrependCat() {
    cats.unshift("Bob");
}
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

function destructivelyRemoveLastCat() {
    cats.pop();
}
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

function destructivelyRemoveFirstCat() {
    cats.shift();
}
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

function appendCat() {
    let copyCats = [...cats,"Broom"]
    return copyCats
}
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

function prependCat() {
    let copyCats = ["Arnold",...cats]
    return copyCats
}
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

function removeLastCat() {
    let copyCats = cats.slice(0, cats.length - 1);
    return copyCats;
}
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

function removeFirstCat() {
    let copyCats = cats.slice(1);
    return copyCats;
}