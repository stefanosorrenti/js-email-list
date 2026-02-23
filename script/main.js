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
-Incarto la logica in una funzione
-Aggiungo un botton lato HTML
-Mi seleziono il nodo del bottone
-Aggiungo un evento in ascolto al bottone (click)
-Inserico la funzione dentro l'evento

*/


//DATA
//Salvare il endpoint
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

//Creare una lista in HTML e selezioane il nodo
let list = document.querySelector('.email-list')
//console.log(list);

//Seleziono il nodo dell button
const buttonEl = document.querySelector('button')



//LOGIC

//Invoco la funzione che mi genera e stampa 10 email
//getRandomMail()






//Aggiungo evento per il button (quando clicco)
//buttonEl.addEventListener('click', ()=>getRandomMail()) //richiamo la funzione

//Functions
/* function getRandomMail (){

    
} */



for (let i = 0; i < 10; i++) {
    
    fetch(endpoint)
    .then(data => data.json())
    .then(randomEmails => {
        //console.log(randomEmails.response);
        let email = randomEmails.response
        //console.log(email);
        let markUp = `<li>${email} ${i}</li>`
        //console.log(markUp);
        //console.log(emailList += markUp);
          
        list.innerHTML += markUp
        
    })
    
}

















