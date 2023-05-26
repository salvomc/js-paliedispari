
//Creo una funzione che controlla se la parola è palindroma 
function checkPalindromo(word)
    {
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
    }

//Prompt inserimento parola da parte dell'utente
let word = prompt('Inserisci una parola');

//Richiamo la funziona checkPalindromo
checkPalindromo(word);