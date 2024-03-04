// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// oppure applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, 
// per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.

// console.log("ciao")

// Chiedo al cliente il numero dei km che dovrà percorrere e i suoi anni.
// SE il cliente ha meno di 18 anni moltiplico i km inseriti dal cliente per 0,21€ e sottraggo il 20%
// SE il cliente ha più di 65 anni moltiplico i km inseriti dal cliente per 0,21€ e sottraggo il 40%
// ALTRIMENTI moltiplico i km per inseriti dal cliente per 0,21€

// Chiedo al cliente il numero dei km che dovrà percorrere e i suoi anni.
let km = parseFloat(prompt("Inserisci i km che dovrai percorrere"));
let anni = parseInt(prompt("Inserisci la tua età"));
let prezzo;
console.log ("km " + km + " anni " + anni);

if(isNaN(anni) || isNaN(km)){
    alert("Devi inserire un numero come input")
}
else{
    
    // SE il cliente ha meno di 18 anni moltiplico i km inseriti dal cliente per 0,21€ e sottraggo il 20%
    if(anni<18){
        let valore = (km * 0.21);
        let sconto = ((valore/100) * 20);
        prezzo = valore - sconto;
        console.log(prezzo.toFixed(2));
    }
    // SE il cliente ha più di 65 anni moltiplico i km inseriti dal cliente per 0,21€ e sottraggo il 40%
    else if(anni>65){
        valore = (km * 0.21);
        sconto = ((valore/100) * 40);
        prezzo = valore - sconto;
        console.log(prezzo.toFixed(2));
    }
    // ALTRIMENTI moltiplico i km per inseriti dal cliente per 0,21€
    else{
        valore = (km * 0.21);
        prezzo = valore
        console.log(prezzo.toFixed(2));
    }

}