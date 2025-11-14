// scrivere programma che
// step 1: dati 2 numeri interi in input, calcola il mcm tra i due.
// step 2: dati 2 numeri interi in input, calcola mcd tra i due.

alert("Ciao! Qui calcoleremo il mcm e il mcd tra due numeri interi che ci darai.");

const num1 = Number(prompt("Inserire il primo numero intero."));
const num2 = Number(prompt("Inserire il secondo numero intero."));

let a = num1;
let b = num2;

// calcolo mcd
while (b != 0)
{
    const temp = b;
    b = a % b;
    a = temp;
}
const mcd = a;

// calcolo mcm
const mcm = (num1 * num2) / mcd;

console.log("Il mcd tra " + num1 + " e " + num2 + " è: " + mcd);
console.log("Il mcm tra " + num1 + " e " + num2 + " è: " + mcm);

console.log("Fine programma...");
