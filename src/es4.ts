alert("Ciao! Nella console troverai i primi 10 numeri divisibili per 3 \n" +
    "a partire dal numero che mi darai.");

const MOLTIPLICATORE = 71;
let input = Number(prompt("Inserire un numero."));

const resto = input % MOLTIPLICATORE;
if (resto != 0)
{
    input += (MOLTIPLICATORE - resto);
}
let count = 0;
while (count < 10)
{
    console.log(input);

    count += 1;
    input += MOLTIPLICATORE;
}
console.log("Fine ciclo...");
