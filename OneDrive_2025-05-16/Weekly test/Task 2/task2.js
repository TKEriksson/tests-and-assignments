const prompt = require("prompt-sync")(); // For user inp.

// 1. Print numbers 1 to 20 using for loop
{
  let str = "";
  for (let i = 1; i <= 20; i++) {
    str += i + " ";
  }
  console.log("1 to 20:\n" + str);
}

//2 . Print numbers 45 to 30 using for loop
{
  let str = "";
  for (let i = 45; i >= 30; i--) {
    str += i + " ";
  }
  console.log("\n45 to 30:\n" + str + "\n");
}

// 3. read a number as user input and check if number is even or odd
{

  console.log(isEven(Number.parseInt(prompt("Input number: "))));

  // 4. Write a function to solve task 3.
  function isEven(num) {

    return num % 2 == 0 ? `${num} is even` : `${num} is odd`;

  }

}




