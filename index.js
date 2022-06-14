// Write your solution here!
// cats
const cats = ["Milo", "Otis", "Garfield"]

//destructivelyAppendCat(name)
function destructivelyAppendCat (name) {
    cats.push(name);
}

//destructivelyPrependCat(name)
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

//destructivelyRemoveLastCat()
function destructivelyRemoveLastCat() {
    cats.pop();
}

//destructivelyRemoveFirstCat()
function destructivelyRemoveFirstCat() {
    cats.shift();
}

//appendCat(name) - Spread operator
function appendCat(name) {
    return [...cats, name];
}

//prependCat(name) - Spread operator but at the beginning
function prependCat (name) {
    return [name, ...cats];
}

//removeLastCat
function removeLastCat() {
    return cats.slice(0,-1);
}
//removeFirstCat()
function removeFirstCat() {
    return cats.slice(1);
}