// * - Creare un oggetto che descriva uno studente con le
// * seguenti proprietà: nome, cognome e età. Stampare a
// * schermo attraverso il for in tutte le proprietà.

// * - Creare un array di oggetti di studenti. Ciclare su tutti gli
// * studenti e stampare per ognuno nome e cognome

// * - Dare la possibilità all'utente attraverso 3 prompt di
// * aggiungere un nuovo oggetto studente inserendo
// * nell'ordine: nome, cognome e età.

// function init() {
   
//    var student1 = {
//       'nome'   : 'Matteo',
//       'cognome': 'Dilonardo',
//       'eta'    : 25
//    }

//    var student2 = {
//       'nome'   : 'Mario',
//       'cognome': 'Brembo',
//       'eta'    : 29
//    }

//    var student3 = {
//       'nome'   : 'Matilde',
//       'cognome': 'Prampolini',
//       'eta'    : 31
//    }
//    var students = [];

//    students.push(student1, student2, student3);

//   for (var i = 0; i < students.length; i++) {
     
//       var student = students[i];
//       console.log(student['nome'] + ' ' + student['cognome']);
//   }

//   var userStudent = {
//      'nome'   : prompt('Inserisci il nome'),
//      'cognome': prompt('Inserisci il cognome'),
//      'eta'    : parseInt(prompt('Inserisci età'))
//   }

//   students.push(userStudent);

//   console.log(students);
// }

// $(document).ready(init);