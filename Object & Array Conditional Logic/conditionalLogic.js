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

// 4. Loop through an array of objects. Print a custom message based on each object's category.
let cars = [
    {make: "Mercedes", model: "C250 Sport", category: "gas"},
    {make: "Prius", model: "C Hybrid", category: "hybrid"},
    {make: "Tesla", model: "X", category: "electric"},
    {make: "Tesla", model: "3", category: "electric"}
]
for (let i = 0; i < cars.length; i++) {
    if (cars[i].category === "gas") {
        console.log(cars[i].make + " " + cars[i].model + " is a " + cars[i].category + " vehicle.");
    } else if (cars[i].category === "hybrid") {
        console.log(cars[i].make + " " + cars[i].model + " is a " + cars[i].category + " vehicle.");
    } else {
        console.log(cars[i].make + " " + cars[i].model + " is an " + cars[i].category + " vehicle.");
    }
}

// 5. Write a function that returns 'valid' if an object has both 'email' and 'password' properties.

let users = [
    {name: "Isaiah", email: "testemail@gmail.com", password: "somethingprivate"},
    {name: "Tiffany", email: "testemail2@gmail.com", password: "somethingprivate2"},
    {name: "Ethan", email: "testemail3@gmail.com", password: "somethingprivate3"},
    {name: "Myla"}
]

for (let i = 0; i < users.length; i++) {
    if (users[i].email && users[i].password) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}

//