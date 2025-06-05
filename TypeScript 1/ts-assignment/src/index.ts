// *** Ignore the following lines ***
import chalk from "chalk";
import prompt from "prompt-sync";
import { Readline } from "readline/promises";
// *** Ignore the above lines ***

// Use the following function to read input from the user:
const readLine = prompt({ sigint: true });

function runExerciseOne() {

  const firstName : string = "Tobias";
  const lastName = "Eriksson"; // (infered)
  console.log(
    `Hello ${firstName} ${lastName}! I'm glad to inform you that you are the test subject for my first assignment!`
  );
}

function runExerciseTwo() {
  /*
  Ask user to enter there firstname and lastname from the console and greet the user by name and the phrase ‘Have
  a nice day!’
  Example: "Hello Sebastian Vallin! Have a nice day!" 
  */
  const fName : string = readLine("Enter firstname:");
  const lName : string = readLine("Enter firstname:");
  console.log(`"Hello ${fName} ${lName}! Have a nice day!"   
`);
}

function runExerciseThree() {

  /*
    A) Add any two integer numbers and store the sum result in a variable of type double, display the result.
    B) Store an even number and an odd number in two different integer variables. Divide odd number by even
    number and display an accurate result.
  */

  //A:
  console.log("3.A:");
  const number1 : number = parseInt(readLine("Enter number 1: "));
  const number2 : number = parseInt(readLine("Enter number 1: "));
  const add : number = number1 + number2; // number IS double.
  console.log(`${number1} + ${number2} = ${add}`);

  console.log("\n3.B: Generating random even number (2- 10) and random odd number (1-9)...");
  //B:
  const rndEvenNumber = Math.floor((Math.random()*5)+1)*2;
  console.log("Even: " + rndEvenNumber);
  const rndOddNumber = Math.floor((Math.random()*5)+1)*2-1;
  console.log("odd: " + rndOddNumber);
  const add2 = rndOddNumber / rndEvenNumber;
  console.log(`${rndOddNumber} / ${rndEvenNumber} = ${add2}`);
  

  
}

function runExerciseFour() {
  //Ask user to enter a value of a radius. Calculate the area of a circle and the area of a sphere and display the results on the console. 
  // Area circle: A = pi * r * r
  // Area sphere: A = 4 * pi * r * r

  const radius : number = Number(readLine("Enter radius: "));
  console.log("Calculating...");
  const circleArea : number = Math.PI * radius * radius;
  const sphereArea : number = 4 * Math.PI * radius * radius;
  console.log(`Circle area: ${circleArea}`); 
  console.log(`Sphere area: ${sphereArea}`); 

}

function runExerciseFive() {
  // Ask user to enter two consecutive numbers and write the code to validate them (are they consecutive or not?) and display message accordingly
  // So b-a = +-1.
  
  // So i play around here a little just to learn. 
  type consec = boolean | "are" | "are not";

  const areConsecutive = (a : number, b : number, asBool : boolean) : consec => {
    if (asBool) return (Math.abs(a-b) == 1);
    return (Math.abs(a-b) == 1) ? "are" : "are not";
  }

  const 
  a : number = Number(readLine("Number 1:")), 
  b : number = Number(readLine("Number 2:"));

  console.log(`areConsecutive = ${areConsecutive(a,b,true)}`);
  console.log(`${a} and ${b} ${areConsecutive(a,b,false)} consecutive =)`);
  
}

function runExerciseSix() {
 //Ask user to enter any positive integer, check, and display message whether number is even or odd

 type even = "even" | "odd";
 const numberIs = (n : number) : even => {
  return (n % 2 == 0) ? "even" : "odd";
 }
 console.log(`The number is ${numberIs(Number(readLine("Enter a number ")))}`)

}

function runExerciseSeven() {
  //Ask user to enter their body temperature in degree Celsius. Display him a message if he has a fever or not. 

  // Ok without type.
  // Man brukar ju säga typ har 39.7 i feber. 
  // const temp : number = Number(Number(readLine("Body temp °C: ")).toFixed(1)); //.toFixed returns a string, so needs to convert to number 2 times.
  let temp : number = Math.round(Number(readLine("Body temp: "))*10)/10; //This will do.
  ;
  const isFever = (v : number) : string => {
   return (v >= 38) ? (v >= 42) ? "- You died from fever. RIP <3." : (v >= 39.1) ? "is high fever! :(" : "is normal fever, go home and take some pills." : "is not fever, youré ok! =)";
  };
  console.log(`${temp} ${isFever(temp)}`);

}

