
// ask user to insert surname

var btn = document.getElementById('btn');
var cognome

var listaCognomi = ["Rossi", "Bianchi", "Verdi", "Gialli"]
btn.addEventListener("click", function () {
  cognome = document.getElementById('surname').value;
  console.log(cognome);
  // add surname in a list of surnames
  listaCognomi.push(cognome);
  console.log(listaCognomi);

})

var btn2 = document.getElementById('btn2');


btn2.addEventListener("click", function () {
  // ordinate surnames list
  listaCognomi.sort();
  console.log(listaCognomi);

//  fino a quando non trovi cognome continua a scorrere gli elementi e ad assegnargli un indice
for (var i = 0; i < listaCognomi.length; i++) {
  if (cognome == listaCognomi[i]) {
    console.log("il cognome: " + cognome + " è in posizione:" + (i + 1) );
  }
}
})
