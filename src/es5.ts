let input = Number(prompt("Inserire un numero."));
let count = 0;
let isPrime = false;
let value = input + 1;
while (!(isPrime))
{
    isPrime = true;

    if (value % 2 == 0) { isPrime = false; }
    else
    {
        let divisor = 3;
        while ((isPrime) && (divisor <= Math.sqrt(value)))
        {
            if (value % divisor == 0) { isPrime = false; }
            divisor += 2;
        }
    }
    value += 1;
}
input = value - 1;
while (count < 10)
{
    console.log(input);

    count += 1;
    isPrime = false;
    value = input + 1;
    while (!(isPrime))
    {
        isPrime = true;

        if (value % 2 == 0) { isPrime = false; }
        else
        {
            let divisor = 3;
            while ((isPrime) && (divisor <= Math.sqrt(value)))
            {
                if (value % divisor == 0) { isPrime = false; }
                divisor += 2;
            }
        }
        value += 1;
    }
    input = value - 1;
}
console.log("Fine ciclo...");
