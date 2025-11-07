// valutazione media ma io voglio inserire più voti finchè non è valido

let isValid = true;
let somma = 0;
let nvoti = 0;
let mediaf = 0;

while (isValid)
{
    const numero = Number(prompt("Inserisci il voto."));
    if ((numero < 1) || (numero > 10))
    {
        isValid = false;

        alert("Il numero non è valido.");
    }
    else
    {
        somma += numero;
    }

    nvoti += 1;
}

mediaf = somma / nvoti;
alert("La tua media è " + mediaf);
