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

// 11. Create an array of objects representing students. Print the name of each student.
let students = [
    student1 = {
        name: "Isaiah",
        age: 16,
        gender: "male"
    },
    student2 = {
        name: "Ethan",
        age: 14,
        gender: "male"
    },
    student3 = {
        name: "Myla",
        age: 15,
        gender: "female"
    }
]
for (i = 0; i < students.length; i++) {
    console.log(students[i]["name"]);
}

// 12. Add a new object to an existing array of objects.
students.push(
    student4 = {
        name: "Naomi",
        age: 13,
        gender: "female"
    }
)
console.log(students);

// 13. Create an object where one property is an array. Access a value from the array.
let car = {
    make: "Mercedes",
    model: "S550",
    color: "White",
    wheels: ["black", "AMG spoke rims", "20 inch rims"]
}
console.log(car.wheels[0]);

// 14. Modify an element inside an array that's stored in an object.
    // using the same object from above...
car.wheels[2] = "18 inch rims"
console.log(car);

// 15. Write a function that checks if a property exists in an object.
let computer = {
    make: "Apple",
    model: "Macbook Air",
    color: "Midnight"
}
function propInObj(object, property) {
    if (property in object) {
        console.log("true")
    } else {
        console.log("that property does not exist");
    }
}
propInObj(computer, "model");