function runExerciseEight() {
  // Ask user to enter his grade of exam (A, B, C, D, E) and print a relevant message for the user as per the grade they have. 
  type grade = "A" | "B" | "C" | "D" | "E";

  const gradeMsg = (g : grade) : string => {
    if (g == "A") return "Excellent! Youré a perfeft human beeing!";
    if (g == "B") return "You are really good, but not as good as the perfect ones. Amlost there!";
    if (g == "C") return "Good but mediocer. Not impressive but good enough.";
    if (g == "D") return "You are ok+. Good, but you shouldn´t be proud of it.";
    return "Ok";
  }

  // So this function tells typescript what a grade is.
  function isGrade(v: string): v is grade {
    const validGrades : readonly string[] = ["A", "B", "C", "D", "E"];
    return (validGrades.includes(v));
  }

  function getGrade() : grade {
    let rl;
    while (true) if (isGrade(rl = readLine("Enter grade E - A").trim().toUpperCase())) return rl; 
  }

  const userGrade : grade = getGrade();
  console.log(`What does the teacher says about your grade ${userGrade.toString()}?\n${gradeMsg(userGrade)}`);

}

function runExerciseNine() {

  /*
  Let the user input any string, then check if the string is a palindrome sentence or not and display that result.
  Example 1: Entered “A man, a plan, a canal – Panama”
  Result: A man, a plan, a canal – Panama is a palindrome.
  Example 2: Entered Aibohphobia
  Result Aibohphobia is a palindrome.
  Example 3: Entered Palindrome
  Result: Palindrome is not a palindrome. 
  */

  const isPal = (v : string) : boolean => {
    return (v == [...v].reverse().join(''));
  }
  console.log(isPal(readLine("Enter a string to see if its a palindrome: ")) ? "it´s a palindrome." : "it´s not a palindrome.")
  
}

function runExerciseTen() {

  let str : string = "";


// String manipulation
// A)
// Change string “The quick fox Jumped Over the DOG” to the string “The brown fox jumped over the lazy dog” using required string manipulation functions.

str = "The quick fox Jumped Over the DOG";
console.log("String: " + str);
function a(v : string) : string {
  // The function will return all chars in lowercase.
  return v.toLocaleLowerCase();
}
console.log("A:\n" + a(str) + "\n\n");

// B)
// Enter any two words from console and check whether they are same words or not.
let str1 = readLine("Enter word 1:");
let str2 = readLine("Enter word 2:");
function b(v1 : string, v2 : string) : string {

  return (v1 == v2) ? `${v1} and ${v2} is the same` : `${v1} and ${v2} is NOT the same`;
}
console.log("B:\n" + b(str1, str2) + "\n\n");


// C)
// Input word Donkey and display it as the word Monkey on the console.
str = "Monkey";
console.log("String: " + str);
function c(v : string) : string {
  return v.replace("M", "D");
}
console.log("C:\n" + c(str) + "\n\n");

// D)
// Replace ‘I’ with ‘We’ and ‘am’ with ‘are’ in given text below.
// “I am going to visit Kolmården zoo tomorrow. I am a big fan of the dolphin show. I may watch all dolphin shows during the day. I would like to take a gondola safari as well. I wish to visit Bamse and his team there.”
str = "I am going to visit Kolmården zoo tomorrow. I am a big fan of the dolphin show. I may watch all dolphin shows during the day. I would like to take a gondola safari as well. I wish to visit Bamse and his team there.";
console.log("String: " + str);
function d(v : string) : string {
  while(v.indexOf("I") != -1) {
    v=v.replace("I", "We");
  } 
  while(v.indexOf(" am") != -1) {
    v=v.replace(" am", " are");
  } 
  return v;
}
console.log("D:\n" + d(str) + "\n\n");


// E)
// Actual string is "She is the popular singer." and the expected string is "She is the most popular singer."
str = "She is the popular singer.";
console.log("String: " + str);
function e(v : string) : string {
  return v.replace("popular", "most popular");
}
console.log("E:\n" + e(str) + "\n\n");

// F)
// Actual string is "A friend is the asset of your life." and the expected string is "A true friend is the greatest asset of your life"

str = "A friend is the asset of your life.";
function f(v : string, oldWords : string[], newWords : string[]) : string {
  for (let [i, w] of oldWords.entries()) {
    v = v.replace(w, newWords[i]);
  }
  return v;
}
console.log("F:\n" + f(str, ["friend", "asset"], ["true friend", "greatest asset"]) + "\n\n");

// G)
// Actual string is "My name is Sebastian Vallin." Expected string: "Sebastian Vallin"
str = "My name is Sebastian Vallin.";
function g(v : string) : string {
  return v.slice(v.indexOf("is") + 3, v.length-1);
}
console.log("G:\n" + g(str) + "\n\n");

// H)
// Actual string is "Arrays are very common in programming, they look something like: [1,2,3,4,5]" Expected string: "[1,4,5,6,7,8]""

str = "Arrays are very common in programming, they look something like: [1,2,3,4,5]";
function h(v : string, addToSeq : number) : string {
  let arr : string[] = v.substring(v.indexOf("[")+1, v.indexOf("]")).split(",");
  for (let i = 0; i < addToSeq; i++) arr.push(Number(Number(arr[arr.length-1]) + 1).toString());
  return "[" + arr.join(",") + "]";
}
console.log("H:\n" + h(str, 3).replace(",2,3", "") + "\n\n");
}

