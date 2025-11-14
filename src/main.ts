// scrivere programma che
// step 1: dati 2 numeri interi in input, calcola il mcm tra i due.
// step 2: dati 2 numeri interi in input, calcola mcd tra i due.

alert("Ciao! Qui calcoleremo il mcm e il mcd tra due numeri interi che ci darai.");

const numero1 = Number(prompt("Inserire il primo numero intero."));
const numero2 = Number(prompt("Inserire il secondo numero intero."));

let a = numero1;
let b = numero2;

while (b != 0)
{
    const cosoboh = b;
    b = a % b;
    a = cosoboh;
}
const mcd = a;
const mcm = (numero1 * numero2) / mcd;

console.log("Il mcd tra " + numero1 + " e " + numero2 + " è: " + mcd);
console.log("Il mcm tra " + numero1 + " e " + numero2 + " è: " + mcm);

console.log("Fine programma...");
