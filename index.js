const matematika = {};

matematika.plius = (a, b) => a + b;
matematika.minus = (a, b) => a - b;
matematika.padalinti = (a, b) => a / b;
matematika.padauginti = (a, b) => a * b;

const pirmasSkaicius = 7;
const antrasSkaicius = 5;
const veiksmas = 'plius';

const veiksmoFunkcija = matematika[veiksmas];

function skaiciuojam(a, operation, b) {
    return operation(a, b);
}

const rezultatas = skaiciuojam(pirmasSkaicius, veiksmoFunkcija, antrasSkaicius);

console.log(rezultatas);
