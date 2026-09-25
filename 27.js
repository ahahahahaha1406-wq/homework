let math = 67;
let russian = 67;
let japan = 67;

let attendance = 90;

let score = (math + russian + japan) / 3;
let total;

if (attendance >= 90) {
    console.log("+10");
    total = score + 10;
} else if (attendance >= 70) {
    console.log("+5");
    total = score + 5;
} else if (attendance >= 50) {
    console.log("-10");
    total = score - 10;
}

console.log(total);

if (total > 100) {
    console.log("Error");
} else if (total >= 90) {
    console.log("A");
} else if (total >= 75) {
    console.log("B");
} else {
    console.log("C");
}
