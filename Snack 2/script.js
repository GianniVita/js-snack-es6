console.log("It' working");



/* Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


//Analisi:

//Creare un array di oggetti di squadre, ogni oggetto ha nome, punti, "falliSubiti"
const squadre = [
    {nome:"AC Milan", punti: 0,fallisubiti: 0},
    {nome:"Liverpool", punti: 0,fallisubiti: 0 },
    {nome: "Atletico Madrid", punti: 0,fallisubiti: 0},
    {nome:"Vasto Pro", punti: 0,fallisubiti: 0},
    {nome:"Pescara", punti: 0,fallisubiti: 0},
    {nome: "Napoli", punti: 0,fallisubiti: 0}
];

function randomNumber() {
    return Math.floor(Math.random() * 99) + 1;
    

}