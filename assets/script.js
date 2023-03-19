
/* ************************************************************

1- Chiedi all’utente il suo nome,

2- poi chiedi il suo cognome,

3- poi chiedi il suo colore preferito

4- Infine scrivi sulla pagina nomecognomecolorepreferito23

**************************************************************/

const name = parseInt(prompt ("Inserisci il tuo nome"))
console.log(name)

const surname = parseInt(prompt ("Inserisci il tuo cognome"))
console.log(surname)

const color = parseInt(prompt("Inserisci il tuo colore preferito"))
console.log(color)

const outputStr = `
nome ${name}
cognome ${surname}
colorepreferito23 ${color}
`
console.log(outputStr)

document.getElementById("output").innerHTML = outputStr;

