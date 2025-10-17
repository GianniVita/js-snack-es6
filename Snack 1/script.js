/* console.log("it's working");

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */


// Analisi:
//Creare un l'array di oggetti bici, ognuno con proprietà nome peso.
const bici = [
    { nome: "Pinarello Dogma",peso: 7.2 },
    { nome: "Atala", peso: 10.1 },
    { nome: "Bianchi Specialissima", peso: 7.8 },
    { nome: "Colnago C64", peso: 6.9 },
    { nome: "Treck Emonda", peso: 7.0 }
];

//Impostare una variabile che possiamo chiamare 'biciLeggera' con il primo elemento

// Scorrere tutte le bici:
//  - SE ilpeso della bici corrente è minore del peso della biciLeggera, aggiorno biciLeggera

// Stampare biciLeggera (nome e peso) in un cosole.log()