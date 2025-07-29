// 1. Build a Box of Stars. Write a program that prints a 4x5 rectangle made of *:
    // *****
    // *****
    // *****
    // *****
for (let row = 0; row < 4; row++) {
    let line = ""; // empty string
    for (let col = 0; col < 5; col++) {
        line += "*";
    }
    console.log(line)
}

// 2. Count Across a Grid. Print the numbers 1 to 20 in a 4-fow by 5-column grid:
    // 1  2  3  4  5
    // 6  7  8  9  10
    // 11 12 13 14 15
    // 16 17 18 19 20
numCount = 1;
for (let row = 0; row < 4; row++) {
    let line = ""; // empty string
    for (let col = 0; col < 5; col++) {
        line += numCount + "\t";
        numCount++;
    }
    console.log(line);
}

// 3. Coordinate Pairs. Print a grid of coordinate pairs for a 3x3 grid.
    // (0,0) (0,1) (0,2)
    // (1,0) (1,1) (1,2)
    // (2,0) (2,1) (2,2)
for (row = 0; row < 3; row++) {
    let line = ""; // empty string
    for (col = 0; col < 3; col++) {
        line += "(" + row + "," + col + ")\t";
    }
    console.log(line);
}