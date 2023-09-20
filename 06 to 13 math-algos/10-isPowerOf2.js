// Given a positive integer n, determine if the number is the power of 2 or not

// const isPowerOf2 = n =>  Number.isInteger(Math.log2(n));

// Tutors Solution

// const isPowerOf2 = n => {
//     if (n <= 1) return false;

//     while (n > 1) {
//         if (n % 2 !== 0) return false;
//         n /= 2;
//     }
//     return true;
// }

// Bitwise Method // Deals with binaries knowledge
const isPowerOf2 = n => {
    if (n <= 1) return false;
    return (n & (n - 1)) === 0;
}

console.log("Is 2 the power of 2 ", isPowerOf2(2));
console.log("Is 3 the power of 2 ", isPowerOf2(3));
console.log("Is 4 the power of 2 ", isPowerOf2(4));
console.log("Is 5 the power of 2 ", isPowerOf2(5));
console.log("Is 6 the power of 2 ", isPowerOf2(6));
console.log("Is 7 the power of 2 ", isPowerOf2(7));
console.log("Is 8 the power of 2 ", isPowerOf2(8));
console.log("Is 512 the power of 2 ", isPowerOf2(512));
console.log("Is 65536 the power of 2 ", isPowerOf2(65536));

console.log(512 & 511);