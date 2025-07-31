// 1. Create an array of user objects with name and age. Print only the names of users over 18.
let users = [
    {name: "Henry", age: 16},
    {name: "Dallas", age: 16},
    {name: "Matthew", age: 30}
]
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
        console.log(users[i].name);
    }
}

// 2. Create a product object with price and inStock. Print 'Available' if inStock is true and price < 100.
let product = {
    name: "iPhone",
    price: 1200,
    inStock: true
};
if (product.inStock && (product.price < 100)) {
    console.log("Available")
} else {
    console.log("no products matching that criteria");
}

// 3. Write a function that takes a car object and logs whether it's electric or gas-powered based on a 'type' property.
let car = {
    make: "Tesla",
    model: "X",
    type: "Electric"
}
function carType(vehicle) {
    for (key in vehicle) {
        if (vehicle[key] === "Electric"){
            console.log(vehicle.make + ": " + vehicle[key]);
        }
    }
}
carType(car);

// or I could write it with fewer lines of code as:

function carType2(auto) {
    if (auto.type === "Electric") {
        console.log(auto.make + ": " + auto.type);
    }
}
carType2(car);