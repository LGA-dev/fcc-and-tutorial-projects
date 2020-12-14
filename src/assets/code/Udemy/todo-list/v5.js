// normal for loop
// for (Initialization; Condition; Final-Expression) {};
// Initialize i at 0
// If i is lower than 3
// sum 1 to i
// {i++} and {i = i + 1} can be used, but the former is preferred
for (let i = 0; i < 3; i++) {
    console.log("hey");
}

// test array
let testArray = ['item 1', 'item 2', 'item 3'];

//outputs
testArray[0]
// item 1

testArray[1]
// item 2

testArray[2]
// item 3

// this for loop will print out the items inside testArray
// but it wouldn't work if I had more items the array
for (let i = 0; i < 3; i++) {
    // it uses the variable i to access the different items inside the array
    console.log(testArray[i]);
    // output
    // item 1
    // item 2
    // item 3
}

// this for loop will print out every item inside testArray, even if I add or delete some items later
// {i < testArray.length} uses the testArray length(property) to access EVERY item inside the variable
// length property counts how many items are inside an array

// Initialize i at 0
// If i is lower than the testArray lenght
// Sum 1 to i
for (let i = 0; i < testArray.length; i++) {
    // it uses the variable i to access the different items inside the array
    console.log(testArray[i]);
    // output
    // item 1
    // item 2
    // item 3
    // item 4 (assuming I added this one)
}

