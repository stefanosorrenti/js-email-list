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

getRandomEmail()





//Aggiungo evento per il button (quando clicco)
buttonEl.addEventListener('click', function(){

    list.innerHTML = ''
    getRandomEmail()
    
    //richiamo la funzione
}) 







//Functions
function getRandomEmail() {

for (let i = 0; i < 10; i++) { //Loopo 10 volte la richiesta di email
    
    fetch(endpoint) //Invio la richiesta all'API

    .then(data => data.json()) //Trasformo la risposta dell'API in formato JSON

    .then(randomEmails => { //Assegno un nome alla nostra promessa con cui lavoreremo
        //console.log(randomEmails.response);
        let email = randomEmails.response //Salvo in una variabile la chiave dell'email
        //console.log(email);
        let markUp = `<li>${email}` //Creo una variabile con il markup che ci serve interpolando la variabile mail
        //console.log(markUp);
        //console.log(emailList += markUp);
          
        list.innerHTML += markUp //Ad ogni itnerazione aggiungo il markup al nodo
        
    })
    
}

    return list.innerHTML
}





console.log(typeof ge);











