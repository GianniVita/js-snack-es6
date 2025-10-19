/* console.log("it's working");

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */


// Analisi:
//Creare un l'array di oggetti bici, ognuno con proprietà nome peso.
const bici = [
    { nome: "Pinarello Dogma",peso: 7.1 },
    { nome: "Atala", peso: 10.4 },
    { nome: "Bianchi Specialissima", peso: 5.8 },
    { nome: "Colnago C64", peso: 6.1 },
    { nome: "Treck Emonda", peso: 8.2 }
];

//Impostare una variabile che possiamo chiamare 'biciLeggera' con il primo elemento
let biciLeggera = bici[0]; 

//console.log(bici);
// Controlliamo SE in caso l'array è vuoto possiamo dire un messaggio nel console.log
if (bici.length === 0) {
    console.log("Non ci sono bici nell'array");
} else {  
//console.log(biciLeggera);
// Scorrere tutte le bici:
for (let i = 0; i < bici.length; i++) {
    //  - SE il peso della bici corrente è minore del peso della biciLeggera, aggiorno biciLeggera
//let biciLeggera = bici[0];    
    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i]
    }
 }
}

// Stampare biciLeggera (nome e peso) in un cosole.log()
console.log(biciLeggera);


