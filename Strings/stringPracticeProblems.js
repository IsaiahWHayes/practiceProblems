// 1. Length Check: Create a string with your full name. Print how many characters it has (including spaces).
let fullName = "Isaiah Hayes";
console.log(fullName.length);

// if I wanted to count each one, this is how I'd appraoch it.
let fullNameIs = "Isaiah Hayes";
let counter = 1
for (let i = 0; i < fullNameIs.length; i++) {
    console.log(counter);
    counter++;
}

// 2. Uppercase Conversion: Create a string with the phrase "good morning". Print it in all uppercase letters.
let greeting = "good morning";
console.log(greeting.toUpperCase());

// 3. Lowercase Conversion: Create a string "I LOVE JAVASCRIPT". Convert it to all lowercase and print it.
let javascriptText = "I LOVE JAVASCRIPT";
console.log(javascriptText.toLowerCase());

// 4. Character Finder: Create a string "elephant". Print the character at index 3.
let animal = "elephant";
console.log(animal.charAt(3));

// 5. First "e" Location: Using the same string "elephant", print the index where the first "e" appears.
console.log(animal.indexOf("e"));

// 6. Slice the Word: Create a string "pineapple". Use .slice() to print only "pine".
let fruit = "pineapple";
console.log(fruit.slice(0, 4))

// 7. Clean Up Spaces: Create a string with extra spaces: " I need space! ". Use .trim() and print the cleaned string.
let spaces = "  I need space!  "
console.log(spaces.trim());

// 8. Replace a Word: Create a string "I like tea". Replace "tea" with "coffee" and print the result.
let tea = "I like tea";
console.log(tea.replace("tea", "coffee"));

// 9. Check Inclusion: Create a string "sunshine and rain". Check if it includes "rain" and print the result (true or false).
let weather = "sunshine and rain";
console.log(weather.includes("rain"))

// 10. Split Into Words: Create a sentence: "I love learning code". Split it into an array of words and print the array.
let learning = "I love learning code";
console.log(learning.split(" "));

// 11. Capitalize the First Letter: Create a string "hello world". Print it with the first letter capitalized (→ "Hello world").
let hello = "hello world";
let capitalized = hello[0].toUpperCase() + hello.slice(1);
console.log(capitalized);

// 12. Find Last Character: Create a string "sunflower". Print the last character using .charAt() or indexing.
let flower = "sunflower";
console.log(flower.charAt(8));

// or

console.log(flower[8]);

// or

function reverseString(n) {
    let stringArr = n.split("");
    stringArr.reverse();
    console.log(stringArr[0]);
}
reverseString(flower)

// 13. Count Spaces: Create a string "how many spaces are here?". Count how many spaces it contains.
let sentence = "How many spaces are here?"; // will continue tomorrow
counter = 0;
for (i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
        counter++;
    }
}
console.log(counter);

// 14. Check Ending: Create a string "open the door". Check if it ends with "door" and print the result.
let enter = "open the door";
let enterArr = enter.split(" ");
for (let i = 0; i < enterArr.length; i++) {
    if (i === enterArr.length - 1) {
        if (enterArr[i] === "door") {
            console.log(enterArr[i]);
        } else {
            console.log("the last word does not end with 'door'");
        }
    }
}

// or I could have written it with the built-in JavaScript method ".endsWith()" as:
if (enter.endsWith("door")) {
    console.log('the last word is "door"');
}

// 15. Replace All Occurrences: Create a string "ha ha ha". Replace all instances of "ha" with "lol" and print it.
let laugh = "ha ha ha";
console.log(laugh.replaceAll("ha", "lol")); // to use the new value somewhere else, I need to save it a new variable.