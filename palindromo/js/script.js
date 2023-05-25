
//Prompt inserimento aprola da parte dell'utente
let word = prompt('Inserisci una parola');

//Funzione Split
let arrayWord = word.split('');

//Funzione Reverse
let arrayReverseWord = arrayWord.reverse();

//Funzione Join
let reverseWord = arrayReverseWord.join('');

//Controllo parola palindroma
if (reverseWord === word)
    {
        console.log('La parola inserita è palindroma.');
    } else 
        {
            console.log('La parola inserita non è palindroma.');
        }