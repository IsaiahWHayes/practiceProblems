// // 1. Build a Box of Stars. Write a program that prints a 4x5 rectangle made of *:
//     // *****
//     // *****
//     // *****
//     // *****
// for (let row = 0; row < 4; row++) {
//     let line = ""; // empty string
//     for (let col = 0; col < 5; col++) {
//         line += "*";
//     }
//     console.log(line)
// }

// // 2. Count Across a Grid. Print the numbers 1 to 20 in a 4-fow by 5-column grid:
//     // 1  2  3  4  5
//     // 6  7  8  9  10
//     // 11 12 13 14 15
//     // 16 17 18 19 20
// numCount = 1;
// for (let row = 0; row < 4; row++) {
//     let line = ""; // empty string
//     for (let col = 0; col < 5; col++) {
//         line += numCount + "\t";
//         numCount++;
//     }
//     console.log(line);
// }

// // 3. Coordinate Pairs. Print a grid of coordinate pairs for a 3x3 grid.
//     // (0,0) (0,1) (0,2)
//     // (1,0) (1,1) (1,2)
//     // (2,0) (2,1) (2,2)
// for (row = 0; row < 3; row++) {
//     let line = ""; // empty string
//     for (col = 0; col < 3; col++) {
//         line += "(" + row + "," + col + ")\t";
//     }
//     console.log(line);
// }

// // 4. Right Triangle of Stars. Print a triangle like this using *:
//     // *
//     // **
//     // ***
//     // ****
// for (row = 0; row < 4; row++) {
//     let line = "";
//     for (col = 0; col <= row; col++) {
//         line += "*";
//     }
//     console.log(line);
// }

// // or I could have written it as:

// for (let row = 1; row <= 4; row++) {
//     console.log("*".repeat(row));
// }

// // 5. Backward Triangle. Print a triangle like this:
//     // ****
//     // ***
//     // **
//     // *
// for (let row = 4; row >= 1; row--) {
//     console.log("*".repeat(row));
// }

// // or I could write it as a nested loop as:

// for (row = 4; row >= 1; row--) {
//     let line = "";
//     for (col = 1; col <= row; col++) {
//         line += "*";
//     }
//     console.log(line);
// }

// // 6. Multiplication Table (No Tabs). Build a 4x4 multiplication table using nested loops:
//     // 1 2 3
//     // 2 4 6
//     // 3 6 9
// for (let row = 1; row <= 3; row++) {
//     let line = "";
//     for (let col = 1; col <= 3; col++) {
//         line += (row * col)
//     }
//     console.log(line);
// }

// // 7. Fix the Loop (Find the Bug). This code is meant to print 3 rows of ###, but doesn't. Fix it.
//     // for (let i = 0; i < 3; i++) {
//     //   let row = "";
//     //   for (let j = 0; j < 3; j++) {
//     //     row = "#";
//     //   }
//     //   console.log(row);
//     // }
// for (let i = 0; i < 3; i++) {
//   let row = "";
//   for (let j = 0; j < 3; j++) {
//     row += "#";
//   }
//   console.log(row);
// }

// 8. Seat Chart Labels. Label classroom seats in a 3-row by 4-column format.
    // Row 1 Seat 1
    // Row 1 Seat 2
    // ...
    // Row 3 Seat 4

// 9. Temperature Grid. Given a 2D array: write code that prints each row's temperatures on one line:
    // here's the 2D array:
let temps = [
    [70, 71, 72],
    [73, 74, 75],
    [76, 77, 78]
];

for (let i = 0; i < temps.length; i++) {
    let line = "";
    for (let j = 0; j < temps[i].length; j++) {
        line += temps[i][j] + " ";
    }
    console.log(line);
}