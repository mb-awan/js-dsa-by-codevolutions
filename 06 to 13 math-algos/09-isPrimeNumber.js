// given a natural number, determine whether the number is prime or not
// const isPrimeNumber = (n) => {
//     if (n <= 1) return false;

//     for (i = 2; i < n / 2; i++){
//         if (n % i === 0) return false;
//     }

//     return true;
// }

// O(n/2)

// Optimized Prime number test
const isPrimeNumber = (n) => {
    if (n <= 1) return false;

    for (i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0) return false;
    }

    return true;
}

// O(sqrt(n))

console.log("1 is a primary number: ", isPrimeNumber(1));
console.log("2 is a primary number: ", isPrimeNumber(2));
console.log("3 is a primary number: ", isPrimeNumber(3));
console.log("4 is a primary number: ", isPrimeNumber(4));
console.log("5 is a primary number: ", isPrimeNumber(5));
console.log("6 is a primary number: ", isPrimeNumber(6));
console.log("11 is a primary number: ", isPrimeNumber(11));
console.log("15 is a primary number: ", isPrimeNumber(15));
console.log("9 is a primary number: ", isPrimeNumber(9));
console.log("49 is a primary number: ", isPrimeNumber(49));
console.log("43 is a primary number: ", isPrimeNumber(43));
