// // 1. Length Check: Create a string with your full name. Print how many characters it has (including spaces).
// let fullName = "Isaiah Hayes";
// console.log(fullName.length);

// // if I wanted to count each one, this is how I'd appraoch it.
// let fullNameIs = "Isaiah Hayes";
// let counter = 1
// for (let i = 0; i < fullNameIs.length; i++) {
//     console.log(counter);
//     counter++;
// }

// // 2. Uppercase Conversion: Create a string with the phrase "good morning". Print it in all uppercase letters.
// let greeting = "good morning";
// console.log(greeting.toUpperCase());

// // 3. Lowercase Conversion: Create a string "I LOVE JAVASCRIPT". Convert it to all lowercase and print it.
// let javascriptText = "I LOVE JAVASCRIPT";
// console.log(javascriptText.toLowerCase());

// // 4. Character Finder: Create a string "elephant". Print the character at index 3.
// let animal = "elephant";
// console.log(animal.charAt(3));

// // 5. First "e" Location: Using the same string "elephant", print the index where the first "e" appears.
// console.log(animal.indexOf("e"));

// // 6. Slice the Word: Create a string "pineapple". Use .slice() to print only "pine".
// let fruit = "pineapple";
// console.log(fruit.slice(0, 4))

// // 7. Clean Up Spaces: Create a string with extra spaces: " I need space! ". Use .trim() and print the cleaned string.
// let spaces = "  I need space!  "
// console.log(spaces.trim());

// // 8. Replace a Word: Create a string "I like tea". Replace "tea" with "coffee" and print the result.
// let tea = "I like tea";
// console.log(tea.replace("tea", "coffee"));

// // 9. Check Inclusion: Create a string "sunshine and rain". Check if it includes "rain" and print the result (true or false).
// let weather = "sunshine and rain";
// console.log(weather.includes("rain"))

// // 10. Split Into Words: Create a sentence: "I love learning code". Split it into an array of words and print the array.
// let learning = "I love learning code";
// console.log(learning.split(" "));

// // 11. Capitalize the First Letter: Create a string "hello world". Print it with the first letter capitalized (→ "Hello world").
// let hello = "hello world";
// let capitalized = hello[0].toUpperCase() + hello.slice(1);
// console.log(capitalized);

// // 12. Find Last Character: Create a string "sunflower". Print the last character using .charAt() or indexing.
// let flower = "sunflower";
// console.log(flower.charAt(8));

// // or

// console.log(flower[8]);

// // or

// function reverseString(n) {
//     let stringArr = n.split("");
//     stringArr.reverse();
//     console.log(stringArr[0]);
// }
// reverseString(flower)

// // 13. Count Spaces: Create a string "how many spaces are here?". Count how many spaces it contains.
// let sentence = "How many spaces are here?"; // will continue tomorrow
// counter = 0;
// for (i = 0; i < sentence.length; i++) {
//     if (sentence[i] === " ") {
//         counter++;
//     }
// }
// console.log(counter);

// // 14. Check Ending: Create a string "open the door". Check if it ends with "door" and print the result.
// let enter = "open the door";
// let enterArr = enter.split(" ");
// for (let i = 0; i < enterArr.length; i++) {
//     if (i === enterArr.length - 1) {
//         if (enterArr[i] === "door") {
//             console.log(enterArr[i]);
//         } else {
//             console.log("the last word does not end with 'door'");
//         }
//     }
// }

// // or I could have written it with the built-in JavaScript method ".endsWith()" as:
// if (enter.endsWith("door")) {
//     console.log('the last word is "door"');
// }

// // 15. Replace All Occurrences: Create a string "ha ha ha". Replace all instances of "ha" with "lol" and print it.
// let laugh = "ha ha ha";
// console.log(laugh.replaceAll("ha", "lol")); // to use the new value somewhere else, I need to save it a new variable.

// // 16. Mask a Word: Create a string "password123". Replace the first 8 characters with "********" and print it.
// let password = "password123";
// passwordPrivacy = password.replace("password", "********");
// console.log(passwordPrivacy);

// // 17. Create two strings: "code" and "academy". Join them into one string and print the result.
// let stringOne = "code";
// let stringTwo = "academy";
// newString = stringOne + " " + stringTwo;
// console.log(newString);

// // 18. Slice to the End: Create a string "javascript". Use .slice() to print everything from index 4 to the end.
// let codeLanguage = "javascript";
// console.log(codeLanguage.slice(4));

// // 19. Repeat a Word: Create a string "echo". Print it three times using .repeat().
// let echo = "echo";
// console.log(echo.repeat(3));

// // 20. Word Count: Create a string "This is a simple sentence". Split it into words and print how many words it contains.
// let anotherSentence = "This is a simple sentence";
// let sentenceArr = anotherSentence.split(" ");
// console.log("there are " + sentenceArr.length + " words in this sentence");

// // or I could write this using a loop as:

// counter = 0;
// for (let i = 0; i < sentenceArr.length; i++) {
//     counter++
// }
// console.log(counter);

// 21. Create a string "javascript is fun". Use .toUpperCase() to print it in all caps.
let newString = "javascript is fun";
console.log(newString.toUpperCase());

// 22. Create a string "LEARN CODING". Use .toLowerCase() to print it in all lowercase.
let learnCoding = "LEARN CODING";
console.log(learnCoding.toLowerCase());

// 23. Create a string "backpack". Print the character at index 4.
let backpack = "backpack";
console.log(backpack.charAt(4));

// 24. Create a string "backpack". Print the last character of the string using .length.
let newBackpack = "backpack";
for (let i = 0; i < newBackpack.length; i++) {
    if (i === newBackpack.length - 1) {
        console.log(newBackpack[i]);
    }
}

// or I could have written it on a single line as:

console.log(newBackpack[newBackpack.length - 1]);

// 25. Create a string "sunshine". Use .indexOf() to find the index of "s".
let sunshine = "sunshine";
console.log(sunshine.indexOf("s"));

// or to find the index of all "s" characters, I'd do the following:

// use the same sunshine variable from above, then...
let letter = "s";
for (i = 0; i < sunshine.length; i++) {
    if (sunshine[i] === letter) {
        console.log(i)
    }
}
