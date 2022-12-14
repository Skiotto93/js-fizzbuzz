"use strict";

const list = document.querySelector(".list")

// Creo un programma che stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    //Creo l'elemento
    const item = document.createElement("li");
    //Aggiunto classe item
    item.classList.add("item");
    //Per i multipli di 3 e di 5 stampo, in console, la stringa "fizzbuzz"
    if ( i % 3 === 0 && i % 5 === 0 ) {
        item.classList.add("fizzbuzz");
        item.innerHTML = "fizzbuzz";
        console.log("fizzbuzz");
        //Creo per i multipli di 3 l'item "fizz" e lo stampo in console
    } else if ( i % 3 === 0 ) {
        item.classList.add("fizz");
        item.innerHTML = "fizz";
        console.log("fizz");
        //Creo per i multipli di 5 l'item "buzz" e lo stampo in console
    } else if ( i % 5 === 0 ) {
        item.classList.add("Buzz");
        item.innerHTML = "Buzz";
        console.log("Buzz");
        //Creo la condizione per inserire i numeri e stampo i risultati nella console
    } else {
        console.log(i);
        item.innerHTML = i;
    }
    //Inserisco l'item nella lista attraverso .append
    list.append(item);
}
