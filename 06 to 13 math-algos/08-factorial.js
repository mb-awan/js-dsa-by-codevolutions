// Given a number n, find the factorial of that integer

// Both my and tutors solutions are same
const factorial = (n) => {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));


// Worst Case Time Complexity = O(n)

