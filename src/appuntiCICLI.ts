let counter = 0;
// let isValid = true;

while (counter < 10)
{
    counter += 1;

    if (counter % 5)
    {
        console.log("Counter " + counter + " non è un multiplo di 5.");
    }
    else
    {
        console.log("Counter " + counter + " è un multiplo di 5");
    }
    // const risposta = prompt("Vuoi continuare il ciclo (S/N)");
    // if ((risposta == "N") || (risposta == "n"))
    // {
    //    isValid = false;
    // }
}

console.log("Fine ciclo...");
