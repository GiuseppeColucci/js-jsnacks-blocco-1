/*
esercizio 1: L’utente inserisce due numeri in successione, con due prompt.
  Il software stampa il maggiore.
*/

var valore1 =parseInt(prompt('inserire il primo valore'));
var valore2 =parseInt(prompt('inserire il secondo valore'));

if(valore1>valore2){
    console.log(valore1)
    alert('il valore più alto '+ valore1);
}
else if(valore1<valore2){
    console.log(valore2);
    alert('il valore più alto '+ valore2);
}
else{
    console.log('i valori sono identici');
    alert('i valori sono identici.. cioè ' + valore1);
}
/*
esercizio 2:L’utente inserisce due parole in successione, con due prompt.
Il software stampa una stringa contenente prima la parola più corta, uno spazio e poi la parola più lunga.
*/ 

var parola1 =(prompt('inserire la prima parola'));
var parola2 =(prompt('inserire la seconda parola'));

if(parola1.length>parola2.length){
    console.log(parola1);
    alert(parola1);
}
else if(parola1.length<parola2.length){
    console.log(parola2);
    alert(parola2);
}
else{
    console.log('le parole sono lunghe in maniera identica ..'+parola2);
    alert('le parole sono lunghe in maniera identica .. '+parola2);
}
/*
esercizio 3.Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma con il for.
*/ 

var somma=0;

for (var i = 0 ; i <=4; i++){
    var number =parseInt( prompt('inserisci un numero'));
    somma=somma+number;
}

console.log(somma);
    alert(somma);



