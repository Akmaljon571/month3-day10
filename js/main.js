// 1-misol
// function nambersSum(Number) {
//    return console.log(Number[0]+Number[1]+Number[2]+Number[3]);
// }
// let Num = [1, 3, 5, 9]
// console.log(nambersSum(Num));










// 2-misol
// let A = 0;

// function numbersSum(Number){
//     if (Number[0] > 0){
//        A += Number[0]
//     } 
//     if (Number[1]>0){
//        A += Number[1]
//     }
//     if (Number[2] > 0){
//        A += Number[2];
//     } 
//     if (Number[3]>0){
//        A += Number[3];
//     }
//     if (Number[4]>0){
//        A += Number[4];
//     }
//     return console.log(A);
// }

// let Number = [1,-5,16,0,2]

// let num = numbersSum(Number)




// 3-misol
var Number = [3.02, -3.65, 5, -9] 
var A = []
function normalizeNumbers(Number) {
     return A = [Math.floor(Math.abs(Number[0])),Math.floor(Math.abs(Number[1])),Math.floor(Math.abs(Number[2])),Math.floor(Math.abs(Number[3]))];
}

let num = normalizeNumbers(Number)

console.log(num);




