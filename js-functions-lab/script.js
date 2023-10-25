// Q1. Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

// Q1 Solution

function maxOfTwoNumbers(num1, num2) {
  if (num1 >= num2) {
    return num1;
  } else {
    return num2;
  }
}

let resultMaxOfTwo = maxOfTwoNumbers(12, 20);
console.log(resultMaxOfTwo);

// Q2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

// Q2 Solution

const maxOfThreeNums = function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};

let resultMaxOfThree = maxOfThreeNums(200, 100, 80);
console.log(resultMaxOfThree);

// Q3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

// Q3 Solution

function isCharAVowel(char) {
  return char === "a" || char === "e" || char === "i" || char === "o" || char === "u";
}

let IsCharAVowelResult = isCharAVowel("e");
console.log(IsCharAVowelResult);

// Q4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

// Q4 Solution

let sum = 0;

const arraySummation = function sumArray(myNums) {
  myNums.forEach((item) => {
    sum += item;
  });
  return sum;
};

let sumArrayResult = arraySummation([2, 4, 5]);
console.log(sumArrayResult);

// Q5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

// Q5 Solution

const myArr = [2, 4, 5];
let multiply = 1;

function multiplyArray(myArr) {
  myArr.forEach((item) => {
    multiply *= item;
  });
  return multiply;
}

let multiplyArrayResult = multiplyArray(myArr);
console.log(multiplyArrayResult);

// Q6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

const numArgs = (...args) => {
  return args.length;
};

let numArgsResult = numArgs("Foo", "Bar");
console.log(numArgsResult);

// Q7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

// Q7 Solution

function reverseString(myString) {
  let splitString = myString.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

let reverseStringResult = reverseString("rockstar");
console.log(reverseStringResult);

// Q8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

// Q8 Solution

const longestStringInArray = function longestString(myStrings) {
  return myStrings.sort(function (smallString, bigString) {
    return bigString.length - smallString.length;
  })[0].length;
};

console.log(longestStringInArray(["Hello, World!", "This is a long string, bruh!", "Dude, this is an even longer string!"]));

// Q9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
