// 1.	Գրել ծրագիր, որը հաշվում է քառանիշ թվերի քանակը, որոնք սիմետրիկ են, օրինակ՝ 1221, 2222, 3443

// let arr = [];

// function reverse(num) {
//   let numStr = num.toString();

//   if (num == numStr.split("").reverse().join("")) {
//     arr.push(num);
//   }
// }

// for (let index = 1000; index <= 9999; index++) {
//   reverse(index);
//   if (index === 9999) {
//     console.log(arr.length);
//   }
// }

// 2.	Գրել ծրագիր, որը գտնում է “n”-րդ պարզ թիվը, որտեղ n-ը ինչ որ բնական թիվ է։

let arr = []

function isPrime(n){
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return console.log(false)  
        }
        return console.log(n)
    }
}

isPrime(7) 

// console.log(arr)
// function parz(n){
//  for (let index = 0; index <= n; index++) {
//     if(Number.isInteger(index)){
//       console.log()
//     }
//  }
// }