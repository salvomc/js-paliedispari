
//Dichiarazione della funzione che genera un numero random da assegnare al computer
function generateRandomNumber(min, max)
  {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

//Dichiarazione della funzione che controlla se la somma tra il numero random e il numero inserito genera un numero pari o dispari
function PariDispari(sum) 
  {
  if (sum % 2 === 0) 
    {
      return "pari";
    } else 
      {
        return "dispari";
      }
  }

//Inserimento pari o dispari da parte dell'utente
let choice = prompt('Scegli tra pari o dispari.').toLowerCase();

//Controllo che la scelta sia pari o dispari
while (!(choice == "pari" || choice == "dispari"))
  {
    choice = prompt('Non hai inserito pari o dispari. Reinserisci la tua scelta.');
  }

//Inserimento di un numero compreso tra 1 e 5 da parte dell'utente
let userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 5.'));

//Controllo che l'utente inserisca un numero e che questo sia compreso tra 1 e 5
while (isNaN(userNumber) || (userNumber < 1 || userNumber > 5))
  {
    userNumber = parseInt(prompt('Il valore/numero inserito non è valido. Reinserisci un numero compreso tra 1 e 5.'));
  }

//Genero un numero casuale per il computer e lo sommo a quello inserito dall'utente
let computerNumber = generateRandomNumber(1, 5);
console.log("Il numero scelto dal computer è: " + computerNumber);
console.log("Il numero scelto dall'utente è: " + userNumber);
let sum = (computerNumber + userNumber);

//Controllo se il numero inserito è pari o dispari utilizzando la funzione apposita creata in precedenza 
if (choice === PariDispari(sum)) 
  {
    console.log('Hai vinto.');
  } else 
      {
        console.log('Hai perso.');
      }
