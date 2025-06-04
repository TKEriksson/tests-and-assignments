// *** Ignore the following lines ***
import chalk from "chalk";
import prompt from "prompt-sync";
import { Readline } from "readline/promises";
// *** Ignore the above lines ***

// Use the following function to read input from the user:
const readLine = prompt({ sigint: true });

function runExerciseOne() {

  const firstName = "Tobias";
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
    return (Math.abs(a-b) == 1) ? false : "are not";
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
   return (v >= 38) ? (v >= 42) ? "- You died from fever. RIP <3." : (v >= 39.1) ? "is high fever! :( You might die." : "is normal fever, go home and take some pills." : "is not fever, youré ok! =)";
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
    if (g == "D") return "You are ok+. Good, but you should not be proud of it.";
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

  
}

function runExerciseTen() {}

function runExerciseEleven() {}

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
