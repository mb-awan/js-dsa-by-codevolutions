// Given a number n, find the first n elements of the fibonacci sequence

// My Solution 
// const fibonacciSequence = (n) => {
//     const fibonacciSequence = [0, 1];
//     let secondPrevious = 0;
//     let previous = 1;
//     let newElement;
//     for (let i = 2; i < n; i++) {
//         newElement = secondPrevious + previous;
//         fibonacciSequence.push(newElement);
//         secondPrevious = previous;
//         previous = newElement;
//     }

//     return fibonacciSequence; 
// }

// console.log(fibonacciSequence(8));

// Tutors Solution

const fibonacciSequence = (n) => {
        const fibonacciSequence = [0, 1];   // 1
        for (let i = 2; i < n; i++) {
            fibonacciSequence[i] = fibonacciSequence[i-1] + fibonacciSequence[i-2];     // n times
        }
    
        return fibonacciSequence;   // 1
}
    
// so our T(n) = n + 2 => O(n) or Linear Growth
    
console.log(fibonacciSequence(7)); 
console.log(fibonacciSequence(8));


// Big - O Guide to predict in a short time

/*
    1. Single Loop => O(n)
    2. One Nested Loop => O(n^2)
    3. Input size reduces it self => O(logn)
*/