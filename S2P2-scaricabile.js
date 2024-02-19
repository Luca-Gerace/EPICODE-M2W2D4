// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const luca = {
  name: "Luca",
  lastName: "Gerace",
  isAmbassador: true,
}

// Creo array utenti pushando dentro le persone
let utenti = []
utenti.push(marco, paul, amy, luca)

const prices = [34, 5, 2]
const shippingCost = 50
let cart = 0
let totale 

// Calcolo carrello
for (let i = 0; i < prices.length; i++) {
  cart += prices[i];
}

// Calcolo sconto
let sconto = cart * 0.30;

// Calcolo totale
for (let el of utenti) {
  if (el.isAmbassador) {
    totale = (cart - sconto) + shippingCost;
    console.log(`${el.name} ${el.lastName} è un ambassador e paga ${totale}€`);
  } else if (cart >= 100) {
    shippingCost = 0;
  } else {
    totale = cart + shippingCost;
    console.log(`${el.name} ${el.lastName} non è un ambassador e paga ${totale}€`);
  }
}

// Creo array con utenti ambassador
let ambassadorArray = [];

for (let i = 0; i < utenti.length; i++) {
  if (utenti[i].isAmbassador) {
    ambassadorArray.push(utenti[i]);
  }
}
console.table(ambassadorArray);