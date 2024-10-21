// String Manipulation Functions

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Count Characters
function countCharacters(str) {
    return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ');
}

// Array Functions

// Find Maximum
function findMax(arr) {
    return Math.max(...arr);
}

// Find Minimum
function findMin(arr) {
    return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Mathematical Functions

// Factorial
function factorial(n) {
    if (n < 0) return undefined; // Factorial not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Fibonacci Sequence
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

// Usage Examples
function displayResults() {
    console.log("Reversed 'hello':", reverseString("hello")); // "olleh"
    console.log("Character count of 'hello':", countCharacters("hello")); // 5
    console.log("Capitalized 'hello world':", capitalizeWords("hello world")); // "Hello World"
    console.log("Max of [1, 2, 3, 4, 5]:", findMax([1, 2, 3, 4, 5])); // 5
    console.log("Min of [1, 2, 3, 4, 5]:", findMin([1, 2, 3, 4, 5])); // 1
    console.log("Sum of [1, 2, 3, 4]:", sumArray([1, 2, 3, 4])); // 10
    console.log("Filtered [1, 2, 3, 4]:", filterArray([1, 2, 3, 4], x => x > 2)); // [3, 4]
    console.log("Factorial of 5:", factorial(5)); // 120
    console.log("Is 7 prime?", isPrime(7)); // true
    console.log("Fibonacci sequence of 5 terms:", fibonacci(5)); // [0, 1, 1, 2, 3]
}

window.onload = displayResults; // Call the display function when the window loads
