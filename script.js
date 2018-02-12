'use strict'
function sum(array){
    var sumOfNumbers = 0;
    array.forEach(function(elementOfArray) {
        if( typeof elementOfArray == 'object'){
            sumOfNumbers += sum(elementOfArray);
        } else {
            sumOfNumbers += elementOfArray;
        }
    })
    return sumOfNumbers;
}
var test =
  [ 5, 7, 
    [ 4, [2], 8, [1,3], 2 ], 
    [ 9, [] ], 
    1, 8
  ];
console.log(sum(test));

