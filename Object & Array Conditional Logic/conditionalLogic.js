// // 1. Create an array of user objects with name and age. Print only the names of users over 18.
// let users = [
//     {name: "Henry", age: 16},
//     {name: "Dallas", age: 16},
//     {name: "Matthew", age: 30}
// ]
// for (let i = 0; i < users.length; i++) {
//     if (users[i].age > 18) {
//         console.log(users[i].name);
//     }
// }

// // 2. Create a product object with price and inStock. Print 'Available' if inStock is true and price < 100.
// let product = {
//     name: "iPhone",
//     price: 1200,
//     inStock: true
// };
// if (product.inStock && (product.price < 100)) {
//     console.log("Available")
// } else {
//     console.log("no products matching that criteria");
// }

// // 3. Write a function that takes a car object and logs whether it's electric or gas-powered based on a 'type' property.
// let car = {
//     make: "Tesla",
//     model: "X",
//     type: "Electric"
// }
// function carType(vehicle) {
//     for (key in vehicle) {
//         if (vehicle[key] === "Electric"){
//             console.log(vehicle.make + ": " + vehicle[key]);
//         }
//     }
// }
// carType(car);

// // or I could write it with fewer lines of code as:

// function carType2(auto) {
//     if (auto.type === "Electric") {
//         console.log(auto.make + ": " + auto.type);
//     }
// }
// carType2(car);

// // 4. Loop through an array of objects. Print a custom message based on each object's category.
// let cars = [
//     {make: "Mercedes", model: "C250 Sport", category: "gas"},
//     {make: "Prius", model: "C Hybrid", category: "hybrid"},
//     {make: "Tesla", model: "X", category: "electric"},
//     {make: "Tesla", model: "3", category: "electric"}
// ]
// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].category === "gas") {
//         console.log(cars[i].make + " " + cars[i].model + " is a " + cars[i].category + " vehicle.");
//     } else if (cars[i].category === "hybrid") {
//         console.log(cars[i].make + " " + cars[i].model + " is a " + cars[i].category + " vehicle.");
//     } else {
//         console.log(cars[i].make + " " + cars[i].model + " is an " + cars[i].category + " vehicle.");
//     }
// }

// // 5. Write a function that returns 'valid' if an object has both 'email' and 'password' properties.

// let user = [
//     {name: "Isaiah", email: "testemail@gmail.com", password: "somethingprivate"},
//     {name: "Tiffany", email: "testemail2@gmail.com", password: "somethingprivate2"},
//     {name: "Ethan", email: "testemail3@gmail.com", password: "somethingprivate3"},
//     {name: "Myla", email: null, password: null}
// ]

// for (let i = 0; i < user.length; i++) {
//     if (user[i].email && user[i].password) {
//         console.log("Valid");
//     } else {
//         console.log("Invalid");
//     }
// }

// // 6. Create a nested object for a student. Use conditionals to print 'Passed' if their grade > 70.
// let studentIsaiah = {
//     firstName: "Isaiah",
//     lastName: "Hayes",
//     gender: "Male",
//     age: "17",
//     schoolInfo: {
//         school: "Berkeley",
//         major: "AI Engineering",
//         classGrades: {
//             introductionToGenerativeAI: 95,
//             naturalLanguageProcessing: 90,
//             deepNueralNetworks1: 70,
//             deepNueralNetworks2: 90,
//             logisticRegression: 85,
//             decisionTrees: 60
//         }
//     }
// }
// function passingGrades(studentGrades) {
//     let grades = studentGrades.schoolInfo.classGrades
//     for (let grade in grades) {
//         if (grades[grade] >= 70) {
//             console.log(`${grade} is: Passed`);
//         }
//     }
// }
// passingGrades(studentIsaiah);

// // 7. 7. Write a function that receives a movie object and returns a message if it's 'PG-13' or 'R'.
// let movies = [
//     {name: "Gost Town", rating: "R", category: "Horror"},
//     {name: "Fun Town", rating: "PG-13", category: "Animated"},
//     {name: "Tike Bike Runner", rating: "PG-13", category: "Comedy"},
//     {name: "Million Dollor Distributor", rating: "R", category: "Documentary"}
// ]
// function movieRating(movieTitle) {
//     for (let i = 0; i < movieTitle.length; i++) {
//         if (movieTitle[i].rating === "PG-13" || movieTitle[i].rating === "R") {
//         console.log(`"${movieTitle[i].name}" is rated: ${movieTitle[i].rating}`);
//         }
//     }
// }
// movieRating(movies);

// // 8. Create an array of book objects. Print titles of books with more than 300 pages.
// let books = [
//     {title: "AI Engineering", author: "Chip Huyen", pages: 500},
//     {title: "Medical Apartheid", author: "Harriet Washington", pages: 412},
//     {title: "Charlotte's Webb", author: "E.B. White", pages: 184}
// ]
// function numOfPages(bookPages) {
//     let results = [];
//     for (let i = 0; i < bookPages.length; i++) {
//         if (bookPages[i].pages > 300) {
//             results.push(`"${bookPages[i].title}" is ${bookPages[i].pages} pages long`);
//         }
//     } return results;
// }
// console.log(numOfPages(books).join("\n"));

// // 9. Loop through an array of product objects. Print 'On Sale' for items with a discount property.
// let products = [
//     {item: "iWatch", price: 500, discount: 450},
//     {item: "iPhone", price: 1200, discount: null},
//     {item: "MacBook Air", price: 999, discount: 850}
// ]
// function discountItems(product) {
//     let results = []
//     for (let i = 0; i < product.length; i++) {
//         if (product[i].discount) {
//             results.push(product[i].item);
//         }
//     } return results;
// }
// console.log(discountItems(products).join("\n"));

// // 10. Create a function that returns 'Access granted' if user.role is 'admin', otherwise 'Access denied'.
// let userAccounts = [
//     {username: "Isaiah", role: "admin"},
//     {username: "Myla", role: "admin"},
//     {username: "Ethan", role: "user"}
// ]
// function adminRole(userRole) {
//     let results = [];
//     for (let i = 0; i < userRole.length; i++) {
//         if (userRole[i].role === "admin") {
//             results.push(`${userRole[i].username}: Access granted`);
//         } else {
//             results.push(`${userRole[i].username}: Access denied`);
//         }
//     } return results;
// }
// console.log(adminRole(userAccounts).join("\n"));

// 11. Create an array of people. Count how many are above age 50 using a loop and conditionals.
let people = [
    {name: "Isaiah", age: 36},
    {name: "Vernon", age: 55},
    {name: "Krystal", age: 43},
    {name: "Ethan", age: 15}
];

for (i = 0; i < people.length; i++) {
    if (people[i].age > 50) {
        console.log(`${people[i].name} is ${people[i].age}`);
    }
};