// --- Functions & Conditionals Practice ---

// 2. Write a function isAdult(age) that returns true if the age is 18 or older.
function isAdult(age) {
    if (age === 18) {
        console.log("true");
    } else {
        console.log("false");
    }
}
isAdult(188);


// 1. Write a function isPositive(number) that returns true if the number is positive.
function isPositive(number) {
    if(number % 2 === 0) {
        console.log("true");
    } else {
        console.log("false");
    }
}
isPositive(2);


// 3. Write a function isMultipleOfThree(n) that returns "Yes" or "No".
function isMultipleOfThree(n) {
    if (n % 3 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
isMultipleOfThree(8);


//  4. Write a function checkLogin(username, password) that prints "Access granted" if username is "admin" and password is "1234", otherwise "Access denied".
function checkLogin(username, password) {
    if (username === "admin", password === "1234") {
        console.log("Access granted");
    } else {
        console.log("Access denied");
    }
}
checkLogin("admin", "1234");


// --- Loops & Basic Math ---

// 5. Write a for loop that prints the first 10 even numbers.
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// 6. Write a while loop that counts from 1 to 10.
let counter = 1
while (counter <= 10) {
    console.log(counter);
    counter++;
}

// 7. Write a for loop that prints the square of every number from 1 to 5.
for (let i = 1; i <= 5; i++) {
    console.log(i * i);
}

// 8. Write a function countdown(n) that uses a while loop to count down from n to 0.
function countdown(n) {
    let counter = n;
    
    while (counter >= 0) {
        console.log(counter);
        counter--
    }
}
countdown(5);

// --- Combine Functions + Loops ---

// 9. Write a function printOddNumbersUpTo(n) that prints all odd numbers from 1 to n.
function printOddNumbersUpTo(n) {
    for (i = 0; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
printOddNumbersUpTo(10);

// 10. Write a function sumUpTo(n) that returns the sum of all numbers from 1 to n.
function sumUpTo(n) {
    let sum = 0;
    for (i = 1; i <= n; i++) {
        sum = i + sum;
    }
    return(sum);
}
console.log(sumUpTo(10));

// --- Let's start a new batch of 100 ---

// 1. Write a function that prints numbers from 1 to 10.
function printNums() {
    for (let i = 1; i <=10; i++) {
        console.log(i);
    }
}
printNums()

// 2. Write a function that prints numbers 10 to 1.
function printNumsBackward() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}
printNumsBackward()

// 3. Write a function that prints all even numbers from 1 to 20.
function evenNums() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
evenNums();

// 4. Write a function that prints all odd numbers from 1 to 20.
function oddNums() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
oddNums();

// 5. Write a function that takes a number and prints whether it is positive or negative.
function positiveOrNegative(n) {
    if (n >= 0) {
        console.log(n + " is positive")
    } else {
        console.log(n + " is negative")
    }
}
positiveOrNegative(0.2);

// 6. Write a function that prints the multiplication table of 5.
function multipleOfFive(n) {
    let counter = 1;
    let multiple = 0;
    while (counter <= n) {
        multiple = counter * 5;
        console.log("5 x " + counter + " = " + multiple);
        counter++
    } 
}
multipleOfFive(20)

// I could also write this as a for loop.
function multiplyByFive(n) {
    for (let i = 1; i <= n; i++) {
        let multiple = i * 5;
        console.log(i + " x 5 = " + multiple);
    }
}
multiplyByFive(5);

// 7. Write a function that takes a number and prints its multiplication table.
function multiplicationTable(on, n) {
    for (let i = 1; i <= n; i++) {
        let multiple = i * on;
        console.log(i + " x " + on + " = " + multiple)
    }
}
multiplicationTable(5, 10);

// 8. Write a function that returns the sum of numbers from 1 to 100.
function returnSum() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(returnSum());