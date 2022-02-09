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

// ############################################################

function ltu(name) {
    return `Labas, ${name}!`;
}

function eng(name) {
    return `Hello, ${name}!`;
}

function pasisveikinimas(name, translationFunction) {
    return translationFunction(name);
}

const fraze1 = pasisveikinimas('Petras', ltu);
const fraze2 = pasisveikinimas('Maryte', ltu);
const fraze3 = pasisveikinimas('John', eng);
const fraze4 = pasisveikinimas('Eve', eng);

console.log(fraze1);
console.log(fraze2);
console.log(fraze3);
console.log(fraze4);

// ############################################################

function pomidoras(data, callback) {
    return callback(data.name, data.marks);
}

const pom1 = pomidoras({
    name: 'Petras',
    marks: [10, 2, 8, 4]
}, (personName, marksList) => {
    return `Student ${personName} has ${marksList.length} marks.`
})

console.log(pom1);