function runExerciseEleven() {
 // Write a program that asks user an arithmetic operator ('+','-','*' or '/') and two operands. Perform the corresponding calculation on the operands and display the result (use switch case).
  type Ops = '+' | '-' | '*' | '/';

  function isOps(v : string) : v is Ops {
    const validOps : readonly string[] =  ['+','-','*','/'];
    return validOps.includes(v);
  }

  function getOp() : Ops {
    let rl : string;
    while(true) if (isOps(rl = readLine("Enter + - / *:"))) return rl;
  }

  function getNum(numberName : string) : number {
    let rl : number;
    while(true) if (Number.isFinite(rl = Number(readLine(`Enter ${numberName}:`)))) return rl;
  }


  let calc : [Number, Ops, Number, Number];  
  const num1 : number = getNum("number 1"),
  num2 : number = getNum("number 2 (Tips! Try divide by zero) "),
  op : Ops = getOp();

  calc = [num1, op, num2, getRes(num1,num2,op)];

  let str = "";
  for (let [i, itm] of calc.entries()) {
    // iterable? Yes. Seems to be infered as string
    str += ((i == calc.length-1) ? "= " + itm : itm + " ");
  }
  console.log(str);
  //console.log(`${calc[0]} ${calc[1]} ${calc[2]} =  ${calc[3]}`);

  function divZero (n : number) : number {
    console.log(`${n} / 0  ${n > 0 ? 'lim -> ∞+' : n <0 ? 'lim -> ∞-' : '=0 (indeterminate)'}`);
    return (n<0) ? -Infinity : (n>0) ? Infinity : 0;
  }

  function getRes(n1 :number, n2 : number, operator : Ops) : number {
    switch (operator) {
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        case '*': return n1 * n2;
        case '/': return (n2 != 0) ? n1 / n2 : divZero(n1);
      } 
    }
}



function runExercise12() {

  /*
    Ask user to enter any number smaller than 100. Print all values from 1 to the entered number in ascending and descending order.
    Write the same thing using the different loops (for, while and do-while).
  */

  function getNumUnder100() : number {
    let rl : number;
    while(true) if (Number.isFinite(rl = Number(readLine("Enter a number under 100: ")))) if (rl < 100) return rl;
  }
  
  const num = getNumUnder100();

  let strFor : string[] = [];
  let strDo : string[] = [];
  let strWhile : string[] = [];
  
  for (let i : number = 0; i < num; i++) strFor.push(Number(i+1).toString());
  console.log("For:\n" + strFor.join(','));

  do strDo.push((strDo.length+1).toString()); while(strDo.length < num)
  console.log("Do:\n" + strDo.join(','));

  while (strWhile.length < num) strWhile.push((strWhile.length+1).toString());
  console.log("while:\n" + strWhile.join(','));

}

