alert("Benvenuto in questa calcolatrice. \n" +
    "Qui potrai fare... \n" +
    "- Addizioni\n" +
    "- Sottrazioni\n" +
    "- Moltiplicazioni\n" +
    "- Divisioni");

const operatore = prompt("Inserisci un operatore matematico.");
if ((operatore != "+") && (operatore != "-") &&
    (operatore != "*") && (operatore != "/"))
{
    alert("L'operatore \"" + operatore + "\" inserito non è un operatore valido");
}
else
{
    const numero1 = Number(prompt("Inserisci il primo numero"));
    if (!Number.isNaN(numero1))
    {
        alert("Il primo numero inserito non è un numero valido.");
    }
} // lo finirò più tardi...
