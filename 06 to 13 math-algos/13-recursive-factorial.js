// Given an integer n, Find the factoiral of that integer

const factorial = (n) => {
    if (n < 2) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));


// Big O is n / Linear time complexity / O(n)