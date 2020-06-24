
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

  listaCognomi.sort();
  console.log(listaCognomi);

})

// ordinate surnames list
//
// print ordinate surname on consolelog