function runExercise13() {
  /*
  Generate a random number and save it to a variable, SecretNumber.
  If he/she misses the first guess ask the user if he/she wants to guess the number again. Repeat the guessing until user answers no or guess the correct number.
  Limit the secret number to be from 1 to 10 so that it not become to hard to guess right.
  */
  
  let rl : number = NaN;
  while(!Number.isFinite(rl) || rl <= 0) rl = Number.parseInt(readLine("From:"));
  const from = rl;
  rl = NaN;
  while(!Number.isFinite(rl) || rl <= from) rl = Number.parseInt(readLine("To:"));
  const to = rl;

  const arrayFromTo : number[] = [];
  for (let i = from; i <= to; i++) arrayFromTo.push(i);
  
  const SecretNumber = Math.floor(Math.random() * (to - from + 1)) + from;

  type Guess = typeof arrayFromTo[number] | 'no';

  function isGuess(v : string | number) : v is Guess {
    const validGuess : readonly string[] = [...arrayFromTo.map(v => v.toString()), "no"];
    return (validGuess.includes(v.toString()));
  }

  while(true) {
    let rl = readLine(`Enter number from ${from} to ${to} (or 'no' to stop guess):`);
    if (isGuess(rl)) {
     if (Number(rl) === SecretNumber) {
      console.log("You guessed right! It was " + SecretNumber);
      break;
     } else if (rl === 'no') {
      console.log("You gave up. Then number was: " + SecretNumber);
      break;
     } else {
      console.log("Wrong number.");
     }
    } else {
      console.log("Invalid input.");
    }
  }
}

function runExercise14() {
  /*
  Display the multiplication table 10 * 10 on the console.
  */

  let str : string = "|";
  const r = 10;
  const c = 10;
  for (let i = 1; i <= r; i++) {
    for (let j = 1; j <= c; j++) {
      str += ' ' + String(Number(i * j)).padStart(String(r*c).length, " ") + ' |';
    }
    str+='\n|';
  }
  console.log(str.slice(0, str.length-1));

}

function runExercise15() : void {
  //Print the following * pattern on console using loop

  //* * * * * 
  // * * * *
  //  * * *
  //   * *
  //    *

  let rows : number = 0;
  while (!(rows > 1 && rows <= 50)) {
    rows = Number(readLine("How many rows? Min 2 max 50: "));
  }

  let str : string = "";
  for (let i = 0; i < rows; i++) {
    str += String(' ').repeat(i) + String('* ').repeat(rows-i);
    str = str.slice(0, str.length-1);
    str += '\n';
  }
  console.log(str);
  
}

function runExercise16() : void {
// Write a method that keeps asking the user to enter numbers, until the user enters 0. Then displays a sum and average of all numbers entered before 0

  class Numbers {

    listOfNums : number[] = [];

    constructor() {

    }

    getAvg() : number {
      return this.listOfNums.length > 0 ? this.getSum() / this.listOfNums.length : 0;
    }

    getSum() : number {
      return this.listOfNums.reduce((a, c) => a+c, 0);
    }

    getNums() : string {
      let rl : number;
      while(true) {
        rl = Number(readLine("Enter number:"));
        if (!Number.isFinite(rl)) rl = 0;
        if (rl == 0) {
          return (`The numbers you have entered was:\n${this.listOfNums.join(', ')}\nSum of all numbers: ${this.getSum()}\nAverage of all numbers: ${this.getAvg()}`);
        } else {
          this.listOfNums.push(rl);
        }
      }

    }

  }

  const numberCounter = new Numbers();
  console.log(numberCounter.getNums());

}


