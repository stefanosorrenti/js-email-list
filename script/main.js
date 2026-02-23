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
-Creare una lista in HTML e selezioane il nodo
-Loopare per 10 volte la chiave
-Inserirla nella  lista


BONUS:

*/


//DATA
//Salvare il endpoint
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

//Creare una lista in HTML e selezioane il nodo
let list = document.querySelector('.email-list')
//console.log(list);


//LOGIC


getRandomMail()








//Functions
function getRandomMail (){
fetch(endpoint)
    .then(data => data.json())
    .then(randomEmail => {
        //console.log(randomEmail);
        const randomMail = randomEmail.response //Selezionarmi la chiave email
        //console.log(randomMail);
        let emails = ''

        for (i = 1; i <= 10; i++) {
            const markUp = `
        <li>${randomMail}</li>`
            //console.log(markUp);

            emails += markUp
        }
        //console.log(emails);
        list.innerHTML = emails

    })

}