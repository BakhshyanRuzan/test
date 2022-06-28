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

/*let arr = []
// es funkcian stuguma ete tiv@ parza veradarcnuma
function isPrime(j){
    for(let i = 2; i < j; i++){
        if(j % i === 0){
            return false
        }
        return j
    }
}
// es funkcian stuguma n-erord parz tiv@ paymani mej grel em vor n*n ic avel chstugi qani vor dranic mec chi kara lini
// minchev n*n exac bolor tver@ qcum enq arai mej u vekalum enq et arai orinak 3rd parz tiv@
function getNum(n){
    for(let i = 1 ; i < n*n ; i++){
        if(isPrime(i)){
            arr.push(i)
        }
    }
    return console.log(arr[n-1])
}
getNum(3)  

console.log(arr);
