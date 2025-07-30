// 1. Create an object representing a book with properties: title, author, and pages. Print each property.
let book = {
    title: "Made Up Title",
    author: "Made Up Author",
    pages: "250"
};
console.log(book.title + "\n" + book.author + "\n" + book.pages);

// or I could print each property using a for loop:

for (let key in book) {
    console.log(book[key]);
}

// 2. Create an object representing a person. Add a new property called 'hobby'.

let person = {
    name: "Isaiah",
    age: 36,
    gender: "male"
};
person.hobby = "golf";

for (let key in person) {
    console.log(person[key]);
}

// 3. Create an object and update the value of one of its properties.
let phone = {
    make: "Apple",
    model: "iPhone 16 Pro",
    color: "Silver"
};
phone.color = "Natural Titanium";
console.log(phone.color);

// 4. Delete a property from an object and print the updated object.
let cup = {
    material: "plastic",
    color: "blue",
    ounces: 16
};
delete cup.ounces;
console.log(cup);

// 5. Use bracket notation to access a value from an object.
    // using the same object from above:
console.log(cup["color"])

// 6. Use a variable as a key in bracket notation to access a value.
let personTwo = {
    name: "Isaiah",
    age: 36,
    gender: "male"
};
let key = "age";
console.log(personTwo[key]);

// 7. Create an object with a nested object inside. Access a value from the nested object.
let personThree = {
    name: "Isaiah",
    age: 36,
    address: {
        city: "Los Angeles",
        state: "California",
        county: "Los Angeles",
        zip: "90016"
    }
};
console.log(personThree.address.city);

// 8. Create an object and loop through it using a for...in loop. Print each key and value.
let blanket = {
    make: "Banana Republic",
    fabric: "cashmere",
    color: "grey"
}
for (let key in blanket) {
    console.log(blanket[key]);
}

// 9. Count the number of properties in an object.
    // using the same object from above:
counter = 0;
for (let key in blanket) {
    counter++
}
console.log(counter);

// or I could have written it using the built in JavaScript method "Object.key()" as:
let count = Object.keys(blanket).length;
console.log(count)

// 10. Create a function that takes an object and returns the value of a specific property.
function keyValue(object, key) {
    for (let prop in object) {
        if (prop === key) {
            return object[prop];
        }
    }
}
console.log(keyValue(blanket, "fabric"));