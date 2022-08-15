// Problem 1
console.log('This is problem 1');
// declaring and assigning variables for this exercist
let ages = [3,9,23,64,2,28,93];
console.log('This is the initial array ', ages);

// section (a)
//create code solution that programmatically subtracts the value of the first
// element in the array ages from the last element in the array ages without using
// index numbers to reference the last element in the array.
// Example != : ages[7] - ages[0]. print the result to the console.
console.log("Section A")    

var first = ages[0];
var last = ages[ages.length-1];

function subtractAges(arr){
    let subtraction = first-last;
    return subtraction;
}
console.log(subtractAges())

// section (b)
// Add a new age to your array and repeat above step to ensure the code is dynamic.
console.log('section B');

ages.unshift(97);
ages.push(77);

console.log(`This is now the modified array ages ` ,ages);
console.log(`this is now the value of the first
 element in the array `, ages[0])

 console.log(`This is now the last element of the array
 ages `, ages[ages.length - 1]);

//  the statement below is returning the wrong value for the problem 
// after adding additional values to the array ages.
console.log(`this is the value returned when subtracting the
first age from the last age in the modified array `, 
subtractAges());



// section (c)

// Create a loop to iterate through the array and calculate average age.
// Print the result to the console.

console.log('Section C');

function averageAge (arr){
var total = 0;
var count = 0;

Array.forEach(function(item, index){
    total += item;
    count ++
    })
        return total / count;
        }

//    console.log(averageAge());

// Problem 2
// Create an array called names that contains the following values
// "Sam", 'Tommy', 'Tim', 'Sally',  'Buck', 'Bob'.
console.log('This is problem 2');
const names =['sam', 'Tommy', 'Sally', 'Buck', 'Bob'];
console.log('This is the data contained in the array called names ',names);


//section (a)
// create a loop to interate through the array and 
// calculate the average number of letters per name.
// Print results to the console.




// Section (b)
// create a loop to iterate through the array and 
// concatenate all the names together, 
// separated by spaces
// and print the results to the console.


// Problem 3
// How do you access the last item of an array?
console.log('This is problem 3');

console.log('to access the last element of an array you would use the arrayName[arrayName - 1] code where arrayName === the name assigned to that particular array.');

// problem 4

// how do you access the first element of any array?

console.log('Problem 4')

console.log('to access the first element of any array, use the arrayName[0] code where arrayName === the name assigned to that particular array.');

// Problem 5
// Create a new array called nameLengths. Write a loop that iterates over 
// the previously created names array and add the length of each name to 
// the nameLengths array.

console.log('Problem 5');




// problem 6
// Write a loop to iterate over the nameLengths array and calculate the sum
// of all the elements in the array. Print the results to the console.
console.log('Problem 6');





// problem 7
// Write a function that takes in two parameters, 'word' and 'n', as arguments
//  and returns the word concatenated to itself 'n' number of times.
// Ex: if I pass in 'hello' and 3, I would expect the function to return
// 'hellohellohello'.

console.log('Problem 7');






// Problem 8
//Write a function that takes two parameters, firstName and lastName, 
// and returns a full name (the full name should be the first and the
// last name separated by a space).

console.log('Problem 8');




// problem 9
// Write a function that takes an array of numbers and returns true 
// if the sum of all the numbers in the array is greater than 100

console.log('Problem 9');





// problem 10
// Write a function that takes an array of numbers and returns 
// the average of all the elements in the array.
console.log('Problem 10');




// problem 11
// Write a function that takes two arrays of numbers and returns 
// true if the average of the elements in the first array is greater
// than the average of the elements in the second array.
console.log('Problem 11');





// problem 12
// Write a function called willBuyDrink that takes a boolean 
// isHotOutside, and a number moneyInPocket, and returns true
// if it is hot outside and if moneyInPocket is greater than 10.50.
console.log('Problem 12');




// problem 13
// Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.
console.log('Problem 13');