function runExercise17() : void {
  /*
Ask the user to enter the number of values to display from the Fibonacci series, this number can be ither number of values to display or max number to display (you only need to implement one of those two). Calculate and display the selected number from the Fibonacci series on the console.
Example Entered 7
Result 0, 1, 1, 2, 3, 5, 8 (assuming the max number off values was implemented)
  */

  function fib(n : number) : number {
    if (n <= 0) return 0;
    if (n < 2) return 1;
    return fib(n-2) + fib(n-1);
  }

  function fibList(n : number) : number[] {
    const tmpList : number[] = [];
    for (let i = 0; i < n; i++) {
      tmpList.push(fib(i));
    }
    return tmpList;
  }

  console.log(fibList(Number(readLine("Fib nr:"))).join(', '));

}


function runExercise18() : void {
  // There is no 18 in the assignment document?
  console.log("There is no 18 in the assignment document?");
}


function runExercise19() : void {
  /*
    Exercise 19
    Ask the user for the height and width of a triangle. Call a function to calculate the area of a triangle and have
    height and width as parameters to that function. The function returns the area. Display the result in the console.
  */

  // wanted to try interface.
  interface triangle {
    width: number;
    height: number;
  }


  const triangle1 : triangle = {
    width: Number(readLine("Width of triangle:")),
    height: Number(readLine("Height of triangle:")),
  }

  function showArea(w:number,h:number) : number {
    return 0.5*w*h;
  }


  console.log("Area of triangle: " + showArea(triangle1.width, triangle1.height));

}

function runExercise20() : void {}
function runExercise21() : void {}
function runExercise22() : void {}
function runExercise23() : void {}
function runExercise24() : void {}
function runExercise25() : void {}
function runExercise26() : void {}
function runExercise27() : void {}
function runExercise28() : void {}
function runExercise29() : void {}
function runExercise30() : void {}
function runExercise31() : void {}
function runExercise32() : void {}
function runExercise33() : void {}
function runExercise34() : void {}


/* ^^^^^^^^^^^^  Add the rest of the exercise functions above this line ^^^^^^^^^^^^ */

let keepAlive = true;
console.clear();
while (keepAlive) {
  try {
    const assignmentChoice = parseInt(
      readLine("Enter assignment number (ctrl + C or -1 to exit): ")
    );
    console.log();
    switch (assignmentChoice) {
      case 1:
        runExerciseOne();
        break;
      case 2:
        runExerciseTwo();
        break;
      case 3:
        runExerciseThree();
        break;
      case 4:
        runExerciseFour();
        break;
      case 5:
        runExerciseFive();
        break;
      case 6:
        runExerciseSix();
        break;
      case 7:
        runExerciseSeven();
        break;
      case 8:
        runExerciseEight();
        break;
      case 9:
        runExerciseNine();
        break;
      case 10:
        runExerciseTen();
        break;
      case 11:
        runExerciseEleven();
        break;
      case 12:
        runExercise12();
        break;
      case 13:
        runExercise13();
        break;
      case 14:
        runExercise14();
        break;
      case 15:
        runExercise15();
        break;
      case 16:
        runExercise16();
        break;
      case 17:
        runExercise17();
        break;
      case 18:
        runExercise18();
        break;
      case 19:
        runExercise19();
        break;
      case 20:
        runExercise20();
        break;
      case 21:
        runExercise21();
        break;
      case 22:
        runExercise22();
        break;
      case 23:
        runExercise23();
        break;
      case 24:
        runExercise24();
        break;
      case 25:
        runExercise25();
        break;
      case 26:
        runExercise26();
        break;
      case 27:
        runExercise27();
        break;
      case 28:
        runExercise28();
        break;
      case 29:
        runExercise29();
        break;
      case 30:
        runExercise30();
        break;
      case 31:
        runExercise31();
        break;
      case 32:
        runExercise32();
        break;
      case 33:
        runExercise33();
        break;
      case 34:
        runExercise34();
        break;

      /* ^^^^^^^^^^^^  Add the rest of the exercises above this line ^^^^^^^^^^^^ */
      case -1:
        keepAlive = false;
        break;
      default:
        console.log(chalk.red("That is not a valid assignment number!"));
        break;
    }
    if (assignmentChoice !== -1) {
      console.log();
      readLine(chalk.dim("Press enter to continue..."));
      console.clear();
    } else {
      console.log(chalk.green("Exiting..."));
    }
  } catch (err) {
    console.log(chalk.red(err));
  }
}
