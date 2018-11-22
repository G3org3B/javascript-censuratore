

// - Il software riceve in input un lungo testo e una serie di parole
// da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un "badword index" calcolato come il numero di
// parole censurate su il numero di parole totali

// Creare variabili frase

var frase = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
var paroleVietate = ['Lorem', 'sit', 'consectetur',];

// Inserire la frase in un array

arrayStringa.push(frase);

// Crear funzione contaParole


function contaParoleFrase(frase){

  var nWordSeparate;
  var nWordSeparate = frase.split(" ");

  console.log(nWordSeparate)
  nWordSeparate = nWordSeparate.length;

  return nWordSeparate;
}


// Confrontare le parole della frase con le parole proibite

var cont = 0;

var paroleCensurate = 0;

while (cont < paroleVietate.length) {
  console.log(paroleVietate
  [cont]);

  if(frase.includes(paroleVietate[cont])) {

    frase = frase.replace(paroleVietate[cont], 'xxx');

    paroleCensurate++;

  }
  cont ++;
}

var paroleFraseCont = contaParoleFrase(frase);
//console.log(frase);

console.log(paroleCensurate);

console.log(paroleFraseCont);

document.writeln(frase);
