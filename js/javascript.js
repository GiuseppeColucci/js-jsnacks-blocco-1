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











