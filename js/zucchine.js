// ES #1
function calcoloPeso(arr) {

   var pesoTot = 0;
   
   for (var i = 0; i < arr.length; i++) {
      
      var elem = arr[i];
      
      pesoTot += elem.peso;
   }

   console.log(pesoTot);
}

function init1() {
   
   var zucchine = [

      {
         var : 'mia',
         peso: 10,
         lung: 20
      },
      {
         var : 'mia',
         peso: 10,
         lung: 20
      },
      {
         var : 'mia',
         peso: 10,
         lung: 20
      }
   ];

   calcoloPeso(zucchine);
}

// $(document).ready(init1);

// ------------------------------------

// ES #2
// function divisor(arr, contenitore1, contenitore2, maxLng) {
   
//    var pesoCont1 = 0;
//    var pesoCont2 = 0;

//    for (var i = 0; i < arr.length; i++) {
      
//       var elem = arr[i]
      
//       if (elem.peso >= maxLng) {
         
//          contenitore1.push(elem);
//          pesoCont1 += elem.peso;
//       } else {

//          contenitore2.push(elem);
//          pesoCont2 += elem.peso;
//       }
//    }
//    console.log(pesoCont1, pesoCont2);
// }

// function init2() {
   // Crea 10 oggetti che rappresentano una zucchina.
   // Dividi in due array separati le zucchine che misurano
   // meno o più di 15cm.
   // Infine stampa separatamente quanto pesano i due gruppi
   // di zucchine

//    var zucchine = [

//       {
//          var : 'mia',
//          peso: 10,
//          lung: 10
//       },
//       {
//          var : 'mia',
//          peso: 12,
//          lung: 12
//       },
//       {
//          var : 'mia',
//          peso: 20,
//          lung: 20
//       },
//       {
//          var : 'mia',
//          peso: 25,
//          lung: 25
//       }
//    ];

//    var small  = [];
//    var big    = [];
//    var maxLng = 15;

//    divisor(zucchine, small, big, maxLng);
// }

// $(document).ready(init2);

function sommaPeso(arr) {

   var pesoTot = 0;
   
   for (var i = 0; i < arr.length; i++) {
      
      var elem = arr[i];
      
      pesoTot += elem.peso;
   }

  return pesoTot;
}

function divisor(arr, contenitore1, contenitore2, maxLng) {

   for (var i = 0; i < arr.length; i++) {
      
      var elem = arr[i]
      
      if (elem.peso >= maxLng) {
         
         contenitore1.push(elem);
      } else {

         contenitore2.push(elem);
      }
   }
}

function init2() {
   // Crea 10 oggetti che rappresentano una zucchina.
   // Dividi in due array separati le zucchine che misurano
   // meno o più di 15cm.
   // Infine stampa separatamente quanto pesano i due gruppi
   // di zucchine

   var zucchine = [

      {
         var : 'mia',
         peso: 10,
         lung: 10
      },
      {
         var : 'mia',
         peso: 12,
         lung: 12
      },
      {
         var : 'mia',
         peso: 20,
         lung: 20
      },
      {
         var : 'mia',
         peso: 25,
         lung: 25
      }
   ];

   var small  = [];
   var big    = [];
   var maxLng = 15;

   divisor(zucchine, big, small, maxLng);

   var sumBig   = sommaPeso(big);
   var sumSmall = sommaPeso(small);

   console.log('Il contenitore delle zucchine grandi pesa: ' + sumBig + 'kg');
   console.log('Il contenitore delle zucchine piccole pesa: ' + sumSmall + 'kg');
}

// $(document).ready(init2);

// ---------------------------------

// ES #3
function reverse(string) {

   return string.split('').reverse().join('');
}

function init3() {
   
   // Scrivi una funzione che accetti una stringa come
   // argomento e la ritorni girata (es. Ciao -> oaiC)

   var str = 'hello';
   var reverseStr = reverse(str);
   
   console.log(reverseStr);
}

// $(document).ready(init3);

// ---------------------------------

// ES #4
function alternateMerge(arr1, arr2) {
   
   var mergeArr = [];

   for (var i = 0; i < arr1.length; i++) {
      
      var elemArr1 = arr1[i];
      var elemArr2 = arr2[i];

      mergeArr.push(elemArr1, elemArr2);
   }

   return mergeArr;
}

function init4() {
   // Scrivi una funzione che fonda due array (aventi lo stesso
   // numero di elementi) prendendo alternativamente gli
   // elementi da uno e dall'altro
   // es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
   
   var arr1 = ['a', 'b', 'c'];
   var arr2 = [1, 2, 3];

   var mergeArr = alternateMerge(arr1, arr2);
   console.log(mergeArr);
}

$(document).ready(init4);