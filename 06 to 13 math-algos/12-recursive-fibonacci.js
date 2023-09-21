//Given a number 'n', find the nth element of the fibonacci sequence (use recursion)

// Tips for the recursive solution
// =====================================

// ->   Figure out the to break into smaller versions of the same problem
// ->   Identify the base case for recursion

let counter = 1;
const fibonacciSequence = (n) => {
    console.log("counter " , counter++);
    if (n < 2) return n;
    return fibonacciSequence(n-1) + fibonacciSequence(n - 2);
}

// console.log(fibonacciSequence(0));
// console.log(fibonacciSequence(1));
// console.log(fibonacciSequence(2));
// console.log(fibonacciSequence(3));
// console.log(fibonacciSequence(4));
// console.log(fibonacciSequence(5));
// console.log(fibonacciSequence(6));
console.log(fibonacciSequence(7));



/* Time complexity 

                                                          Fn                                    
                                             Fn-1                    Fn-2                       2^1
                                         Fn-2    Fn-3           Fn-3       Fn-4                 2^2
                                    Fn-3  Fn-4  Fn-4 Fn-5      F-4  Fn-5  Fn-5  Fn-6            2^3  
                                    ..................................................          .....................................
                                    ..................................................          .....................................  upto so on
                                                                                                2^n


                            Hence O(2^n) for recursive fibonacci which is not good at all

*/