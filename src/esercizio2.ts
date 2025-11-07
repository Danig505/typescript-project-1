// programma gestione media scolastisca 5 voti (tra 1 e 10) con calcolo media finale e stampa errore se <5

alert("Qui potrai calcolare la tua media scolastisca di 5 voti!");
alert("ATTENZIONE, i voti sono compresi tra 1 e 10");

const voto1 = Number(prompt("Inserisci il primo voto"));
if (voto1 >= 1 && voto1 <= 10)
{
    const voto2 = Number(prompt("Inserisci il secondo voto"));
    if (voto2 >= 1 && voto2 <= 10)
    {
        const voto3 = Number(prompt("Inserisci il terzo voto"));
        if (voto3 >= 1 && voto3 <= 10)
        {
            const voto4 = Number(prompt("Inserisci il quarto voto"));
            if (voto4 >= 1 && voto4 <= 10)
            {
                const voto5 = Number(prompt("Inserisci il quinto voto"));
                if (voto5 >= 1 && voto5 <= 10)
                {
                    const media = ((voto1 + voto2 + voto3 + voto4 + voto5) / 5);
                    alert("Il risultato è " + media);
                }
                else
                {
                    alert("ERRORE ⚠️\n" +
                        "Non hai inserito il numero in almeno uno delle 5 caselle");
                }
            }
            else
            {
                alert("ERRORE ⚠️\n" +
                    "Non hai inserito il numero in almeno uno delle 5 caselle");
            }
        }
        else
        {
            alert("ERRORE ⚠️\n" +
                "Non hai inserito il numero in almeno uno delle 5 caselle");
        }
    }
    else
    {
        alert("ERRORE ⚠️\n" +
            "Non hai inserito il numero in almeno uno delle 5 caselle");
    }
}
else
{
    alert("ERRORE ⚠️\n" +
        "Non hai inserito il numero in almeno uno delle 5 caselle");
}
