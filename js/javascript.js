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

if(parola1.length > parola2.length){
    console.log(parola1);
    alert(parola1);
}
else if(parola1.length < parola2.length){
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

/*
esercizzio 4: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (Paolo, Fabio, Lorenzo)
 Chiedi all’utente il suo nome
 Comunicagli se può partecipare o no alla festa.
*/ 
var festa=['paolo', 'Fabio', 'Lorenzo'];
var invito=prompt('quale è il tuo nome per entrare alla festa ?');

var imbucato=false

for(var i= 0; i<festa.length; i++){
    if(invito==festa[i]){
        imbucato=true
    }
}
if(imbucato==true){
    console.log('puoi entrare alla festa');
    alert('puoi entrare alla festa');
}
else{
    console.log('mi dispiace ma il tuo nome non risulta nella lista della festa!!');
    alert('mi dispiace ma il tuo nome non risulta nella lista della festa!!');
}
/*
esercizzio 5:Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero
 Se è dispari inseriscilo nell’array
*/
var contenitore=[];

for(var i=0; i<6; i++){
    var numero=parseInt(prompt('inserire un numero'));
    if(numero % 2 !=0){
        contenitore.push(numero);
    }
}

console.log(contenitore);
    alert(contenitore);