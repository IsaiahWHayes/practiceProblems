// 1. Create an array of 6 numbers. Write a for loop that prints only the numbers greater than 10.
let numbers = [1, 13, 35, 55, 38, 2];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        console.log(numbers[i])
    }
}

// 2. Create an array of 5 animals. Use a loop to print each animal in ALL CAPS.
let animals = ["dog", "cat", "rabbit", "lion", "eagle"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i].toUpperCase())
}

// 3. Create an array of 4 favorite movies. Add a 5th movie using .push(), then log the updated array.
let movies = ["The Matrix", "Divergent", "Wanted", "Coming to America"];
movies.push("Two Can Play That Game");
console.log(movies)

// 4. Create an array of 3 numbers. Write a for loop that prints each number squared.
let threeNumbers = [1, 2, 3];
for (let i = 0; i < threeNumbers.length; i++) {
    console.log(threeNumbers[i] * threeNumbers[i]); // or I could have written this as: console.log(threeNumbers[i] ** 2);
}

// 5. Make an arrary of your 5 favorite songs. Use a for loop to print:
    // Song 1: [song name]
    // Song 2: [song name]...
let favSongs = ["last time", "role play", "neighbors", "make it up with love", "the light"];
let counter = 1;
for (let i = 0; i < favSongs.length; i++){
    console.log("Song " + counter + " is: " + favSongs[i]);
    counter++;
}