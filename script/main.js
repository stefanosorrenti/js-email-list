//TRACCIA

/*
Descrizione

Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

Buon divertimento e confermate lettura come al solito :babyyoda:

*/

//HUMAN CODE

/*
Cosa devo fare?
-Salvare il endpoint
-Selezionarmi la chiave email
-Creare una lista HTML
-Loopare per 10 volte la chiave
-Inserirla nella  lista


BONUS:

*/


//DATA
//Salvare il endpoint
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

fetch(endpoint)
.then(data => data.json())
.then(randomEmail => {
    //console.log(randomEmail);
    const randomMail = randomEmail.response //Selezionarmi la chiave email
    console.log(randomMail);
    
})